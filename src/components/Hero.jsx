import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown, Sparkles, Flame, Sparkle } from 'lucide-react';
import { loveData } from '../data/loveData';
import TypewriterText from './TypewriterText';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const [titleFinished, setTitleFinished] = useState(false);

  const triggerHeroCrackers = () => {
    try {
      // Golden & Rose fireworks burst
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#FFD700', '#E11D48', '#FF758F', '#FBBF24', '#FAF6EE'],
      });
      // Fire side burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF'],
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF'],
        });
      }, 250);
    } catch (e) {}
  };

  const displayName = loveData.nickname 
    ? `${loveData.herName} (${loveData.nickname})`
    : loveData.herName || 'My Love';

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-20 pb-16 px-4 sm:px-6 md:px-12 overflow-hidden bg-obsidian"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-wine-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine-950/90 border border-gold-500/20 text-gold-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6 shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>FOR THE GIRL WHO HAS MY HEART</span>
        </motion.div>

        {/* Main Heading with Letter-by-Letter Typewriter */}
        <div className="mb-4 min-h-[70px] sm:min-h-[90px] flex items-center justify-center">
          <h1 className="font-serif text-fluid-hero font-normal tracking-tight text-gold-gradient">
            <TypewriterText
              text={`Happy Birthday, ${displayName}`}
              speed={55}
              delay={300}
              onComplete={() => setTitleFinished(true)}
            />
            {titleFinished && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block text-roseAccent ml-2"
              >
                ❤️
              </motion.span>
            )}
          </h1>
        </div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="max-w-xl mx-auto mb-6 text-blush-200/90 font-light leading-relaxed text-base sm:text-lg md:text-xl font-serif italic"
        >
          <p>{loveData.relationshipYears || 4} years of us.</p>
          <p>{loveData.longDistanceYears || 2} years of distance.</p>
          <p className="text-gold-300 font-normal">A lifetime of choosing you.</p>
        </motion.div>

        {/* Interactive Burst Crackers Celebration Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8"
        >
          <button
            onClick={triggerHeroCrackers}
            className="group px-5 py-2.5 rounded-full bg-wine-900/80 border border-gold-500/40 hover:border-gold-300 text-gold-200 text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:bg-roseAccent hover:text-white transition-all duration-300 active:scale-95"
          >
            <Sparkle className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>Burst Birthday Crackers 🎆</span>
          </button>
        </motion.div>

        {/* Hero Photo Card with Luxury Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[400px]"
        >
          {/* Subtle Outer Glow Accent */}
          <div className="absolute -inset-1 bg-gradient-to-r from-roseAccent/30 via-gold-500/40 to-wine-600/30 rounded-2xl sm:rounded-3xl blur-md group-hover:blur-lg transition-all duration-500 opacity-80" />
          
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-wine-950 border border-gold-500/40 shadow-2xl p-2 sm:p-2.5">
            <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-wine-900/40 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={loveData.heroPhoto}
                  alt={`Special memory with ${loveData.herName}`}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center text-blush-300">
                  <Heart className="w-16 h-16 text-roseAccent mb-3 animate-pulse" />
                  <p className="font-serif text-lg text-gold-300">Our Favorite Moment</p>
                  <p className="text-xs text-blush-300/60 mt-1">Forever captured in my heart</p>
                </div>
              )}

              {/* Romantic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-obsidian/80 backdrop-blur-md text-[11px] font-mono text-gold-300 border border-gold-500/20">
                  ✨ Always & Forever
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col items-center gap-2 text-blush-300/80 text-xs sm:text-sm font-light tracking-widest uppercase cursor-pointer"
          onClick={() => {
            const nextEl = document.getElementById('story');
            if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Scroll slowly...</span>
          <span className="text-[11px] text-gold-400/80 capitalize italic font-serif">I have a lot to tell you</span>
          <ChevronDown className="w-4 h-4 text-roseAccent animate-bounce mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
