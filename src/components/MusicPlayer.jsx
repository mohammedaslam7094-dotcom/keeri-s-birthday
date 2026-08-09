import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Music, Disc3, Sparkles } from 'lucide-react';
import { loveData } from '../data/loveData';
import { soundManager } from '../utils/sound';

export default function MusicPlayer({ isStarted }) {
  const [audioState, setAudioState] = useState({ isPlaying: false, isMuted: false });

  useEffect(() => {
    soundManager.init(loveData.music || '/music/song.mp3');
    const unsubscribe = soundManager.subscribe(setAudioState);
    return unsubscribe;
  }, []);

  if (!isStarted && !audioState.isPlaying) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <div
        role="region"
        aria-label="Background Romantic Music Player"
        className="glass-panel rounded-full p-1.5 pl-3 pr-4 flex items-center gap-3 border border-gold-500/30 shadow-2xl hover:border-gold-400 transition-all duration-300 group"
      >
        {/* Play/Pause Action Button */}
        <button
          onClick={() => soundManager.toggle()}
          aria-label={audioState.isPlaying ? 'Pause romantic melody' : 'Play romantic melody'}
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-roseAccent to-gold-500 flex items-center justify-center text-obsidian shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
        >
          {audioState.isPlaying ? (
            <Disc3 className="w-5 h-5 text-obsidian animate-spin-slow" />
          ) : (
            <Music className="w-4 h-4 text-obsidian" />
          )}
        </button>

        {/* Music Info & Equalizer Bars */}
        <div className="flex flex-col cursor-pointer" onClick={() => soundManager.toggle()}>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-wider">
              {audioState.isPlaying ? 'Playing Melody' : 'Play Music'}
            </span>
            <Sparkles className="w-2.5 h-2.5 text-roseAccent-glow animate-pulse" />
          </div>
          <span className="text-[10px] text-blush-200/70 truncate max-w-[100px] sm:max-w-[130px]">
            {loveData.favoriteSong || 'Romantic Score'}
          </span>
        </div>

        {/* Live Audio Equalizer Wave Animation */}
        {audioState.isPlaying && (
          <div className="flex items-end gap-[3px] h-4 px-1" aria-hidden="true">
            <span className="w-[3px] bg-roseAccent-glow rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3" />
            <span className="w-[3px] bg-gold-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.2s] h-4" />
            <span className="w-[3px] bg-roseAccent rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.4s] h-2" />
            <span className="w-[3px] bg-gold-300 rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.1s] h-3.5" />
          </div>
        )}

        {/* Quick Mute Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            soundManager.toggleMute();
          }}
          aria-label={audioState.isMuted ? 'Unmute music' : 'Mute music'}
          className="p-1 text-blush-300/60 hover:text-gold-300 transition-colors duration-200"
        >
          {audioState.isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
