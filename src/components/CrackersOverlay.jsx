import React, { useEffect, useRef } from 'react';

export default function CrackersOverlay({ active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const rockets = [];
    const colors = [
      '#FFD700', // Gold
      '#FF4D6D', // Rose Pink
      '#FF758F', // Blush Rose
      '#E11D48', // Crimson Red
      '#FFF0F5', // White Sparkle
      '#FBBF24', // Amber
      '#F43F5E', // Rose Glow
    ];

    class Rocket {
      constructor(targetX, targetY) {
        this.x = Math.random() * (width * 0.8) + width * 0.1;
        this.y = height;
        this.targetX = targetX || Math.random() * (width * 0.8) + width * 0.1;
        this.targetY = targetY || Math.random() * (height * 0.45) + height * 0.1;
        this.speed = Math.random() * 3 + 8;
        this.angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.trail = [];
        this.isHeart = Math.random() > 0.4;
      }

      update() {
        this.trail.push({ x: this.x, y: this.y, alpha: 1 });
        if (this.trail.length > 6) this.trail.shift();

        this.x += this.vx;
        this.y += this.vy;

        // Check if reached apex
        if (this.vy >= 0 || this.y <= this.targetY) {
          this.explode();
          return false;
        }
        return true;
      }

      explode() {
        const count = this.isHeart ? 40 : 60;
        if (this.isHeart) {
          // Heart shaped explosion
          for (let i = 0; i < count; i++) {
            const t = (Math.PI * 2 * i) / count;
            const hx = 16 * Math.pow(Math.sin(t), 3);
            const hy = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            const speed = Math.random() * 0.8 + 0.9;
            particles.push(new Particle(this.x, this.y, hx * 0.25 * speed, hy * 0.25 * speed, this.color, true));
          }
        } else {
          // Standard circular burst with sparkles
          for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 1.5;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            particles.push(new Particle(this.x, this.y, vx, vy, this.color, false));
          }
        }
      }

      draw() {
        // Draw tail
        this.trail.forEach((pos, idx) => {
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.globalAlpha = (idx + 1) / this.trail.length;
          ctx.shadowBlur = 8;
          ctx.shadowColor = this.color;
          ctx.fill();
        });

        // Head
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFFFFF';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    class Particle {
      constructor(x, y, vx, vy, color, isHeart) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.012;
        this.gravity = isHeart ? 0.04 : 0.08;
        this.friction = 0.96;
        this.size = Math.random() * 2.5 + 1.5;
        this.flicker = Math.random() > 0.5;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        return this.alpha > 0;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.flicker ? Math.max(0, this.alpha * (0.6 + Math.random() * 0.4)) : this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Launch crackers periodically
    let lastLaunch = 0;
    const launchInterval = 1800; // ms

    const triggerCracker = (x, y) => {
      rockets.push(new Rocket(x, y));
    };

    // Global listener so tapping / clicking screen fires a cracker!
    const handleClick = (e) => {
      // Avoid firing if clicking buttons or inputs
      if (['BUTTON', 'A', 'INPUT'].includes(e.target.tagName)) return;
      triggerCracker(e.clientX, e.clientY);
    };
    window.addEventListener('pointerdown', handleClick);

    // Initial volley of crackers
    setTimeout(() => {
      rockets.push(new Rocket(width * 0.3, height * 0.25));
      rockets.push(new Rocket(width * 0.7, height * 0.2));
    }, 400);

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Auto launch rockets
      if (time - lastLaunch > launchInterval && rockets.length < 3) {
        rockets.push(new Rocket());
        lastLaunch = time;
      }

      // Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        if (!rockets[i].update()) {
          rockets.splice(i, 1);
        } else {
          rockets[i].draw();
        }
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].update()) {
          particles.splice(i, 1);
        } else {
          particles[i].draw();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
      aria-hidden="true"
    />
  );
}
