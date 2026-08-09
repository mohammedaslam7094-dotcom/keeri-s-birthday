import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sections = [
  { id: 'hero', number: '01', title: 'Beginning' },
  { id: 'story', number: '02', title: 'Our Story' },
  { id: 'years', number: '03', title: '4 Years' },
  { id: 'memories', number: '04', title: 'Memories' },
  { id: 'letter', number: '05', title: 'Love Letter' },
  { id: 'miss', number: '06', title: 'Things I Miss' },
  { id: 'wishes', number: '07', title: 'Six Wishes' },
  { id: 'promise', number: '08', title: 'My Promise' },
  { id: 'future', number: '09', title: 'Our Future' },
  { id: 'surprise', number: '10', title: 'Forever' },
];

export default function ProgressIndicator({ isStarted }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!isStarted) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStarted]);

  if (!isStarted) return null;

  const current = sections[activeSection] || sections[0];
  const formattedIndex = String(activeSection + 1).padStart(2, '0');
  const totalCount = String(sections.length).padStart(2, '0');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Top Header Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 block lg:hidden pointer-events-none">
        <div className="bg-obsidian/90 backdrop-blur-md border-b border-gold-500/10 px-4 py-2 flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-gold-400 font-semibold tracking-wider">
              {formattedIndex} / {totalCount}
            </span>
            <span className="text-blush-400/40 text-xs">•</span>
            <span className="text-xs uppercase tracking-widest text-blush-200 truncate max-w-[180px]">
              {current.title}
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-roseAccent animate-pulse" />
        </div>
        {/* Animated Progress Line */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-roseAccent via-gold-400 to-roseAccent origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Desktop Floating Right Indicator */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
        <div className="bg-wine-950/80 backdrop-blur-md border border-gold-500/20 rounded-full py-4 px-2.5 flex flex-col items-center gap-3 shadow-xl">
          {sections.map((sec, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                aria-label={`Scroll to ${sec.title}`}
                className="group relative flex items-center justify-center p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full"
              >
                {/* Tooltip on hover */}
                <span className="absolute right-8 px-2.5 py-1 rounded bg-wine-900/95 border border-gold-500/20 text-blush-100 text-xs font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-md">
                  {sec.number}. {sec.title}
                </span>

                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-6 bg-gradient-to-b from-roseAccent to-gold-400 shadow-[0_0_8px_rgba(225,29,72,0.6)]'
                      : 'w-2 h-2 bg-blush-300/30 hover:bg-gold-400/70'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
