import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '../data/questions';
import type { Aspect, AspectScore } from '../types';
import { Eye, EyeOff, Undo2 } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

interface QuizProps {
  onComplete: (scores: AspectScore[]) => void;
  onScoreUpdate?: (scores: Record<Aspect, number>) => void;
}

interface HistoryItem {
  questionId: string;
  aspect: Aspect;
  value: number;
}

export const Quiz: React.FC<QuizProps> = ({ onComplete, onScoreUpdate }) => {
  const { playSound } = useSound();
  const [currentQuestionId, setCurrentQuestionId] = useState<string>(() => {
    return localStorage.getItem('quiz_currentQuestionId') || 'origin';
  });
  const [scores, setScores] = useState<Record<Aspect, number>>(() => {
    const saved = localStorage.getItem('quiz_scores');
    return saved ? JSON.parse(saved) : {
      'Lantern': 0, 'Forge': 0, 'Edge': 0, 'Winter': 0,
      'Heart': 0, 'Grail': 0, 'Moth': 0, 'Knock': 0,
      'Secret Histories': 0
    };
  });
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    const saved = localStorage.getItem('quiz_history');
    return saved ? JSON.parse(saved) : [];
  });
  const [showAspects, setShowAspects] = useState(false);
  const [direction, setDirection] = useState(0);
  const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem('quiz_currentQuestionId', currentQuestionId);
  }, [currentQuestionId]);

  useEffect(() => {
    localStorage.setItem('quiz_scores', JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    localStorage.setItem('quiz_history', JSON.stringify(history));
  }, [history]);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  if (!currentQuestion) {
      return <div>Loading...</div>;
  }

  const handleOptionSelect = (aspect: Aspect, value: number, nextQuestionId?: string) => {
    if (isTransitioning) return;
    playSound('click');
    setIsTransitioning(true);
    proceedToNext(aspect, value, nextQuestionId);
  };

  const proceedToNext = (aspect: Aspect, value: number, nextQuestionId?: string) => {
    // Record history
    setHistory(prev => [...prev, { questionId: currentQuestionId, aspect, value }]);

    // Update scores
    const newScores = { ...scores, [aspect]: scores[aspect] + value };
    setScores(newScores);
    if (onScoreUpdate) onScoreUpdate(newScores);

    // Move to next question
    setDirection(1);
    
    if (nextQuestionId && nextQuestionId !== 'end') {
      setTimeout(() => {
        setCurrentQuestionId(nextQuestionId);
        setHoveredFlavor(null);
        setIsTransitioning(false);
      }, 200);
    } else {
      // Finish quiz
      const finalScores: AspectScore[] = Object.entries(newScores).map(([key, val]) => ({
        aspect: key as Aspect,
        score: val
      }));
      onComplete(finalScores);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      playSound('click');
      const lastAction = history[history.length - 1];
      
      // Revert score
      const newScores = { ...scores, [lastAction.aspect]: scores[lastAction.aspect] - lastAction.value };
      setScores(newScores);
      
      // Revert history
      setHistory(prev => prev.slice(0, -1));

      // Move back
      setDirection(-1);
      setCurrentQuestionId(lastAction.questionId);
      setHoveredFlavor(null);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)',
    })
  };

  // Calculate progress based on history length.
  const progress = Math.min(((history.length + 1) / questions.length) * 100, 100);

  return (
    <div className="w-full max-w-2xl mx-auto relative min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center px-4 py-6 md:py-0">
      {/* Top Controls & Progress */}
      <div className="w-full flex flex-col gap-4 mb-6 z-20">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleBack}
            disabled={history.length === 0}
            className={`p-2 transition-colors ${history.length === 0 ? 'text-gold/20 cursor-not-allowed' : 'text-gold hover:text-gold/80'}`}
            title="Return to previous step"
          >
            <Undo2 size={24} />
          </button>
          
          <button 
            onClick={() => setShowAspects(!showAspects)}
            className="text-gold/50 hover:text-gold transition-colors p-2"
            title="Toggle Spirit Vision"
          >
            {showAspects ? <Eye size={20} /> : <EyeOff size={20} />}
          </button>
        </div>
        
        {/* Mysterious Progress Bar */}
        <div className="w-full h-1 bg-void/50 border border-gold/20 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      <div className="relative w-full flex-1 flex items-center justify-center">
        {/* Background Decoration: Astrolabe Rings - Responsive Sizing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <div className="w-[120vw] h-[120vw] md:w-[600px] md:h-[600px] border border-gold/5 rounded-full absolute animate-[spin_120s_linear_infinite]" />
            <div className="w-[90vw] h-[90vw] md:w-[450px] md:h-[450px] border border-gold/10 rounded-full absolute animate-[spin_80s_linear_infinite_reverse] border-dashed" />
            <div className="w-[60vw] h-[60vw] md:w-[300px] md:h-[300px] border border-gold/5 rounded-full absolute animate-[spin_60s_linear_infinite]" />
        </div>

        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentQuestionId}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full z-10"
          >
            <div className="card-frame p-6 md:p-12 w-full bg-onyx/90 backdrop-blur-md min-h-[450px] md:min-h-[550px] flex flex-col relative group">
              {/* Corner Ornaments - Hidden on mobile to save space/reduce noise */}
              <div className="hidden md:block absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/30 transition-colors duration-500 group-hover:border-gold/60" />
              <div className="hidden md:block absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/30 transition-colors duration-500 group-hover:border-gold/60" />
              <div className="hidden md:block absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/30 transition-colors duration-500 group-hover:border-gold/60" />
              <div className="hidden md:block absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/30 transition-colors duration-500 group-hover:border-gold/60" />

              <div className="text-center mb-6 md:mb-8">
                <span className="text-gold/40 font-decorative tracking-[0.3em] text-[10px] md:text-xs uppercase block mb-2">
                  Question {history.length + 1} of {questions.length}
                </span>
                <h2 className="text-2xl md:text-4xl text-gold font-heading mb-3 md:mb-4 drop-shadow-md">
                  {currentQuestion.title}
                </h2>
                <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto" />
              </div>
              
              <p className="text-base md:text-xl text-parchment/90 mb-6 md:mb-10 text-center font-body leading-relaxed italic px-2">
                "{currentQuestion.description}"
              </p>

              <div className="space-y-3 md:space-y-4 flex-1">
                {currentQuestion.options.map((option, index) => {
                  const isLocked = option.requirement && (scores[option.requirement.aspect] || 0) < option.requirement.minScore;
                  
                  return (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    disabled={isLocked}
                    onClick={() => !isLocked && handleOptionSelect(option.aspect, option.value, option.nextQuestionId)}
                    onMouseEnter={() => {
                      if (!isLocked) {
                        playSound('hover');
                        setHoveredFlavor(option.flavorText);
                      }
                    }}
                    onMouseLeave={() => setHoveredFlavor(null)}
                    className={`w-full group relative overflow-hidden p-4 md:p-5 border transition-all duration-300 text-left
                      ${isLocked 
                        ? 'border-ash/10 bg-void/20 cursor-not-allowed' 
                        : 'border-gold/20 bg-void/40 hover:bg-onyx/80 active:bg-gold/10'
                      }`}
                  >
                    {/* Option Corner Accents - Desktop Only */}
                    {!isLocked && (
                      <>
                        <div className="hidden md:block absolute top-0 left-0 w-2 h-2 border-t border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="hidden md:block absolute top-0 right-0 w-2 h-2 border-t border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="hidden md:block absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="hidden md:block absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </>
                    )}

                    {/* Hover Gradient */}
                    {!isLocked && <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gold/5 via-transparent to-transparent transition-opacity duration-500" />}

                    <div className={`relative z-10 flex items-center gap-3 md:gap-5 ${isLocked ? 'opacity-40' : ''}`}>
                      <div className={`w-8 h-8 md:w-10 md:h-10 flex-shrink-0 rounded-full border flex items-center justify-center font-heading text-sm md:text-lg transition-all duration-300
                        ${isLocked 
                          ? 'border-ash/20 text-ash/40' 
                          : 'border-gold/20 text-gold/60 group-hover:border-gold/60 group-hover:text-gold group-hover:bg-gold/5'
                        }`}>
                        {option.id}
                      </div>
                      
                      <div className="flex-1">
                        <span className={`transition-colors font-body text-base md:text-lg tracking-wide block
                          ${isLocked ? 'text-ash/50 italic' : 'text-parchment/80 group-hover:text-gold'}`}>
                          {isLocked ? '你对此一无所知...' : option.text}
                        </span>
                        {/* Mobile Flavor Text Display */}
                        {!isLocked && (
                          <span className="block md:hidden text-gold/50 text-xs mt-1.5 italic font-body leading-relaxed">
                            {option.flavorText}
                          </span>
                        )}
                      </div>

                      {showAspects && !isLocked && (
                        <span className="text-[10px] md:text-xs text-gold/50 font-decorative tracking-wider border border-gold/10 px-1.5 py-0.5 rounded bg-black/20">
                          {option.aspect}
                        </span>
                      )}
                    </div>
                  </motion.button>
                );
                })}
              </div>

              {/* Fixed Flavor Text Area - Desktop Only */}
              <div className="hidden md:flex mt-6 md:mt-8 h-10 md:h-12 items-center justify-center">
                <AnimatePresence mode='wait'>
                  {hoveredFlavor ? (
                    <motion.div 
                      key="flavor"
                      initial={{ opacity: 0, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(4px)' }}
                      className="text-center"
                    >
                      <p className="text-gold/80 italic font-body text-sm md:text-lg tracking-wide">
                        {hoveredFlavor}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.3 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/50" />
                      <div className="w-1 h-1 rounded-full bg-gold/50" />
                      <div className="w-1 h-1 rounded-full bg-gold/50" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
