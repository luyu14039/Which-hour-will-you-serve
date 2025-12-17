import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BookOpen } from 'lucide-react';
import { HOURS_DATA } from '../data/hours';
import { FORTUNES_DATA } from '../data/fortunes';
import { useSound } from '../contexts/SoundContext';
import type { Aspect } from '../types';

interface DailyFortuneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FortuneResult {
  hourId: string;
  mottoIndex: number;
  timestamp: number;
}

const ASPECT_ICONS: Record<Aspect, string> = {
  'Lantern': import.meta.env.BASE_URL + 'images/icons/lantern.png',
  'Forge': import.meta.env.BASE_URL + 'images/icons/forge.png',
  'Edge': import.meta.env.BASE_URL + 'images/icons/edge.png',
  'Winter': import.meta.env.BASE_URL + 'images/icons/Winter.webp',
  'Heart': import.meta.env.BASE_URL + 'images/icons/heart.png',
  'Grail': import.meta.env.BASE_URL + 'images/icons/de.grail.png',
  'Moth': import.meta.env.BASE_URL + 'images/icons/de.moth.png',
  'Knock': import.meta.env.BASE_URL + 'images/icons/knock.png',
  'Secret Histories': import.meta.env.BASE_URL + 'images/icons/Secrethistories.png',
  'Moon': import.meta.env.BASE_URL + 'images/icons/moon.png',
  'Sky': import.meta.env.BASE_URL + 'images/icons/sky.png',
  'Rose': import.meta.env.BASE_URL + 'images/icons/rose.png',
  'Scale': import.meta.env.BASE_URL + 'images/icons/scale.png',
  'Nectar': import.meta.env.BASE_URL + 'images/icons/nectar.png'
};

