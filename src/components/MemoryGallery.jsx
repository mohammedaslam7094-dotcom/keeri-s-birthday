import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ZoomIn, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { loveData } from '../data/loveData';

const captions = [
  'One of my favorite memories ❤️',
  'Wish I could go back to this moment.',
  'Us. That\'s enough.',
  'Still makes me smile.',
  'The moments I never want to forget.',
  'One day, we\'ll make many more.',
];

export default function MemoryGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const photosList = loveData.photos && loveData.photos.length > 0
    ? loveData.photos
    : [
        '/photos/photo1.jpg',
        '/photos/photo2.jpg',
        '/photos/photo3.jpg',
        '/photos/photo4.jpg',
        '/photos/photo5.jpg',
        '/photos/photo6.jpg',
      ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photosList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photosList.length) % photosList.length);
  };

  return (
    <section id="memories" className="relative py-24 px-4 sm:px-6 md:px-12 bg-obsidian overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-wine-900/25 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 04"
          title="Captured Moments 📸"
          subtitle="Pieces of time where my whole world was you."
        />

        {/* 3D Slidable Coverflow Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Main 3D Card Stage */}
          <div className="relative w-full h-[430px] sm:h-[500px] md:h-[540px] flex items-center justify-center overflow-hidden [perspective:1200px]">
            {photosList.map((photoSrc, idx) => {
              // Calculate offset relative to currentIndex
              let offset = idx - currentIndex;
              if (offset < -Math.floor(photosList.length / 2)) {
                offset += photosList.length;
              } else if (offset > Math.floor(photosList.length / 2)) {
                offset -= photosList.length;
              }

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              const caption = captions[idx % captions.length];
              const hasError = imageErrors[idx];

              // 3D Transforms based on position
              let translateX = '0%';
              let rotateY = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              if (isCenter) {
                translateX = '0%';
                rotateY = 0;
                scale = 1.05;
                zIndex = 30;
                opacity = 1;
              } else if (isLeft) {
                translateX = '-65%';
                rotateY = 22;
                scale = 0.84;
                zIndex = 20;
                opacity = 0.65;
              } else if (isRight) {
                translateX = '65%';
                rotateY = -22;
                scale = 0.84;
                zIndex = 20;
                opacity = 0.65;
              } else if (offset < -1) {
                translateX = '-115%';
                rotateY = 35;
                scale = 0.68;
                zIndex = 10;
                opacity = 0.25;
              } else if (offset > 1) {
                translateX = '115%';
                rotateY = -35;
                scale = 0.68;
                zIndex = 10;
                opacity = 0.25;
              }

              return (
                <motion.div
                  key={idx}
                  onClick={() => {
                    if (isCenter && !hasError) {
                      setSelectedPhoto({ src: photoSrc, caption, index: idx });
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  animate={{
                    x: translateX,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 25,
                  }}
                  className={`absolute w-[260px] xs:w-[290px] sm:w-[330px] md:w-[370px] rounded-3xl overflow-hidden glass-panel border transition-all duration-300 cursor-pointer shadow-2xl ${
                    isCenter
                      ? 'border-gold-400/80 shadow-[0_0_45px_rgba(212,175,55,0.35)] ring-1 ring-gold-400/50'
                      : 'border-gold-500/20 hover:border-gold-400/40 hover:opacity-80'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Photo Frame Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-wine-950 flex items-center justify-center">
                    {!hasError ? (
                      <>
                        <img
                          src={photoSrc}
                          alt={`Memory ${idx + 1}`}
                          loading="lazy"
                          onError={() => handleImageError(idx)}
                          className="w-full h-full object-cover object-center"
                        />

                        {/* Romantic Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent pointer-events-none" />

                        {/* Zoom Hint on Center Card */}
                        {isCenter && (
                          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-obsidian/70 backdrop-blur-md border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-md">
                            <ZoomIn className="w-4 h-4" />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-wine-950 to-obsidian w-full h-full">
                        <div className="w-14 h-14 rounded-full bg-wine-900/60 border border-gold-500/30 flex items-center justify-center mb-3">
                          <Heart className="w-7 h-7 text-roseAccent fill-roseAccent/40 animate-pulse" />
                        </div>
                        <p className="font-serif text-base text-gold-300">Cherished Memory</p>
                        <p className="text-[11px] text-blush-300/60 mt-1 italic">
                          "Locked safely in my heart"
                        </p>
                      </div>
                    )}

                    {/* Photo Index Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-obsidian/75 backdrop-blur-md border border-gold-500/20 text-[10px] font-mono text-gold-400">
                      MEMORY #{String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div className="p-4 bg-wine-950/95 border-t border-gold-500/20 flex items-center justify-between gap-2">
                    <p className="font-serif text-xs sm:text-sm text-blush-100 italic leading-snug truncate">
                      "{caption}"
                    </p>
                    <Heart className="w-4 h-4 text-roseAccent shrink-0 fill-roseAccent/30" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls & Pagination */}
          <div className="flex items-center justify-center gap-6 mt-6 w-full">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous memory"
              className="w-11 h-11 rounded-full bg-wine-950/80 border border-gold-500/30 text-gold-300 hover:text-white hover:bg-roseAccent hover:border-gold-300 flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {photosList.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to memory ${dotIdx + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx
                      ? 'w-6 h-2 bg-gradient-to-r from-roseAccent to-gold-400 shadow-[0_0_8px_rgba(225,29,72,0.8)]'
                      : 'w-2 h-2 bg-blush-300/30 hover:bg-gold-400/60'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next memory"
              className="w-11 h-11 rounded-full bg-wine-950/80 border border-gold-500/30 text-gold-300 hover:text-white hover:bg-roseAccent hover:border-gold-300 flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Touch Swipe Instruction */}
          <p className="text-xs font-light text-blush-300/60 font-serif italic mt-4 text-center">
            Swipe or tap side cards to slide through memories ✨
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
              className="absolute top-5 right-5 z-50 w-12 h-12 rounded-full bg-wine-900/80 border border-gold-500/30 text-blush-100 flex items-center justify-center hover:bg-roseAccent hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-2xl overflow-hidden glass-panel border border-gold-500/40 shadow-2xl p-2 sm:p-3"
            >
              <div className="relative max-h-[75vh] w-full overflow-hidden rounded-xl bg-wine-950 flex items-center justify-center">
                <img
                  src={selectedPhoto.src}
                  alt={`Memory ${selectedPhoto.index + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-4 sm:p-6 text-center">
                <p className="font-serif text-lg sm:text-2xl text-gold-gradient italic mb-1">
                  "{selectedPhoto.caption}"
                </p>
                <p className="text-xs font-mono text-blush-400/60 uppercase tracking-widest mt-2">
                  Memory #{String(selectedPhoto.index + 1).padStart(2, '0')} • Together Forever
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
