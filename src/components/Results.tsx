import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import html2canvas from 'html2canvas';
import { QRCodeCanvas } from 'qrcode.react';
import type { Aspect, AspectScore, HistoryRecord } from '../types';
import { calculateHourMatch, calculateJudgment } from '../utils/matching';
import { CHARACTER_IMAGES } from '../data/characters';
import { useSound } from '../contexts/SoundContext';
import { BiographyModal } from './BiographyModal';
import { HushHousePromo } from './HushHousePromo';
import { 
  RefreshCw, Share2, Download, BookOpen
} from 'lucide-react';

interface ResultsProps {
  scores: AspectScore[];
  onRestart: () => void;
  quizMode?: 'menu' | 'occult' | 'reality';
  history: HistoryRecord[];
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

const ASPECT_DESCRIPTIONS: Record<Aspect, { title: string; desc: string; motto: string }> = {
  'Lantern': { title: '灯 (Lantern)', desc: '理性、光辉、无慈悲。它代表着绝对的理性与揭示真相的力量。', motto: '“仁慈，”守夜人道，“仅能在影中觅得。”' },
  'Forge': { title: '铸 (Forge)', desc: '创造、改变、火、破坏。它通过破坏旧有的形态来创造新的形态。', motto: '“火是严冬，却是带有温度。火是暖春，却会耗尽一切。”' },
  'Edge': { title: '刃 (Edge)', desc: '斗争、冲突、冲突。它不仅仅是暴力，它是冲突的本质。', motto: '每一个小时都是一场战斗。' },
  'Winter': { title: '冬 (Winter)', desc: '寂静、结局、死亡。它代表着死亡的宁静、色彩的消退和声音的止息。', motto: '寂静如约而至。' },
  'Heart': { title: '心 (Heart)', desc: '保护、生命、存续。它是保护者，也是永不停歇的舞者。', motto: '“为了保护我们所知世界的表皮，不息之心无尽地搏动着。”' },
  'Grail': { title: '杯 (Grail)', desc: '欲望、诱惑、出生。它代表着永不满足的饥饿感。', motto: '不仅是血，更是渴求。' },
  'Moth': { title: '蛾 (Moth)', desc: '混乱、自然、蜕皮。它是剪刀，剪断理性的束缚。', motto: '“in gi rum imus noc te et con sumi **喀嚓喀嚓喀嚓**”' },
  'Knock': { title: '启 (Knock)', desc: '开启、召唤、伤口。每一扇门都是一个伤口。', motto: '每一扇门都是一个伤口。' },
  'Secret Histories': { title: '秘史 (Secret Histories)', desc: '知识、矛盾、多种可能性。世界曾是怎样，或可能是怎样。', motto: '世界曾是怎样，或可能是怎样。' },
  'Moon': { title: '月 (Moon)', desc: '秘密轻柔；夜柔更甚；大海低语。而倾听未必总是明智。', motto: '“行于夜者，被遗忘者。”' },
  'Sky': { title: '穹 (Sky)', desc: '轻风，暴风，回响，歌咏；数学的复杂，飞行的原理。', motto: '“平衡，和谐与必然性。”' },
  'Rose': { title: '引 (Rose)', desc: '“指引一切的罗盘玫瑰”。通向新视界的九重引导。', motto: '“探索？启迪？希望？”' },
  'Scale': { title: '鳞 (Scale)', desc: '坚于表，固于里；难唤醒，更难抑。', motto: '“此为大地深处原始力量的残余。”' },
  'Nectar': { title: '蜜 (Nectar)', desc: '世界脉络中的常绿珍宝；时节轮转的跃动脉搏。', motto: '“很久以前，一些人把该准则称作‘血’。”' }
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
          
          {/* Wiki Link Button */}
          {hour.wikiUrl && (
            <a 
                href={hour.wikiUrl} 
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
  const [hoveredAspect, setHoveredAspect] = useState<Aspect | null>(null);
  
  return (
    <div className="space-y-5 w-full max-w-md mx-auto px-4 relative">
      {scores.map((score, index) => {
        const iconPath = ASPECT_ICONS[score.aspect];
        const percentage = (score.score / maxScore) * 100;
        
        return (
          <motion.div 
            key={score.aspect}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            onMouseEnter={() => setHoveredAspect(score.aspect)}
            onMouseLeave={() => setHoveredAspect(null)}
            onClick={() => setHoveredAspect(hoveredAspect === score.aspect ? null : score.aspect)}
            className="flex items-center gap-4 group cursor-pointer relative"
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

      {/* Fixed Info Panel */}
      <div className="mt-8 min-h-[120px] p-4 border border-gold/20 bg-onyx/50 rounded-sm relative overflow-hidden transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />
        
        <AnimatePresence mode="wait">
            {hoveredAspect && ASPECT_DESCRIPTIONS[hoveredAspect] ? (
                <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative z-10 text-center"
                >
                    <h4 className="text-gold font-heading text-sm mb-2 tracking-widest uppercase">
                        {ASPECT_DESCRIPTIONS[hoveredAspect].title}
                    </h4>
                    <p className="text-parchment/80 text-xs italic mb-3 font-serif">
                        "{ASPECT_DESCRIPTIONS[hoveredAspect].motto}"
                    </p>
                    <p className="text-ash/80 text-xs leading-relaxed max-w-[90%] mx-auto">
                        {ASPECT_DESCRIPTIONS[hoveredAspect].desc}
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    key="guide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 flex flex-col items-center justify-center h-full min-h-[88px] text-gold/30"
                >
                    <p className="text-xs font-heading tracking-widest uppercase mb-1">
                        HIDDEN KNOWLEDGE
                    </p>
                    <p className="text-[10px] tracking-wide">
                        点击或悬停以揭示准则奥秘
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export const Results: React.FC<ResultsProps> = ({ scores, onRestart, quizMode, history }) => {
  const { playSound } = useSound();
  const [activeTab, setActiveTab] = useState<'IDENTITY' | 'ANALYSIS' | 'SOUL'>('IDENTITY');
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
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

            // Hide noise overlay in screenshot to prevent artifacts
            const noiseOverlay = clonedDoc.querySelector('.noise-overlay-bg');
            if (noiseOverlay) noiseOverlay.remove();

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
  
  // Get character image with fallback to random if missing
  let characterImage = CHARACTER_IMAGES[primaryAspect];
  if (!characterImage) {
    const availableImages = Object.values(CHARACTER_IMAGES);
    if (availableImages.length > 0) {
      // Use a deterministic random based on primaryAspect string to keep it consistent for the same result
      const seed = primaryAspect.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      characterImage = availableImages[seed % availableImages.length];
    }
  }

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
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay noise-overlay-bg" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />
        
        <div className="text-center mb-8 md:mb-12 relative z-10">
            <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-gold font-heading mb-2"
            >
            最终判决
            </motion.h1>
            <p className="text-gold/50 font-decorative tracking-[0.5em] text-sm uppercase">
            THE VERDICT
            </p>
            
            {quizMode === 'reality' && (
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-parchment/60 text-sm mt-4 italic font-body"
                >
                    在凡世的伪装下，你的灵魂属于……
                </motion.p>
            )}

            <div className="h-px w-24 bg-gold/50 mx-auto mt-4" />
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

        {quizMode !== 'reality' && (
          <button 
            onClick={() => setIsBioModalOpen(true)}
            onMouseEnter={() => playSound('hover')}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-gold/10 border border-gold/40 text-gold hover:bg-gold/20 transition-all duration-300 font-heading tracking-widest uppercase text-sm w-full md:w-auto"
          >
            <BookOpen size={16} />
            书写命运
          </button>
        )}

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

      <HushHousePromo className="mt-16" />

      <BiographyModal
        isOpen={isBioModalOpen}
        onClose={() => setIsBioModalOpen(false)}
        history={history}
        finalResultTitle={mainJudgment.title}
        dominantAspect={primaryAspect}
        matchedHourName={matchedHour.name}
      />
    </motion.div>
  );
};
