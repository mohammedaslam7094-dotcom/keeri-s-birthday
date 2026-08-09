import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FloatingHearts({ count = 15 }) {
  const shouldReduceMotion = useReducedMotion();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      size: Math.random() * 14 + 10, // 10px to 24px
      duration: Math.random() * 12 + 10, // 10s to 22s
      delay: Math.random() * 8,
      opacity: Math.random() * 0.35 + 0.1,
      sway: Math.random() * 30 - 15,
      type: Math.random() > 0.4 ? 'heart' : 'sparkle',
    }));
    setParticles(items);
  }, [count, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            y: '110vh',
            x: `${p.x}vw`,
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            y: '-10vh',
            x: [`${p.x}vw`, `${p.x + p.sway / 10}vw`, `${p.x}vw`],
            opacity: [0, p.opacity, p.opacity * 1.2, 0],
            scale: [0.6, 1, 0.9],
            rotate: [0, p.sway * 2, -p.sway],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
          className="absolute text-roseAccent-glow/40 select-none filter blur-[0.3px]"
          style={{ fontSize: `${p.size}px` }}
        >
          {p.type === 'heart' ? '♥' : '✦'}
        </motion.div>
      ))}
    </div>
  );
}
