import type { StoryNode, StoryChoice } from '../../../types/story';
import { useStoryStore } from '../stores/useStoryStore';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { ChevronRight, Lock, MapPin, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface DialogueBoxProps {
  node: StoryNode;
  onChoiceSelect: (choice: StoryChoice) => void;
  onNext: () => void;
}

export const DialogueBox = ({ node, onChoiceSelect, onNext }: DialogueBoxProps) => {
  // Subscribe to state changes that affect conditions
  const { checkCondition } = useStoryStore();

  const isNarrator = node.speaker === 'narrator';
  const hasChoices = node.choices && node.choices.length > 0;

  return (
    <div className="w-full h-full flex flex-col relative z-30">
      {/* 1. Time & Location (Top) */}
      <div className="pt-24 px-8 md:px-16 flex justify-between items-start text-stone-500 text-xs md:text-sm font-mono tracking-[0.2em] uppercase select-none">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 md:w-4 md:h-4 opacity-60" />
          <span>{node.time || '---'}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 md:w-4 md:h-4 opacity-60" />
          <span>{node.location || 'Unknown Location'}</span>
        </div>
      </div>

      {/* 2. Text Content (Main Part) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 overflow-y-auto scrollbar-hide">
        <motion.div 
          key={node.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl w-full flex flex-col items-center text-center gap-6"
        >
          {/* Speaker Name */}
          {!isNarrator && (
            <div className="px-4 py-1 border-b border-amber-900/30">
              <span className="text-amber-500 font-serif font-bold text-xl md:text-2xl tracking-widest uppercase drop-shadow-md">
                {node.speaker}
              </span>
            </div>
          )}

          {/* Dialogue Text */}
          <div className={clsx(
            "prose prose-invert max-w-none font-serif text-lg md:text-2xl leading-loose md:leading-loose drop-shadow-lg",
            isNarrator ? "text-stone-300/90 italic" : "text-stone-100"
          )}>
            <ReactMarkdown
              components={{
                p: ({children}) => <p className="mb-4 last:mb-0">{children}</p>,
                strong: ({children}) => <span className="text-amber-200 font-bold">{children}</span>,
                em: ({children}) => <span className="text-stone-400 italic">{children}</span>
              }}
            >
              {node.text}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>

      {/* 3. Options (Bottom) */}
      <div className="w-full max-w-2xl mx-auto p-6 pb-12 md:pb-16 flex flex-col gap-3 z-40">
        <AnimatePresence mode="wait">
          {hasChoices ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid gap-3"
            >
              {node.choices!.map((choice, index) => {
                const check = checkCondition(choice.condition);
                const isDisabled = !check.passed;
                
                if (isDisabled && choice.fallback === 'hidden') return null;

                return (
                  <button
                    key={index}
                    onClick={() => !isDisabled && onChoiceSelect(choice)}
                    disabled={isDisabled}
                    className={clsx(
                      "group relative w-full text-left px-6 py-4 rounded border transition-all duration-300 backdrop-blur-sm",
                      isDisabled 
                        ? "bg-stone-950/50 border-stone-800 text-stone-600 cursor-not-allowed"
                        : "bg-stone-900/80 border-stone-600 text-stone-300 hover:bg-stone-800 hover:border-amber-500/50 hover:text-amber-100 hover:shadow-[0_0_20px_rgba(217,119,6,0.15)]"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium tracking-wide">{choice.text}</span>
                      {isDisabled ? (
                        <div className="flex items-center gap-2 text-xs text-red-900/70 font-mono uppercase tracking-wider">
                          <Lock className="w-3 h-3" />
                          <span>{check.reason}</span>
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={onNext}
              className="self-center flex items-center gap-3 px-8 py-3 text-stone-500 hover:text-amber-200 transition-colors group cursor-pointer"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em]">Click to Continue</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
