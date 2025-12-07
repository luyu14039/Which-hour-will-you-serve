import { useState, useEffect } from 'react';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import type { Aspect, AspectScore } from './types';
import { getHighestAspect } from './utils/matching';
import { useSound } from './contexts/SoundContext';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const { playSound, isMuted, toggleMute } = useSound();
  const [currentAspect, setCurrentAspect] = useState<Aspect | null>(null);
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

  useEffect(() => {
    localStorage.setItem('app_hasStarted', JSON.stringify(hasStarted));
  }, [hasStarted]);

  useEffect(() => {
    localStorage.setItem('app_isFinished', JSON.stringify(isFinished));
  }, [isFinished]);

  useEffect(() => {
    localStorage.setItem('app_finalScores', JSON.stringify(finalScores));
  }, [finalScores]);

  // Try to play ambient sound on mount if started, or when starting
  useEffect(() => {
    if (hasStarted && !isFinished) {
      playSound('ambient');
    }
  }, [hasStarted, isFinished]);

  const handleStart = () => {
    playSound('click');
    playSound('ambient');
    setHasStarted(true);
  };

  const handleComplete = (scores: AspectScore[]) => {
    setFinalScores(scores);
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
    setFinalScores([]);
    setCurrentAspect(null);
    // Clear all app state
    localStorage.removeItem('app_hasStarted');
    localStorage.removeItem('app_isFinished');
    localStorage.removeItem('app_finalScores');
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
          <div className="card-frame p-12 max-w-lg w-full mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            <div className="mb-8 space-y-4">
              <p className="text-xl text-parchment/90 font-body italic leading-relaxed">
                “我升得越高，见得越多。”
              </p>
              <p className="text-sm text-ash font-decorative tracking-widest opacity-60">
                THE HIGHER I RISE, THE MORE I SEE
              </p>
            </div>
            
            <button 
              onClick={handleStart} 
              onMouseEnter={() => playSound('hover')}
              className="btn-primary w-full group"
            >
              <span className="relative z-10 group-hover:text-void transition-colors duration-300">开始仪式</span>
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        ) : !isFinished ? (
          <Quiz onComplete={handleComplete} onScoreUpdate={handleScoreUpdate} />
        ) : (
          <Results scores={finalScores} onRestart={handleRestart} />
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
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
