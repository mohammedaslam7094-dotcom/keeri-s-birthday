import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Compass } from 'lucide-react';
import SectionHeading from './SectionHeading';

const futureBucketList = [
  { text: 'More birthdays together', emoji: '🎂' },
  { text: 'More hugs', emoji: '🫂' },
  { text: 'More random walks', emoji: '🚶‍♀️' },
  { text: 'More late-night conversations', emoji: '🌙' },
  { text: 'More photos', emoji: '📸' },
  { text: 'More adventures', emoji: '✈️' },
  { text: 'Less distance', emoji: '🌍', special: true },
  { text: 'More us', emoji: '❤️', highlight: true },
];

export default function Future() {
  return (
    <section id="future" className="relative py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-obsidian via-wine-950/60 to-obsidian overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 09"
          title="One Day... ❤️"
          subtitle="Everything waiting for us on the other side of distance."
        />

        {/* Bucket List Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 max-w-3xl mx-auto">
          {futureBucketList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`p-4 sm:p-5 rounded-2xl flex items-center justify-between border shadow-lg transition-all duration-300 ${
                item.highlight
                  ? 'bg-gradient-to-r from-roseAccent/30 via-wine-900 to-roseAccent/30 border-roseAccent/50 shadow-[0_0_20px_rgba(225,29,72,0.3)]'
                  : item.special
                  ? 'bg-gradient-to-r from-gold-500/20 via-wine-950 to-gold-500/20 border-gold-500/40'
                  : 'glass-panel border-gold-500/20 hover:border-gold-400/40 hover:bg-wine-950/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl p-1.5 rounded-xl bg-wine-950/80 border border-gold-500/20">
                  {item.emoji}
                </span>
                <span className="font-serif text-lg sm:text-xl text-gold-100 font-medium">
                  {item.text}
                </span>
              </div>
              <Sparkles className="w-4 h-4 text-gold-400/60 shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Climax Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-panel rounded-3xl p-8 sm:p-12 border border-gold-500/40 shadow-2xl text-center max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="space-y-4 font-serif text-fluid-quote text-blush-100 font-light leading-relaxed">
            <p>One day, I won't have to miss you from far away.</p>
            <p className="text-gold-300 italic">I'll just look beside me...</p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-semibold not-italic pt-2">
              and you'll be there. ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
