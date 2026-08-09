import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, Sparkle, Clock, Volume2, Calendar, Music, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';
import TypewriterText from './TypewriterText';
import { soundManager } from '../utils/sound';

export default function Intro({ onCompleteCountdown }) {
  const [hasUnlockedAudio, setHasUnlockedAudio] = useState(false);
  const [timeLeft, setTimeLeft] = useState(35);
  const [isExploding, setIsExploding] = useState(false);

  const displayName = loveData.nickname || loveData.herName || 'Maadu';

  // Dynamic emotional messages during the 35-second timer
  const getTimerMessage = (time) => {
    if (time > 27) return `Playing your favorite melody... 🎶`;
    if (time > 20) return `Thinking of every smile we've shared over these 4 years... 💖`;
    if (time > 13) return `Just a small surprise from my side for your birthday, ${displayName} ✨`;
    if (time > 6) return `Get ready to smile, ${displayName} 🥰`;
    if (time > 2) return `Almost time... Hold your breath! 💖`;
    return `3... 2... 1... 🎆`;
  };

  const triggerBigCrackers = () => {
    try {
      // Main Center Explosion
      confetti({
        particleCount: 160,
        spread: 100,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#FFD700', '#E11D48', '#FF758F', '#FBBF24', '#FAF6EE'],
      });

      // Side Cannons
      setTimeout(() => {
        confetti({
          particleCount: 90,
          angle: 60,
          spread: 80,
          origin: { x: 0, y: 0.6 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF', '#F43F5E'],
        });
        confetti({
          particleCount: 90,
          angle: 120,
          spread: 80,
          origin: { x: 1, y: 0.6 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF', '#F43F5E'],
        });
      }, 300);

      // Rain of Gold & Hearts
      setTimeout(() => {
        confetti({
          particleCount: 130,
          spread: 120,
          origin: { y: 0.3, x: 0.5 },
          colors: ['#FFD700', '#E11D48', '#FF758F'],
        });
      }, 700);
    } catch (e) {}
  };

  // Start Experience: Unlocks Audio in browser and begins 35s timer immediately
  const handleOpenSurprise = () => {
    setHasUnlockedAudio(true);
    soundManager.init();
    soundManager.play();
  };

  // 35s Countdown Timer Execution
  useEffect(() => {
    if (!hasUnlockedAudio) return;

    soundManager.play();

    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
        // Mini cracker bursts every 5 seconds
        if (timeLeft % 5 === 0 && timeLeft > 0) {
          try {
            confetti({
              particleCount: 35,
              spread: 60,
              origin: { y: 0.7, x: Math.random() * 0.6 + 0.2 },
              colors: ['#FFD700', '#E11D48', '#FF758F'],
            });
          } catch (e) {}
        }
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Reached 0 seconds! Trigger massive crackers explosion
      setIsExploding(true);
      triggerBigCrackers();

      // Transition smoothly into the full love website journey after 3.5 seconds
      const finishTimer = setTimeout(() => {
        if (onCompleteCountdown) {
          onCompleteCountdown();
        }
      }, 3500);

      return () => clearTimeout(finishTimer);
    }
  }, [hasUnlockedAudio, timeLeft, onCompleteCountdown]);

  const progressPct = ((35 - timeLeft) / 35) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian text-blush-100 overflow-hidden px-4 sm:px-6 select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-wine-800/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-roseAccent/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Radial vignette background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-wine-950/50 via-obsidian to-obsidian pointer-events-none" />

      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {!hasUnlockedAudio ? (
          /* STEP 1: ELEGANT SURPRISE ENTRY CARD */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center w-full"
          >
            {/* Gift Box Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-wine-900 via-roseAccent to-wine-800 border-2 border-gold-400/60 flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(225,29,72,0.4)]"
            >
              <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-gold-200 animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-3xl sm:text-5xl text-gold-gradient font-normal tracking-tight mb-3"
            >
              For {displayName} ❤️
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-serif text-base sm:text-xl text-blush-200/90 italic mb-8 max-w-md"
            >
              "Just a small surprise from my side for your birthday, {displayName} ❤️"
            </motion.p>

            {/* Tap to Open Surprise Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={handleOpenSurprise}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-wine-800 via-roseAccent to-wine-800 text-white font-medium text-base sm:text-lg tracking-wider uppercase border border-gold-400/50 shadow-[0_0_35px_rgba(225,29,72,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:border-gold-300 transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Music className="w-5 h-5 text-gold-300 animate-spin-slow" />
              <span className="font-serif tracking-widest text-gold-100 font-semibold">
                Open Birthday Surprise ✨
              </span>
              <Heart className="w-5 h-5 text-rose-200 fill-rose-200 group-hover:scale-125 transition-transform duration-300" />
            </motion.button>

            <p className="text-xs font-mono text-blush-400/50 mt-6 tracking-widest">
              🎧 Tap above to start the birthday countdown & music!
            </p>
          </motion.div>
        ) : !isExploding ? (
          /* STEP 2: LIVE 35-SECOND COUNTDOWN WITH MUSIC PLAYING UNMUTED */
          <motion.div
            key="countdown-screen"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center w-full"
          >
            {/* Ambient Music Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wine-900/80 border border-gold-500/30 text-gold-300 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-roseAccent animate-ping" />
              <span>MUSIC PLAYING • COUNTDOWN IN PROGRESS</span>
            </div>

            {/* Glowing Circular Timer Display */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-8">
              {/* Outer SVG Progress Ring */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="stroke-wine-950/80 fill-none"
                  strokeWidth="6"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  className="stroke-roseAccent fill-none transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(225,29,72,0.8)]"
                  strokeWidth="6"
                  strokeDasharray="276.46"
                  strokeDashoffset={276.46 - (276.46 * progressPct) / 100}
                  strokeLinecap="round"
                />
              </svg>

              {/* Center Counter Number */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  key={timeLeft}
                  initial={{ scale: 1.25, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-5xl sm:text-6xl font-bold text-gold-gradient"
                >
                  {String(timeLeft).padStart(2, '0')}
                </motion.span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blush-300/70 mt-1">
                  Seconds Left
                </span>
              </div>
            </div>

            {/* Animated Dynamic Emotional Messages */}
            <motion.p
              key={getTimerMessage(timeLeft)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-lg sm:text-2xl text-gold-200 italic mb-6 min-h-[36px]"
            >
              "{getTimerMessage(timeLeft)}"
            </motion.p>
          </motion.div>
        ) : (
          /* STEP 3: MASSIVE CRACKER EXPLOSION & DIRECT TRANSITION TO FULL WEBSITE */
          <motion.div
            key="explosion-screen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-roseAccent to-gold-500 flex items-center justify-center shadow-[0_0_60px_rgba(225,29,72,0.8)] animate-bounce">
              <Sparkle className="w-12 h-12 text-white animate-spin-slow" />
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-4xl sm:text-6xl text-gold-gradient font-bold tracking-tight">
                <TypewriterText
                  text={`HAPPY BIRTHDAY, ${displayName.toUpperCase()}!`}
                  speed={45}
                  delay={100}
                />
              </h2>
              <p className="font-serif text-xl sm:text-2xl text-roseAccent-glow italic">
                ❤️ {loveData.birthday || 'Special Day'} • {loveData.relationshipYears || 4} Years of Us • Forever Yours ❤️
              </p>
            </div>

            <p className="text-xs font-mono text-gold-300 tracking-widest animate-pulse pt-3">
              ✨ Opening Your Love Letter & Memories Now... ✨
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
