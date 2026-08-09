import React, { useState, useEffect } from 'react';

export default function TypewriterText({
  text,
  speed = 45,
  delay = 0,
  className = '',
  cursor = true,
  onComplete,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(false);

    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      // Natural typing variation
      const char = text[currentIndex];
      const charDelay = char === ',' ? speed * 2.5 : char === '.' ? speed * 3.5 : speed;

      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + char);
        setCurrentIndex((prev) => prev + 1);
      }, charDelay);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
      if (onComplete) onComplete();
    }
  }, [currentIndex, isTyping, text, speed, onComplete]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      {cursor && isTyping && (
        <span className="inline-block w-[2px] h-[1.1em] ml-1 bg-gold-400 animate-pulse align-middle" />
      )}
    </span>
  );
}
