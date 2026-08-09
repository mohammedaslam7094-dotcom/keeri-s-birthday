import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const commitments = [
  "I'll listen.",
  "I'll understand.",
  "I'll try.",
  "I'll stay.",
  "I'll choose you.",
];

export default function Promise() {
  return (
    <section id="promise" className="relative py-24 px-4 sm:px-6 md:px-12 bg-obsidian overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-wine-900/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 08"
          title="My Promise To You 💍"
          subtitle="A sacred vow not just for today, but for all the days that follow."
        />

        <div className="glass-panel rounded-3xl p-6 sm:p-10 md:p-14 border border-gold-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Gilded Frame Accents */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-wine-600 via-gold-400 to-roseAccent" />

          <div className="text-center max-w-2xl mx-auto space-y-8">
            {/* Introductory Vulnerable Lines */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3 font-serif text-lg sm:text-xl md:text-2xl text-blush-200/90 font-light italic"
            >
              <p>I can't promise that life will always be perfect.</p>
              <p>I can't promise there will never be fights.</p>
              <p>I can't promise that every day will be easy.</p>
            </motion.div>

            {/* Turning Transition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="py-4"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-wine-900/80 border border-gold-500/40 text-gold-300 font-serif text-lg sm:text-xl font-medium tracking-wide shadow-md">
                But I can promise this...
              </span>
            </motion.div>

            {/* Core Commitments List */}
            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
              {commitments.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-wine-950/80 border border-gold-500/20 shadow-md text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="font-serif text-lg sm:text-xl text-gold-100 font-semibold">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Cadence: Again and Again */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-1 font-serif text-xl sm:text-2xl text-gold-300 font-medium italic"
            >
              <p>Again.</p>
              <p>And again.</p>
              <p className="text-2xl sm:text-3xl text-gold- gradient font-bold not-italic">
                And again.
              </p>
            </motion.div>

            {/* Deep Reassurance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-4 space-y-2 text-blush-200 font-light text-base sm:text-lg leading-relaxed"
            >
              <p>No matter how far you are.</p>
              <p>No matter how difficult the day is.</p>
              <p className="font-serif text-xl sm:text-2xl text-gold-100 font-medium italic pt-2">
                "You will always have a place in my heart."
              </p>
            </motion.div>

            {/* Final Statement Seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-6"
            >
              <div className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-wine-900 via-roseAccent/40 to-wine-900 border border-gold-500/50 shadow-xl">
                <Heart className="w-5 h-5 text-roseAccent fill-roseAccent animate-pulse" />
                <span className="font-serif text-lg sm:text-xl text-gold-200 font-semibold tracking-wide">
                  That's my promise. ❤️
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
