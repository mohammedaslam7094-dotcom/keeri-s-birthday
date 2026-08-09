import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { loveData } from '../data/loveData';

const wishesData = [
  {
    number: '01',
    emoji: '🌷',
    title: 'Your Dreams Come True',
    wish: 'May every dream in your heart become reality, and may I always be there beside you to celebrate every little victory.',
  },
  {
    number: '02',
    emoji: '🫂',
    title: 'An End To Distance',
    wish: 'May this distance end soon, so we can turn every missed moment into a beautiful memory together.',
  },
  {
    number: '03',
    emoji: '❤️',
    title: 'Ever-Growing Love',
    wish: 'May our love keep growing stronger through every year, every distance, every fight, every laugh, and every beautiful moment.',
  },
  {
    number: '04',
    emoji: '🌙',
    title: 'Peace & Serenity',
    wish: "May your nights be peaceful, your days be happy, and whenever you miss me, remember that somewhere I'm missing you even more.",
  },
  {
    number: '05',
    emoji: '🥰',
    title: 'Endless Reasons to Smile',
    wish: 'May you always have reasons to smile, and may I always be one of those reasons.',
  },
  {
    number: '06',
    emoji: '💍',
    title: 'A Lifetime Together',
    wish: 'May this be only one of the many birthdays we celebrate together. I wish for a future where distance is no longer between us.',
  },
];

export default function Wishes() {
  return (
    <section id="wishes" className="relative py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-obsidian via-wine-950/50 to-obsidian overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-roseAccent/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 07"
          title={`Six Wishes For You, ${loveData.herName || 'My Love'} ✨`}
          subtitle="Every birthday candle I would blow out would only ever wish for you."
        />

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {wishesData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-gold-500/20 shadow-xl flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-roseAccent/10 rounded-full blur-2xl group-hover:bg-gold-500/20 transition-colors duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl p-2.5 rounded-2xl bg-wine-950/80 border border-gold-500/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span className="font-mono text-xs font-semibold text-gold-400 px-3 py-1 rounded-full bg-wine-950/90 border border-gold-500/20">
                    WISH {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-gold-100 font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-blush-200/90 text-sm sm:text-base leading-relaxed font-light font-sans">
                  "{item.wish}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center justify-between text-xs text-blush-400/50">
                <span className="font-serif italic text-gold-400/80">From my heart</span>
                <Heart className="w-3.5 h-3.5 text-roseAccent fill-roseAccent/40 group-hover:scale-125 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
