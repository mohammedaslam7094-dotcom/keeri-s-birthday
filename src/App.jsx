import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from './components/Intro';
import Hero from './components/Hero';
import StoryTimeline from './components/StoryTimeline';
import YearsTogether from './components/YearsTogether';
import MemoryGallery from './components/MemoryGallery';
import LoveLetter from './components/LoveLetter';
import MissCards from './components/MissCards';
import Wishes from './components/Wishes';
import Promise from './components/Promise';
import Future from './components/Future';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import ProgressIndicator from './components/ProgressIndicator';
import FloatingHearts from './components/FloatingHearts';
import CrackersOverlay from './components/CrackersOverlay';
import { loveData } from './data/loveData';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [autoPlayRequested, setAutoPlayRequested] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);

  // Triggered the exact second she starts the 20-second timer
  const handleStartMusic = () => {
    setAutoPlayRequested(true);
    setIsMusicActive(true);
  };

  // Triggered when 20s countdown finishes and crackers burst
  const handleCompleteCountdown = () => {
    setIsStarted(true);
    // Smooth scroll to top of hero
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Additional volley of celebration crackers
    try {
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#E11D48', '#FF758F', '#FBBF24', '#FAF6EE'],
      });
    } catch (e) {}
  };

  const displayName = loveData.nickname
    ? `${loveData.herName} (${loveData.nickname})`
    : loveData.herName || 'You';

  return (
    <div className="min-h-screen bg-obsidian text-blush-100 font-sans selection:bg-roseAccent/30 selection:text-gold-200 relative overflow-x-hidden">
      {/* Subtle Ambient Background Hearts & Particles */}
      <FloatingHearts count={16} />

      {/* Interactive Birthday Crackers & Fireworks Canvas Engine (Active during music & journey) */}
      <CrackersOverlay active={isMusicActive || isStarted} />

      {/* Chapter Progress Tracker */}
      <ProgressIndicator isStarted={isStarted} />

      {/* Floating Ambient Music Player (Active from countdown start onwards) */}
      <MusicPlayer isStarted={isMusicActive || isStarted} autoPlayRequested={autoPlayRequested} />

      {/* Gatekeeper Intro Screen with 20s Countdown & Crackers */}
      <AnimatePresence>
        {!isStarted && (
          <motion.div
            key="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Intro
              onStartMusic={handleStartMusic}
              onCompleteCountdown={handleCompleteCountdown}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Romantic Journey */}
      {isStarted && (
        <motion.main
          key="main-journey"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 w-full overflow-x-hidden"
        >
          {/* 01 — HERO with Letter-by-Letter Wish & Crackers Button */}
          <Hero />

          {/* 02 — OUR STORY */}
          <StoryTimeline />

          {/* 03 — 4 YEARS OF US & LIVE RELATIONSHIP COUNTER */}
          <YearsTogether />

          {/* 04 — MEMORIES */}
          <MemoryGallery />

          {/* 05 — LOVE LETTER */}
          <LoveLetter />

          {/* 06 — THINGS I MISS */}
          <MissCards />

          {/* 07 — SIX WISHES */}
          <Wishes />

          {/* 08 — MY PROMISE */}
          <Promise />

          {/* 09 — OUR FUTURE */}
          <Future />

          {/* 10 — FINAL SURPRISE */}
          <FinalSurprise />

          {/* Footer */}
          <footer className="py-12 px-4 text-center border-t border-gold-500/10 bg-obsidian text-xs text-blush-400/50 space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-blush-300/70 font-serif text-sm sm:text-base">
              <span>Made with all my heart for</span>
              <span className="text-gold-300 font-semibold">{displayName}</span>
              <Heart className="w-4 h-4 text-roseAccent fill-roseAccent animate-pulse inline" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold-500/40">
              Forever & Always • {loveData.yourName || 'Aslam'} & {loveData.herName || 'My Love'}
            </p>
          </footer>
        </motion.main>
      )}
    </div>
  );
}
