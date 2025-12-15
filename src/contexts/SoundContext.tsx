import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

export type SoundType = 'hover' | 'click' | 'flip' | 'reveal' | 'ambient';

interface SoundContextType {
  playSound: (type: SoundType) => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('app_muted');
    return saved ? JSON.parse(saved) : false;
  });

  // Refs to hold audio objects
  const audioRefs = useRef<Record<SoundType, HTMLAudioElement | null>>({
    hover: null,
    click: null,
    flip: null,
    reveal: null,
    ambient: null,
  });

  useEffect(() => {
    // Initialize audio objects
    // Note: In a real scenario, ensure these files exist in public/sounds/
    const sounds: Record<SoundType, string> = {
      hover: import.meta.env.BASE_URL + 'sounds/hover.mp3',
      click: import.meta.env.BASE_URL + 'sounds/click.mp3',
      flip: import.meta.env.BASE_URL + 'sounds/flip.mp3',
      reveal: import.meta.env.BASE_URL + 'sounds/reveal.mp3',
      ambient: import.meta.env.BASE_URL + 'sounds/ambient.mp3',
    };

    Object.entries(sounds).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.volume = key === 'ambient' ? 0.3 : 0.5;
      if (key === 'ambient') {
        audio.loop = true;
      }
      audioRefs.current[key as SoundType] = audio;
    });

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        if (audio) {
          audio.pause();
          audio.src = '';
        }
      });
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('app_muted', JSON.stringify(isMuted));
    
    // Handle ambient sound
    const ambient = audioRefs.current.ambient;
    if (ambient) {
      if (isMuted) {
        ambient.pause();
      } else {
        // User interaction is required to play audio usually. 
        // We'll handle the start of ambient music in the first user interaction or start button.
      }
    }
  }, [isMuted]);

  const playSound = (type: SoundType) => {
    if (isMuted) return;

    const audio = audioRefs.current[type];
    if (audio) {
      if (type === 'ambient') {
        audio.play().catch(() => {}); // Silence autoplay errors
      } else {
        // Clone for overlapping sounds (except ambient)
        const clone = audio.cloneNode() as HTMLAudioElement;
        clone.volume = audio.volume;
        clone.play().catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    setIsMuted((prev: boolean) => !prev);
  };

  return (
    <SoundContext.Provider value={{ playSound, isMuted, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};
