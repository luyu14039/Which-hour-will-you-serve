import { useState, useEffect } from 'react';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import type { Aspect, AspectScore, HistoryRecord } from './types';
import { getHighestAspect } from './utils/matching';
import { useSound } from './contexts/SoundContext';
import { Volume2, VolumeX, Sparkles, BrainCircuit } from 'lucide-react';
import { questions as OCCULT_QUESTIONS } from './data/questions';
import { REALITY_QUESTIONS } from './data/reality_questions';

type QuizMode = 'menu' | 'occult' | 'reality';

function App() {
  const { playSound, isMuted, toggleMute } = useSound();
  const [currentAspect, setCurrentAspect] = useState<Aspect | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>(() => {
    const saved = localStorage.getItem('app_quizMode');
    return (saved ? JSON.parse(saved) : 'menu') as QuizMode;
  });
  const [hasStarted, setHasStarted] = useState(() => {
    const saved = localStorage.getItem('app_hasStarted');
    return saved ? JSON.parse(saved) : false;
  });
  const [isFinished, setIsFinished] = useState(() => {
    const saved = localStorage.getItem('app_isFinished');
    return saved ? JSON.parse(saved) : false;
  });
  const [finalScores, setFinalScores] = useState<AspectScore[]>(() => {
    const saved = localStorage.getItem('app_finalScores');
    return saved ? JSON.parse(saved) : [];
  });
  const [history, setHistory] = useState<HistoryRecord[]>(() => {
    const saved = localStorage.getItem('app_history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('app_quizMode', JSON.stringify(quizMode));
  }, [quizMode]);

  useEffect(() => {
    localStorage.setItem('app_hasStarted', JSON.stringify(hasStarted));
  }, [hasStarted]);

  useEffect(() => {
    localStorage.setItem('app_isFinished', JSON.stringify(isFinished));
  }, [isFinished]);

  useEffect(() => {
    localStorage.setItem('app_finalScores', JSON.stringify(finalScores));
  }, [finalScores]);

  useEffect(() => {
    localStorage.setItem('app_history', JSON.stringify(history));
  }, [history]);

  // Try to play ambient sound on mount if started, or when starting
  useEffect(() => {
    if (hasStarted && !isFinished) {
      playSound('ambient');
    }
  }, [hasStarted, isFinished]);

  const handleStart = (mode: QuizMode) => {
    playSound('click');
    playSound('ambient');
    setQuizMode(mode);
    setHasStarted(true);
  };

  const handleComplete = (scores: AspectScore[], history: HistoryRecord[]) => {
    setFinalScores(scores);
    setHistory(history);
    setIsFinished(true);
    playSound('reveal');
    // Clear quiz progress when finished
    localStorage.removeItem('quiz_currentQuestionId');
    localStorage.removeItem('quiz_scores');
    localStorage.removeItem('quiz_history');
  };

  const handleRestart = () => {
    playSound('click');
    setHasStarted(false);
    setIsFinished(false);
    setQuizMode('menu');
    setFinalScores([]);
    setHistory([]);
    setCurrentAspect(null);
    // Clear all app state
    localStorage.removeItem('app_hasStarted');
    localStorage.removeItem('app_isFinished');
    localStorage.removeItem('app_finalScores');
    localStorage.removeItem('app_history');
    localStorage.removeItem('quiz_currentQuestionId');
    localStorage.removeItem('quiz_scores');
    localStorage.removeItem('quiz_history');
  };

  const handleScoreUpdate = (scores: Record<Aspect, number>) => {
    const highest = getHighestAspect(scores);
    setCurrentAspect(highest);
  };

  const getBackgroundStyle = (aspect: Aspect | null) => {
    if (!aspect) return 'from-onyx via-void to-void';
    switch (aspect) {
        case 'Lantern': return 'from-yellow-500/10 via-void to-void';
        case 'Forge': return 'from-orange-600/10 via-void to-void';
        case 'Edge': return 'from-slate-400/10 via-void to-void';
        case 'Winter': return 'from-cyan-100/10 via-void to-void';
        case 'Heart': return 'from-rose-500/10 via-void to-void';
        case 'Grail': return 'from-red-600/10 via-void to-void';
        case 'Moth': return 'from-emerald-900/20 via-void to-void';
        case 'Knock': return 'from-purple-600/10 via-void to-void';
        case 'Secret Histories': return 'from-fuchsia-900/10 via-void to-void';
        default: return 'from-onyx via-void to-void';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-void relative overflow-hidden transition-colors duration-1000">
      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Sound Control */}
      <button 
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 p-2 text-gold/50 hover:text-gold transition-colors border border-gold/20 rounded-full bg-onyx/50 backdrop-blur-sm"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Background decoration */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] transition-all duration-1000 ${getBackgroundStyle(currentAspect)}`}></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        {!isFinished && (
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-7xl text-gold drop-shadow-lg font-heading tracking-wider animate-pulse-slow mb-2">
              漫宿回响
            </h1>
            <p className="text-gold/60 font-decorative tracking-[0.3em] text-sm md:text-base uppercase">
              ECHOES OF THE MANSUS
            </p>
          </div>
        )}
        
        {!hasStarted ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
            {/* Mode A: Occult */}
            <button 
                 className="card-frame p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-[1.02] group cursor-pointer bg-onyx/40 hover:bg-onyx/60"
                 onClick={() => handleStart('occult')}
                 onMouseEnter={() => playSound('hover')}>
                <div className="mb-6 text-gold/80 group-hover:text-gold transition-colors">
                    <Sparkles size={48} strokeWidth={1} />
                </div>
                <h3 className="text-2xl text-gold font-heading mb-2">飞升之路</h3>
                <p className="text-xs text-gold/40 font-decorative tracking-widest uppercase mb-4">The Path of Ascension</p>
                <p className="text-parchment/80 text-sm leading-relaxed mb-6 flex-1">
                    扮演一名寻求飞升的教主，在梦境与仪式中做出抉择。适合熟悉《密教模拟器》背景的访客。
                </p>
                <div className="w-full py-2 border border-gold/30 text-gold/60 text-sm font-heading tracking-widest uppercase group-hover:bg-gold group-hover:text-void transition-all duration-300">
                    进入漫宿
                </div>
            </button>

            {/* Mode B: Reality */}
            <button 
                 className="card-frame p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-[1.02] group cursor-pointer bg-onyx/40 hover:bg-onyx/60"
                 onClick={() => handleStart('reality')}
                 onMouseEnter={() => playSound('hover')}>
                <div className="mb-6 text-gold/80 group-hover:text-gold transition-colors">
                    <BrainCircuit size={48} strokeWidth={1} />
                </div>
                <h3 className="text-2xl text-gold font-heading mb-2">现世之镜</h3>
                <p className="text-xs text-gold/40 font-decorative tracking-widest uppercase mb-4">The Mirror of the World</p>
                <p className="text-parchment/80 text-sm leading-relaxed mb-6 flex-1">
                    基于现代生活情境的心理测试，探索你灵魂深处的原型。适合希望了解真实自我的访客。
                </p>
                <div className="w-full py-2 border border-gold/30 text-gold/60 text-sm font-heading tracking-widest uppercase group-hover:bg-gold group-hover:text-void transition-all duration-300">
                    凝视倒影
                </div>
            </button>
          </div>
        ) : !isFinished ? (
          <Quiz 
            questions={quizMode === 'reality' ? REALITY_QUESTIONS : OCCULT_QUESTIONS}
            onComplete={handleComplete} 
            onScoreUpdate={handleScoreUpdate}
            onExit={handleRestart}
          />
        ) : (
          <Results scores={finalScores} onRestart={handleRestart} quizMode={quizMode} history={history} />
        )}

        <footer className="mt-16 text-ash/40 text-xs font-decorative tracking-widest flex flex-col items-center gap-2">
          <p>VOL. I — THE WATCHMAN'S TREE</p>
          <div className="flex flex-col items-center gap-1 mt-4 opacity-60 hover:opacity-100 transition-opacity">
            <p>© {new Date().getFullYear()} Fan-made Project based on Cultist Simulator & Book of Hours.</p>
            <p>World setting belongs to Weather Factory.</p>
            <a 
              href="https://github.com/luyu14039/Which-hour-will-you-serve" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 text-gold hover:text-gold/80 transition-colors border-b border-transparent hover:border-gold"
            >
              <span>⭐ Star on GitHub</span>
            </a>
            
            {/* Busuanzi Statistics */}
            <div className="flex flex-col items-center gap-1 mt-2 text-[10px] tracking-wider text-gold/40">
              <div className="flex items-center gap-3">
                <span id="busuanzi_container_site_pv" style={{ display: 'none' }}>
                  总访问 <span id="busuanzi_site_pv" className="text-gold"></span>
                </span>
                <span>|</span>
                <span id="busuanzi_container_site_uv" style={{ display: 'none' }}>
                  总访客 <span id="busuanzi_site_uv" className="text-gold"></span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span id="busuanzi_container_today_pv" style={{ display: 'none' }}>
                  今日访问 <span id="busuanzi_today_pv" className="text-gold"></span>
                </span>
                <span>|</span>
                <span id="busuanzi_container_today_uv" style={{ display: 'none' }}>
                  今日访客 <span id="busuanzi_today_uv" className="text-gold"></span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
