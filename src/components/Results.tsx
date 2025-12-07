import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { QRCodeCanvas } from 'qrcode.react';
import type { Aspect, AspectScore } from '../types';
import { calculateHourMatch, calculateJudgment } from '../utils/matching';
import { CHARACTER_IMAGES } from '../data/characters';
import { useSound } from '../contexts/SoundContext';
import { 
  RefreshCw, Share2, Download
} from 'lucide-react';

interface ResultsProps {
  scores: AspectScore[];
  onRestart: () => void;
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
  'Secret Histories': import.meta.env.BASE_URL + 'images/icons/Secrethistories.png'
};

const HourCard: React.FC<{ hour: any }> = ({ hour }) => {
  const { playSound } = useSound();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      playSound('flip');
    }, 500);
    return () => clearTimeout(timer);
  }, [playSound]);

  return (
    <div className="relative w-64 h-96 mx-auto perspective-1000 group">
      <motion.div
        initial={{ rotateY: 180, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
        className="w-full h-full relative preserve-3d"
      >
        {/* Card Front */}
        <div className="absolute inset-0 bg-onyx border border-gold/50 rounded-sm shadow-[0_0_30px_rgba(192,160,98,0.15)] flex flex-col items-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(192,160,98,0.3)] group-hover:border-gold">
          
          {/* Inner Border (Double Line Effect) */}
          <div className="absolute inset-1 border border-gold/20 pointer-events-none z-20" />
          <div className="absolute inset-3 border border-gold/10 pointer-events-none z-20" />

          {/* Image */}
          <div className="w-full h-full absolute inset-0">
             <img 
               src={hour.image} 
               alt={hour.name} 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
             />
             {/* Vignette & Gradient */}
             <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-90" />
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_#1A181C_100%)] opacity-60" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between z-30 pointer-events-none">
            {/* Top: Icons */}
            <div className="flex justify-end gap-2">
                {hour.aspects.map((aspect: Aspect) => {
                    const iconPath = ASPECT_ICONS[aspect];
                    return (
                      <div key={aspect} className="bg-onyx/80 rounded-full p-1.5 backdrop-blur-md border border-gold/30 shadow-lg">
                        <img src={iconPath} alt={aspect} className="w-5 h-5 opacity-90" />
                      </div>
                    );
                })}
            </div>

            {/* Bottom: Name */}
            <div className="text-center mt-auto pt-8 pb-2">
              <div className="text-gold font-heading text-xl tracking-widest mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {hour.name.split('(')[0]}
              </div>
              <div className="text-gold/60 font-heading text-[10px] tracking-[0.2em] uppercase drop-shadow-md">
                {hour.name.split('(')[1]?.replace(')', '')}
              </div>
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
          
          {/* Particle Effects (Simple CSS) */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDuration: '2s' }} />
             <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
             <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gold rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CharacterCard: React.FC<{ aspect: Aspect; image: string; title: string }> = ({ aspect, image, title }) => {
    const { playSound } = useSound();

    useEffect(() => {
      const timer = setTimeout(() => {
        playSound('flip');
      }, 700);
      return () => clearTimeout(timer);
    }, [playSound]);

    return (
      <div className="relative w-64 h-96 mx-auto perspective-1000 group">
        <motion.div
          initial={{ rotateY: 180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, type: "spring", stiffness: 50 }}
          className="w-full h-full relative preserve-3d"
        >
          <div className="absolute inset-0 bg-onyx border border-gold/50 rounded-sm shadow-[0_0_30px_rgba(192,160,98,0.15)] flex flex-col items-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(192,160,98,0.3)] group-hover:border-gold">
            
            {/* Inner Border */}
            <div className="absolute inset-1 border border-gold/20 pointer-events-none z-20" />
            <div className="absolute inset-3 border border-gold/10 pointer-events-none z-20" />

            <div className="w-full h-full absolute inset-0">
               <img 
                 src={image} 
                 alt={aspect} 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-90" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_#1A181C_100%)] opacity-60" />
            </div>
  
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-30">
              <div className="text-gold font-heading text-xl tracking-widest mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {title.split('(')[0]}
              </div>
              <div className="text-gold/60 font-heading text-[10px] tracking-[0.2em] uppercase drop-shadow-md">
                {title.split('(')[1]?.replace(')', '') || 'ARCHETYPE'}
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
          </div>
        </motion.div>
      </div>
    );
  };

const AspectProgress: React.FC<{ scores: AspectScore[] }> = ({ scores }) => {
  const maxScore = Math.max(...scores.map(s => s.score), 1);
  
  return (
    <div className="space-y-5 w-full max-w-md mx-auto px-4">
      {scores.map((score, index) => {
        const iconPath = ASPECT_ICONS[score.aspect];
        const percentage = (score.score / maxScore) * 100;
        
        return (
          <motion.div 
            key={score.aspect}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-8 flex justify-center text-gold/70 group-hover:text-gold transition-colors duration-300" title={score.aspect}>
              <img src={iconPath} alt={score.aspect} className="w-6 h-6 drop-shadow-md" />
            </div>
            <div className="flex-1 h-1.5 bg-onyx border border-gold/20 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, delay: 1 + index * 0.1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold/40 via-gold to-gold/40"
              />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
            <div className="w-8 text-right text-xs text-gold/50 font-heading group-hover:text-gold transition-colors duration-300">
              {score.score}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Results: React.FC<ResultsProps> = ({ scores, onRestart }) => {
  const { playSound } = useSound();
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'ANALYSIS' | 'SOUL'>('IDENTITY');
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async () => {
    if (resultsRef.current) {
      try {
        const canvas = await html2canvas(resultsRef.current, {
          backgroundColor: '#1A181C',
          scale: 2,
          useCORS: true,
          logging: false,
          onclone: (clonedDoc) => {
            // Make all sections visible
            const hiddenElements = clonedDoc.querySelectorAll('.hidden');
            hiddenElements.forEach((el) => {
                // Only unhide content sections, not mobile tabs if we want to hide them
                if (!el.classList.contains('md:hidden')) { 
                    el.classList.remove('hidden');
                    el.classList.add('block');
                }
            });

            // Hide mobile tab navigation in screenshot
            const mobileTabs = clonedDoc.querySelector('.md\\:hidden.flex');
            if (mobileTabs) mobileTabs.remove();

            // Force single column layout for "Long Image" style
            const gridCols2 = clonedDoc.querySelectorAll('.lg\\:grid-cols-2');
            gridCols2.forEach(el => {
                el.classList.remove('lg:grid-cols-2', 'md:grid');
                el.classList.add('flex', 'flex-col');
            });

            const gridCols3 = clonedDoc.querySelectorAll('.lg\\:grid-cols-3');
            gridCols3.forEach(el => {
                el.classList.remove('lg:grid-cols-3');
                el.classList.add('flex', 'flex-col');
            });

            // Fix 3D transforms and layout for cards in screenshot
            const cards = clonedDoc.querySelectorAll('.perspective-1000');
            cards.forEach(card => {
                card.classList.remove('perspective-1000', 'group');
                // Force pixel dimensions to avoid rem scaling issues
                (card as HTMLElement).style.width = '256px';
                (card as HTMLElement).style.height = '384px';
                
                const inner = card.querySelector('.preserve-3d');
                if (inner) {
                    inner.classList.remove('preserve-3d');
                    (inner as HTMLElement).style.transform = 'none';
                    (inner as HTMLElement).style.opacity = '1';
                }

                // Fix image stretching: Convert img to background-image for better control in html2canvas
                const img = card.querySelector('img');
                if (img && img.parentElement) {
                    const parent = img.parentElement;
                    // Use inline style for background to ensure html2canvas picks it up correctly
                    parent.style.backgroundImage = `url("${img.src}")`;
                    parent.style.backgroundSize = 'cover';
                    parent.style.backgroundPosition = 'center';
                    parent.style.backgroundRepeat = 'no-repeat';
                    img.style.display = 'none';
                }
            });
            
            // Ensure text colors are correct (sometimes gradients mess up)
            // This is usually fine but good to keep in mind
          }
        });
        
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = `cultist-result-${new Date().getTime()}.png`;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
        alert('保存图片失败，请重试');
      }
    }
  };

  // Sort scores to find top aspects
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  const primaryAspect = sortedScores[0].aspect;
  
  // Calculate Patron Hour
  const scoresMap = scores.reduce((acc, curr) => {
    acc[curr.aspect] = curr.score;
    return acc;
  }, {} as Record<Aspect, number>);
  
  const matchedHour = calculateHourMatch(scoresMap);
  const characterImage = CHARACTER_IMAGES[primaryAspect];

  const mainJudgment = calculateJudgment(scoresMap);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-6xl mx-auto px-4 py-8 pb-20"
    >
      {/* Capture Area */}
      <div ref={resultsRef} className="bg-onyx p-4 md:p-8 rounded-lg relative overflow-hidden">
        {/* Background Texture for Image */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />
        
        <div className="text-center mb-8 md:mb-12 relative z-10">
            <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-gold font-heading mb-2"
            >
            最终判决
            </motion.h1>
            <p className="text-gold/50 font-decorative tracking-[0.5em] text-sm uppercase mb-4">
            THE VERDICT
            </p>
            <div className="h-px w-24 bg-gold/50 mx-auto" />
        </div>

        {/* Mobile Tab Navigation */}
        <div className="flex md:hidden justify-center gap-8 mb-8 border-b border-gold/20 pb-2 relative z-10">
            {[
            { id: 'IDENTITY', label: '身份' },
            { id: 'ANALYSIS', label: '解析' },
            { id: 'SOUL', label: '灵魂' }
            ].map((tab) => (
            <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-sm font-heading tracking-widest pb-2 transition-all duration-300 relative ${
                activeTab === tab.id ? 'text-gold' : 'text-gold/40'
                }`}
            >
                {tab.label}
                {activeTab === tab.id && (
                <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                />
                )}
            </button>
            ))}
        </div>

        <div className={`${activeTab === 'IDENTITY' ? 'block' : 'hidden'} md:grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative z-10`}>
            {/* Left Column: Patron Hour */}
            <div className="flex flex-col items-center justify-start space-y-6 mb-12 md:mb-0">
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
            >
                <h3 className="text-2xl text-gold font-heading mb-1">
                你将侍奉……
                </h3>
                <p className="text-gold/50 font-decorative tracking-widest text-xs uppercase">
                WHOM YOU SERVE
                </p>
            </motion.div>
            
            <HourCard hour={matchedHour} />
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center max-w-xs"
            >
                <p className="text-parchment/80 text-sm italic leading-relaxed">
                    "{matchedHour.desc || `${matchedHour.origin} - ${matchedHour.gender}`}"
                </p>
            </motion.div>
            </div>

            {/* Right Column: Character Archetype */}
            <div className="flex flex-col items-center justify-start space-y-6">
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center"
            >
                <h3 className="text-2xl text-gold font-heading mb-1">
                凡世原型
                </h3>
                <p className="text-gold/50 font-decorative tracking-widest text-xs uppercase">
                ARCHETYPE
                </p>
            </motion.div>

            <CharacterCard aspect={primaryAspect} image={characterImage} title={mainJudgment.title} />

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center max-w-xs"
            >
                <p className="text-parchment/80 text-sm italic">
                    "{mainJudgment.motto}"
                </p>
            </motion.div>
            </div>
        </div>

        {/* Analysis Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 relative z-10">
            <div className={`${activeTab === 'ANALYSIS' ? 'block' : 'hidden'} md:block lg:col-span-2`}>
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="card-frame p-6 md:p-8 bg-onyx/90 backdrop-blur-sm border-gold/30 h-full"
                >
                    <div className="text-center mb-6">
                    <span className="text-gold/50 font-decorative tracking-[0.2em] text-sm uppercase">
                        PRIMARY ASPECT ANALYSIS
                    </span>
                    <h2 className="text-3xl text-gold font-heading mt-2 flex flex-col items-center gap-1">
                        <span>{mainJudgment.title.split('(')[0]}</span>
                        <span className="text-lg text-gold/60 tracking-widest uppercase">
                            {mainJudgment.title.split('(')[1]?.replace(')', '')}
                        </span>
                    </h2>
                    </div>
                    
                    <div className="prose prose-invert mx-auto">
                    <p className="text-parchment text-lg leading-relaxed font-body text-justify">
                        {mainJudgment.description}
                    </p>
                    </div>
                </motion.div>
            </div>

            <div className={`${activeTab === 'SOUL' ? 'block' : 'hidden'} md:block lg:col-span-1`}>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="h-full flex flex-col justify-center"
                >
                    <h3 className="text-center text-gold/70 font-heading mb-8 text-xl">灵魂构成 <span className="text-xs block mt-1 opacity-50">SOUL COMPOSITION</span></h3>
                    <AspectProgress scores={sortedScores} />
                </motion.div>
            </div>
        </div>

        {/* QR Code Section (Visible in Screenshot) */}
        <div className="mt-16 pt-12 border-t border-gold/20 flex flex-col items-center gap-6 pb-8 relative z-10">
            <div className="bg-white p-3 rounded-sm shadow-[0_0_20px_rgba(192,160,98,0.2)]">
                <QRCodeCanvas 
                    value={window.location.origin + import.meta.env.BASE_URL}
                    size={100} 
                    fgColor="#1A181C" 
                    bgColor="#FFFFFF" 
                />
            </div>
            <div className="text-center space-y-2">
                <p className="text-gold font-heading tracking-[0.2em] text-sm uppercase">
                    SHARE THE PATH
                </p>
                <p className="text-gold/40 text-[10px] tracking-widest">
                    指引同伴步入漫宿
                </p>
            </div>
        </div>
      </div>

      {/* Actions */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 mt-8"
      >
        <button 
          onClick={onRestart}
          onMouseEnter={() => playSound('hover')}
          className="flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 font-heading tracking-widest uppercase text-sm w-full md:w-auto"
        >
          <RefreshCw size={16} />
          重新开始
        </button>
        
        <button 
          onClick={handleDownloadImage}
          onMouseEnter={() => playSound('hover')}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-gold/10 border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300 font-heading tracking-widest uppercase text-sm w-full md:w-auto"
        >
          <Download size={16} />
          保存结果
        </button>

        <button 
          className="flex items-center justify-center gap-2 px-8 py-3 bg-gold/10 border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300 font-heading tracking-widest uppercase text-sm w-full md:w-auto"
          onMouseEnter={() => playSound('hover')}
          onClick={() => {
            const text = `我是 ${mainJudgment.title.split('(')[0]}。我的守护司辰是 ${matchedHour.name}。你呢？`;
            if (navigator.share) {
              navigator.share({
                title: '测测你是谁',
                text: text,
                url: window.location.href,
              });
            } else {
              navigator.clipboard.writeText(text + ' ' + window.location.href);
              alert('结果已复制到剪贴板！');
            }
          }}
        >
          <Share2 size={16} />
          分享命运
        </button>
      </motion.div>
    </motion.div>
  );
};
