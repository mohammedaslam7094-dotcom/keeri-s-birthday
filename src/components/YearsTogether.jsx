import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Infinity as InfinityIcon, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import RelationshipCounter from './RelationshipCounter';
import { loveData } from '../data/loveData';

const memoriesList = [
  'Thousands of conversations.',
  'Countless calls across the miles.',
  'Random laughs that made our stomachs hurt.',
  'Little fights and stubborn moments.',
  'Soft apologies and understanding hearts.',
  'Late-night talks until we fell asleep.',
  'Missed moments we wish we shared.',
  'Beautiful memories that will never fade.',
];

export default function YearsTogether() {
  const years = String(loveData.relationshipYears || 4).padStart(2, '0');

  return (
    <section id="years" className="relative py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-obsidian via-wine-950/70 to-obsidian overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-roseAccent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 03"
          title={`${loveData.relationshipYears || 4} Years of Us ❤️`}
          subtitle="Time isn't measured in clocks, but in moments we've held onto."
        />

        {/* Live Relationship Counter */}
        <RelationshipCounter />

        <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 border border-gold-500/30 shadow-2xl relative overflow-hidden text-center mt-12">
          {/* Subtle Gilded Corner Ornaments */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold-400/40 rounded-tl" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold-400/40 rounded-tr" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-400/40 rounded-bl" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-400/40 rounded-br" />

          {/* Large Stylized Number Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center mb-8"
          >
            <div className="relative inline-block">
              <span className="font-serif text-7xl sm:text-9xl md:text-[11rem] font-bold tracking-tight text-gold-gradient select-none leading-none">
                {years}
              </span>
              <Sparkles className="absolute -top-2 -right-4 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 text-gold-300 animate-spin-slow" />
            </div>

            <div className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-wine-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              <InfinityIcon className="w-4 h-4 text-roseAccent" />
              <span>YEARS OF US</span>
            </div>
          </motion.div>

          {/* Intro Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-xl sm:text-2xl md:text-3xl text-blush-100 font-light italic mb-8"
          >
            Four years isn't just a number.
          </motion.p>

          {/* Memory Checklist / Reflection Stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-2xl mx-auto text-left mb-10">
            {memoriesList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-wine-950/60 border border-blush-300/10 hover:border-gold-500/30 transition-colors duration-200"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-roseAccent shrink-0 shadow-[0_0_6px_rgba(225,29,72,0.8)]" />
                <span className="text-blush-200/90 text-sm sm:text-base font-light">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Emotional Turning Point */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-2 mb-8 text-blush-300/80 font-serif italic text-base sm:text-lg"
          >
            <p>And somehow...</p>
            <p>through everything...</p>
            <p className="text-blush-100 font-medium not-italic text-lg sm:text-xl">
              we are still here.
            </p>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-wine-900 via-roseAccent/30 to-wine-900 border border-gold-500/40 shadow-lg"
          >
            <Heart className="w-5 h-5 text-roseAccent fill-roseAccent animate-pulse" />
            <span className="font-serif text-lg sm:text-xl text-gold-200 font-medium tracking-wide">
              Still choosing each other. ❤️
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
