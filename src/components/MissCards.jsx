import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Headphones, HeartHandshake, MessageCircle, Sparkles, UserCheck, Touchpad } from 'lucide-react';
import SectionHeading from './SectionHeading';

const missItems = [
  {
    id: 1,
    title: 'Your Smile 😊',
    icon: Smile,
    badge: 'My Sunshine',
    text: 'Un smile paatha enakku automatically smile varum.',
    subtext: 'Your laugh can melt away all my heaviest worries.',
    gradient: 'from-amber-400 to-roseAccent',
  },
  {
    id: 2,
    title: 'Your Voice 🎧',
    icon: Headphones,
    badge: 'My Favorite Sound',
    text: "Even a normal 'hello' from you can make my entire day better.",
    subtext: 'Hearing your voice brings instant peace to my mind.',
    gradient: 'from-roseAccent to-wine-600',
  },
  {
    id: 3,
    title: 'Your Hugs 🫂',
    icon: HeartHandshake,
    badge: 'My Safe Haven',
    text: 'Idha words-la explain panna mudiyadhu. I just miss being in your arms.',
    subtext: 'Where all the chaos of the world quietly stops.',
    gradient: 'from-gold-400 to-amber-600',
  },
  {
    id: 4,
    title: 'Our Random Talks 💬',
    icon: MessageCircle,
    badge: 'Unfiltered Us',
    text: 'Topic illaama hours pesina moments dhaan sometimes most special.',
    subtext: 'From silly gossip to 3 AM dreams, I treasure it all.',
    gradient: 'from-roseAccent-glow to-wine-800',
  },
  {
    id: 5,
    title: 'Your Teasing 😏',
    icon: Sparkles,
    badge: 'Sweet Trouble',
    text: 'Nee enna tease pannumbodhu kovam varra maadhiri nadippen... but secretly I love it.',
    subtext: 'No one makes me blush and smile the way you do.',
    gradient: 'from-amber-300 to-roseAccent',
  },
  {
    id: 6,
    title: 'Just You ❤️',
    icon: UserCheck,
    badge: 'My Whole World',
    text: "I don't always need something special. Sometimes I just want you beside me.",
    subtext: 'Just having you next to me is all my heart ever asks for.',
    gradient: 'from-roseAccent to-gold-500',
  },
];

export default function MissCards() {
  const [openedCards, setOpenedCards] = useState({});

  const toggleCard = (id) => {
    setOpenedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="miss" className="relative py-24 px-4 sm:px-6 md:px-12 bg-obsidian overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-wine-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-roseAccent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          chapter="CHAPTER 06"
          title="Things I Miss The Most 💭"
          subtitle="The little moments of us that distance makes me crave every single day."
        />

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {missItems.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openedCards[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => toggleCard(item.id)}
                className={`group cursor-pointer rounded-2xl p-6 glass-panel border transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[220px] ${
                  isOpen
                    ? 'border-gold-400/80 bg-wine-900/60 shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                    : 'border-gold-500/20 hover:border-gold-400/50 hover:bg-wine-950/80'
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`}
                />

                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-wine-950/90 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:scale-110 group-hover:text-roseAccent transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400/90 px-2.5 py-1 rounded-full bg-wine-950/80 border border-gold-500/15">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-gold-100 font-semibold mb-2">
                    {item.title}
                  </h3>
                </div>

                {/* Message Container / Tap to Reveal Content */}
                <div className="mt-4 pt-3 border-t border-gold-500/15">
                  <p className="text-blush-100 text-sm sm:text-base font-medium leading-relaxed">
                    "{item.text}"
                  </p>
                  
                  {/* Expanded Subtext */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-2 border-t border-roseAccent/20"
                      >
                        <p className="text-xs sm:text-sm font-serif italic text-gold-300">
                          {item.subtext}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tap Hint */}
                <div className="mt-4 flex items-center justify-between text-[11px] text-blush-400/50 font-mono">
                  <span>{isOpen ? 'Tap to collapse' : 'Tap to read more'}</span>
                  <span className="text-gold-400/70">{isOpen ? '▲' : '▼'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
