import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function SectionHeading({
  chapter,
  title,
  subtitle,
  center = true,
  theme = 'dark',
  className = '',
}) {
  const isLight = theme === 'light';

  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {chapter && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border ${
            isLight
              ? 'bg-wine-900/10 text-wine-900 border-wine-900/20'
              : 'bg-wine-950/80 text-gold-400 border-gold-500/20 shadow-sm'
          }`}
        >
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>{chapter}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight ${
            isLight ? 'text-wine-950' : 'text-gold-gradient'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {/* Decorative Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex items-center gap-3 my-4 ${center ? 'justify-center' : 'justify-start'}`}
      >
        <div className={`h-[1px] w-12 sm:w-20 ${isLight ? 'bg-wine-900/20' : 'bg-gold-500/30'}`} />
        <Heart className={`w-3.5 h-3.5 ${isLight ? 'text-roseAccent' : 'text-roseAccent-glow fill-roseAccent/40'}`} />
        <div className={`h-[1px] w-12 sm:w-20 ${isLight ? 'bg-wine-900/20' : 'bg-gold-500/30'}`} />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`max-w-xl mx-auto text-base sm:text-lg md:text-xl font-light italic leading-relaxed ${
            isLight ? 'text-wine-900/80 font-serif' : 'text-blush-200/80'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