export const DailyFortuneModal: React.FC<DailyFortuneModalProps> = ({ isOpen, onClose }) => {
  const { playSound } = useSound();
  const [fortune, setFortune] = useState<{ hour: typeof HOURS_DATA[0], motto: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      const result = getOrDrawDailyFortune();
      const timer = setTimeout(() => {
        setFortune(result);
        playSound('reveal');
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setFortune(null);
    }
  }, [isOpen]);

  const getOrDrawDailyFortune = () => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('app_daily_fortune_date');
    const savedResult = localStorage.getItem('app_daily_fortune_result');

    if (savedDate === today && savedResult) {
      try {
        const result: FortuneResult = JSON.parse(savedResult);
        const hour = HOURS_DATA.find(h => h.id === result.hourId);
        const fortuneData = FORTUNES_DATA.find(f => f.hourId === result.hourId);
        
        if (hour && fortuneData) {
          return {
            hour,
            motto: fortuneData.mottos[result.mottoIndex] || fortuneData.mottos[0]
          };
        }
      } catch (e) {
        console.error("Failed to parse saved fortune:", e);
        localStorage.removeItem('app_daily_fortune_result');
      }
    }

    const randomHour = HOURS_DATA[Math.floor(Math.random() * HOURS_DATA.length)];
    const fortuneData = FORTUNES_DATA.find(f => f.hourId === randomHour.id);
    
    if (!fortuneData) {
        return { hour: randomHour, motto: "命运沉默不语。" };
    }

    const randomMottoIndex = Math.floor(Math.random() * fortuneData.mottos.length);
    const motto = fortuneData.mottos[randomMottoIndex];

    const result: FortuneResult = {
      hourId: randomHour.id,
      mottoIndex: randomMottoIndex,
      timestamp: Date.now()
    };

    localStorage.setItem('app_daily_fortune_date', today);
    localStorage.setItem('app_daily_fortune_result', JSON.stringify(result));

    return { hour: randomHour, motto };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-lg z-10 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Baseboard / Container */}
            <div className="w-full bg-onyx/90 border border-gold/30 p-8 rounded-sm shadow-2xl relative overflow-hidden">
                {/* Decorative Corner Borders */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

                <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gold/60 hover:text-gold transition-colors p-2 z-50"
                >
                <X size={24} />
                </button>

                <div className="text-center mb-8">
                <h3 className="text-2xl text-gold font-heading tracking-widest mb-2">今日司辰</h3>
                <div className="inline-block px-2 py-0.5 bg-gold/10 border border-gold/20 rounded text-[10px] text-gold/60 mb-2 tracking-wider">
                    40k 访客特典
                </div>
                <p className="text-parchment/60 text-sm font-serif italic">
                    司辰已注视于你
                </p>
                </div>

                <div className="flex flex-col items-center">
                    {/* Card Container */}
                    <div className="relative w-64 h-96 perspective-1000 mb-8">
                    <AnimatePresence mode="wait">
                        {fortune && (
                        <motion.div
                            key="fortune-card"
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            transition={{ 
                            duration: 0.8, 
                            type: "spring", 
                            stiffness: 60, 
                            damping: 12,
                            delay: 0.1 
                            }}
                            className="w-full h-full relative preserve-3d group"
                        >
                            {/* Card Front (Result) - Styled like Results.tsx */}
                            <div className="absolute inset-0 bg-onyx border border-gold/50 rounded-sm shadow-[0_0_30px_rgba(192,160,98,0.15)] flex flex-col items-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(192,160,98,0.3)] group-hover:border-gold">
                            
                            {/* Inner Border (Double Line Effect) */}
                            <div className="absolute inset-1 border border-gold/20 pointer-events-none z-20" />
                            <div className="absolute inset-3 border border-gold/10 pointer-events-none z-20" />

                            {/* Image */}
                            <div className="w-full h-full absolute inset-0">
                                <img 
                                src={fortune.hour.image} 
                                alt={fortune.hour.name} 
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                {/* Vignette & Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-90" />
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_#1A181C_100%)] opacity-40" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between z-30 pointer-events-none">
                                {/* Top: Icons */}
                                <div className="flex justify-end gap-2">
                                    {fortune.hour.aspects.map((aspect: Aspect) => {
                                        const iconPath = ASPECT_ICONS[aspect];
                                        return (
                                        <div key={aspect} className="bg-onyx/80 rounded-full p-1.5 backdrop-blur-md border border-gold/30 shadow-lg">
                                            <img src={iconPath} alt={aspect} className="w-5 h-5 opacity-90" />
                                        </div>
                                        );
                                    })}
                                </div>

                                {/* Bottom: Name */}
                                <div className="text-center mt-auto pt-8 pb-4">
                                <div className="text-gold font-heading text-xl tracking-widest mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    {fortune.hour.name.split('(')[0]}
                                </div>
                                <div className="text-gold/60 font-heading text-[10px] tracking-[0.2em] uppercase drop-shadow-md mb-4">
                                    {fortune.hour.name.split('(')[1]?.replace(')', '')}
                                </div>
                                </div>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                            {/* Wiki Link Button */}
                            {fortune.hour.wikiUrl && (
                                <a 
                                    href={fortune.hour.wikiUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute bottom-4 right-4 z-40 flex items-center gap-2 px-3 py-1.5 bg-onyx/90 rounded-full border border-gold/30 text-gold/60 hover:text-gold hover:border-gold hover:bg-onyx transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0"
                                    title="查看 Wiki"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span className="text-[10px] font-heading tracking-wider uppercase">Wiki</span>
                                    <BookOpen size={12} />
                                </a>
                            )}
                            </div>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>

                    {/* Motto Section (Below Card) */}
                    {fortune && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative px-8 py-4 text-center max-w-sm"
                        >
                            <Sparkles className="absolute top-0 left-0 w-4 h-4 text-gold/30 animate-pulse" />
                            <p className="text-parchment/90 text-base font-serif leading-relaxed italic drop-shadow-md">
                                "{fortune.motto}"
                            </p>
                            <Sparkles className="absolute bottom-0 right-0 w-4 h-4 text-gold/30 animate-pulse" />
                        </motion.div>
                    )}

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="mt-6 text-parchment/30 text-[10px] font-serif tracking-widest uppercase"
                    >
                        每日限抽一次 · 明日重置
                    </motion.div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
