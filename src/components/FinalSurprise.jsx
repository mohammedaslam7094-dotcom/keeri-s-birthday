import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Gift, Flame, PartyPopper, Sparkle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { loveData } from '../data/loveData';
import TypewriterText from './TypewriterText';

export default function FinalSurprise() {
  const [showExtraSurprise, setShowExtraSurprise] = useState(false);
  const [step1Done, setStep1Done] = useState(false);
  const [step2Done, setStep2Done] = useState(false);
  const [step3Done, setStep3Done] = useState(false);

  const triggerCrackersShower = () => {
    try {
      // Golden & Rose fireworks burst
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.5, x: 0.5 },
        colors: ['#FFD700', '#E11D48', '#FF758F', '#FBBF24', '#FAF6EE'],
      });
      // Firework cannons from both sides
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.7 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF'],
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.7 },
          colors: ['#FFD700', '#E11D48', '#FFFFFF'],
        });
      }, 300);
    } catch (e) {}
  };

  const handleRevealExtra = () => {
    setShowExtraSurprise(true);
    triggerCrackersShower();
  };

  const nicknameGreeting = loveData.nickname 
    ? `${loveData.herName || 'My Love'} (${loveData.nickname})`
    : loveData.herName || 'My Love';

  return (
    <section
      id="surprise"
      className="relative min-h-[100svh] py-24 px-4 sm:px-6 md:px-12 bg-obsidian text-blush-100 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-wine-900/35 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-roseAccent/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Chapter Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wine-950/80 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-widest mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CHAPTER 10 • THE CLIMAX</span>
        </motion.div>

        {/* Letter-by-Letter Cinematic Step-by-Step Wish Build-up */}
        <div className="space-y-6 mb-12 min-h-[160px] flex flex-col items-center justify-center">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-blush-200/90 font-light italic">
            <TypewriterText
              text='"If I could make one birthday wish..."'
              speed={45}
              delay={300}
              onComplete={() => setStep1Done(true)}
            />
          </p>

          {step1Done && (
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-300 font-normal italic">
              <TypewriterText
                text='"I would wish for..."'
                speed={50}
                delay={200}
                onComplete={() => setStep2Done(true)}
              />
            </p>
          )}

          {step2Done && (
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold-gradient font-bold tracking-tight pt-2">
              <TypewriterText
                text='"...a lifetime of moments with you."'
                speed={55}
                delay={300}
                onComplete={() => setStep3Done(true)}
              />
            </p>
          )}
        </div>

        {/* Happy Birthday Main Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-8"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl text-gold-gradient font-semibold tracking-tight">
            Happy Birthday, My Forever Person. <span className="inline-block text-roseAccent animate-pulse">❤️</span>
          </h2>
        </motion.div>

        {/* Deep Romantic Poetry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-xl mx-auto space-y-2 mb-8 text-blush-200 text-base sm:text-lg md:text-xl font-light font-serif italic"
        >
          <p>I love you more than yesterday,</p>
          <p>less than tomorrow,</p>
          <p className="text-gold-300 font-normal not-italic">
            and more than words can ever explain.
          </p>
        </motion.div>

        {/* Pulsing Animated Heart & Declaration + Crackers Trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-10 flex flex-col items-center"
        >
          <div
            className="relative group cursor-pointer active:scale-95 transition-transform"
            onClick={triggerCrackersShower}
            title="Click to launch celebration crackers!"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-roseAccent to-wine-700 flex items-center justify-center shadow-[0_0_50px_rgba(225,29,72,0.6)] animate-pulse hover:scale-110 transition-transform">
              <Heart className="w-12 h-12 sm:w-14 sm:h-14 text-white fill-white" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold-300 animate-spin-slow" />
          </div>

          <p className="mt-6 font-serif text-2xl sm:text-3xl text-gold-200 tracking-widest font-bold uppercase">
            ❤️ I LOVE YOU ❤️
          </p>
          <span className="text-[11px] font-mono text-gold-400/70 mt-1">
            (Tap the heart to launch birthday crackers! 🎆)
          </span>
        </motion.div>

        {/* "One More Thing..." Button & Expandable Message */}
        <div className="w-full max-w-lg">
          {!showExtraSurprise ? (
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={handleRevealExtra}
              className="px-8 py-4 rounded-full bg-wine-900/80 border border-gold-500/50 text-gold-200 font-serif text-lg tracking-wider hover:bg-roseAccent hover:text-white hover:border-gold-300 transition-all duration-300 shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-400"
            >
              ✨ One More Thing...
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-gold-400/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] relative overflow-hidden"
            >
              <div className="space-y-4">
                <p className="font-serif text-xl sm:text-2xl text-blush-100 font-light italic leading-relaxed">
                  "Until I can hold you again..."
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-gold-gradient font-semibold">
                  this website is my little hug from far away. 🫂❤️
                </p>
                <div className="pt-6 border-t border-gold-500/20">
                  <p className="font-script text-3xl sm:text-4xl text-roseAccent-glow">
                    Happy Birthday, {nicknameGreeting}.
                  </p>
                  <p className="text-xs font-mono text-blush-400/60 uppercase tracking-widest mt-2">
                    — From {loveData.yourName || 'Aslam'}, with all my love ❤️
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
