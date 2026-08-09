// Bulletproof Global Sound Manager
class SoundController {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.listeners = new Set();
    this.initialized = false;
  }

  init() {
    if (typeof window === 'undefined' || this.initialized) return;
    this.initialized = true;

    this.audio = document.getElementById('bg-music') || new Audio('/music/song.mp3');
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = 1.0;
    this.audio.muted = false;

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.notify();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notify();
    });

    // Auto-attempt playback immediately
    this.play();

    // In case browser policy deferred playback, immediately start on first touch/move/key
    const startAudio = () => {
      if (this.audio) {
        this.audio.muted = false;
        this.audio.volume = 1.0;
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.notify();
        }).catch(() => {});
      }
      window.removeEventListener('pointerdown', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('click', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('scroll', startAudio);
    };

    window.addEventListener('pointerdown', startAudio, { once: true, passive: true });
    window.addEventListener('touchstart', startAudio, { once: true, passive: true });
    window.addEventListener('click', startAudio, { once: true, passive: true });
    window.addEventListener('keydown', startAudio, { once: true, passive: true });
    window.addEventListener('scroll', startAudio, { once: true, passive: true });
  }

  play() {
    if (!this.audio) this.init();
    if (this.audio) {
      this.audio.muted = false;
      this.audio.volume = 1.0;
      const promise = this.audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            this.isPlaying = true;
            this.notify();
          })
          .catch(() => {
            // If browser blocks unmuted play, unmute on any gesture
          });
      }
    }
  }

  pause() {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
      this.notify();
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  toggleMute() {
    if (this.audio) {
      this.audio.muted = !this.audio.muted;
      this.isMuted = this.audio.muted;
      this.notify();
    }
  }

  subscribe(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  notify() {
    this.listeners.forEach((fn) => fn({ isPlaying: this.isPlaying, isMuted: this.isMuted }));
  }
}

export const soundManager = new SoundController();
