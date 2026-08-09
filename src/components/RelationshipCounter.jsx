import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, Sparkles, Flame, Infinity as InfinityIcon } from 'lucide-react';
import { loveData } from '../data/loveData';

export default function RelationshipCounter() {
  // Approximate start date based on 4 years ago from now
  const [timeTogether, setTimeTogether] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 4 years ago base timestamp (4 * 365.25 days in milliseconds)
    const totalMsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const baseDuration = (loveData.relationshipYears || 4) * totalMsPerYear;
    const startTime = Date.now() - baseDuration;

    const updateTimer = () => {
      const diff = Date.now() - startTime;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Days of Loving You', value: timeTogether.days.toLocaleString(), suffix: '+ Days' },
    { label: 'Hours of Calls & Talks', value: (timeTogether.days * 24 + timeTogether.hours).toLocaleString(), suffix: ' Hours' },
    { label: 'Minutes in My Thoughts', value: ((timeTogether.days * 24 + timeTogether.hours) * 60 + timeTogether.minutes).toLocaleString(), suffix: ' Mins' },
    { label: 'Long Distance Days', value: '730+', suffix: ' Days Strong' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Live Ticking Counter Glass Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-6 border-b border-gold-500/20 pb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gold-400 animate-spin-slow" />
            <span className="font-serif text-lg sm:text-xl text-gold-100 font-semibold tracking-wide">
              Time We've Been in Love ⏳
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-roseAccent/20 border border-roseAccent/40 text-rose-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-roseAccent animate-ping" />
            <span>LIVE</span>
          </div>
        </div>

        {/* 4 Ticking Time Units */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-wine-950/80 rounded-2xl p-4 border border-gold-500/20 text-center shadow-inner">
            <span className="font-mono text-2xl sm:text-4xl text-gold-gradient font-bold block">
              {timeTogether.days.toLocaleString()}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blush-300/70 mt-1 block">
              Days
            </span>
          </div>

          <div className="bg-wine-950/80 rounded-2xl p-4 border border-gold-500/20 text-center shadow-inner">
            <span className="font-mono text-2xl sm:text-4xl text-gold-gradient font-bold block">
              {String(timeTogether.hours).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blush-300/70 mt-1 block">
              Hours
            </span>
          </div>

          <div className="bg-wine-950/80 rounded-2xl p-4 border border-gold-500/20 text-center shadow-inner">
            <span className="font-mono text-2xl sm:text-4xl text-gold-gradient font-bold block">
              {String(timeTogether.minutes).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-blush-300/70 mt-1 block">
              Minutes
            </span>
          </div>

          <div className="bg-wine-950/80 rounded-2xl p-4 border border-roseAccent/40 text-center shadow-inner relative overflow-hidden">
            <span className="font-mono text-2xl sm:text-4xl text-roseAccent font-bold block animate-pulse">
              {String(timeTogether.seconds).padStart(2, '0')}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-rose-300/80 mt-1 block">
              Seconds
            </span>
          </div>
        </div>

        {/* Milestone Fast Fact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-xl bg-wine-900/40 border border-gold-500/10 text-xs sm:text-sm"
            >
              <span className="text-blush-200/80 font-serif italic">{item.label}</span>
              <span className="font-mono text-gold-300 font-bold bg-wine-950 px-2.5 py-1 rounded-lg border border-gold-500/20">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gold-500/15 flex items-center justify-center gap-2 text-center text-xs text-blush-300/60 font-serif italic">
          <Heart className="w-3.5 h-3.5 text-roseAccent fill-roseAccent" />
          <span>Every single second spent loving you has been my greatest blessing.</span>
        </div>
      </motion.div>
    </div>
  );
}
