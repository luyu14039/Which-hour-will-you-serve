import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search, Bug } from 'lucide-react';
import { useStoryStore } from '../stores/useStoryStore';
import { CLUES } from '../../../data/story/clues';
import clsx from 'clsx';

interface ClueBoardProps {
  onClose: () => void;
}

export const ClueBoard: React.FC<ClueBoardProps> = ({ onClose }) => {
  const { boardState, moveClue, attemptDeduction, debug_populateClues } = useStoryStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Helper to get clue data
  const getClue = (id: string) => CLUES[id];

  const handleDragEnd = (id: string) => {
    if (!containerRef.current) return;
    
    // Calculate new position relative to container
    // Note: This is a simplified version. In a real app, we'd need to handle
    // the transform of the container and the element more precisely.
    // For now, we'll rely on the visual position.
    
    // However, framer-motion's drag updates the transform, not the actual layout.
    // We need to sync the final position back to the store.
    // But getting the exact x/y from `info.point` relative to container is tricky
    // without more complex math or refs.
    
    // Alternative: Just update store with delta?
    // Let's try to get the element's box.
    const element = document.getElementById(`clue-${id}`);
    if (element && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      const x = elementRect.left - containerRect.left;
      const y = elementRect.top - containerRect.top;
      
      moveClue(id, x, y);
      
      // Check for overlap with other clues for deduction
      const otherClues = boardState.placedClues.filter(c => c.id !== id);
      for (const other of otherClues) {
        const otherEl = document.getElementById(`clue-${other.id}`);
        if (otherEl) {
          const otherRect = otherEl.getBoundingClientRect();
          const distance = Math.hypot(
            (elementRect.left + elementRect.width/2) - (otherRect.left + otherRect.width/2),
            (elementRect.top + elementRect.height/2) - (otherRect.top + otherRect.height/2)
          );
          
          // If close enough, attempt deduction
          if (distance < 80) { // Threshold
            const result = attemptDeduction(id, other.id);
            if (result.message) {
              setFeedback(result.message);
              setTimeout(() => setFeedback(null), 3000);
            }
          }
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col text-amber-50 font-serif">
      {/* Header */}
      <div className="h-16 border-b border-amber-900/50 flex items-center justify-between px-6 bg-stone-900">
        <h2 className="text-2xl tracking-widest text-amber-500">DEDUCTION BOARD</h2>
        <div className="flex items-center gap-4">
          {feedback && (
            <span className="text-amber-200 animate-pulse">{feedback}</span>
          )}
          <button 
            onClick={debug_populateClues}
            className="p-2 hover:bg-amber-900/30 rounded-full transition-colors text-amber-500/50 hover:text-amber-500"
            title="Debug: Populate Clues"
          >
            <Bug className="w-6 h-6" />
          </button>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-amber-900/30 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Board Area */}
      <div 
        ref={containerRef}
        className="flex-1 relative overflow-hidden bg-[url('/images/textures/paper-texture.jpg')] bg-cover"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #2a2a2a 0%, #1a1a1a 100%)'
        }}
      >
        {/* Grid/Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />

        {/* Connections (SVG Layer) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {boardState.connections.map((conn, idx) => {
            const from = boardState.placedClues.find(c => c.id === conn.from);
            const to = boardState.placedClues.find(c => c.id === conn.to);
            if (!from || !to) return null;

            return (
              <line
                key={`${conn.from}-${conn.to}-${idx}`}
                x1={from.x + 64} // Center of card (approx width 128)
                y1={from.y + 40} // Center of card (approx height 80)
                x2={to.x + 64}
                y2={to.y + 40}
                stroke="#b45309"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="opacity-60"
              />
            );
          })}
        </svg>

        {/* Clues */}
        {boardState.placedClues.map((placedClue) => {
          const clueData = getClue(placedClue.id);
          if (!clueData) return null;

          return (
            <motion.div
              key={placedClue.id}
              id={`clue-${placedClue.id}`}
              drag
              dragMomentum={false}
              initial={{ x: placedClue.x, y: placedClue.y }}
              // We don't bind x/y to state directly during drag to allow smooth movement
              // We update state onDragEnd
              onDragEnd={() => handleDragEnd(placedClue.id)}
              className={clsx(
                "absolute w-32 p-2 rounded border shadow-lg cursor-move select-none transition-colors",
                "flex flex-col items-center gap-2 text-center",
                selectedClueId === placedClue.id 
                  ? "bg-amber-900/80 border-amber-400 z-20" 
                  : clueData.type === 'inference'
                    ? "bg-indigo-950/90 border-indigo-500/50 z-10 hover:border-indigo-400"
                    : "bg-stone-800/90 border-stone-600 z-10 hover:border-stone-400"
              )}
              onClick={() => setSelectedClueId(placedClue.id)}
            >
              <div className={clsx(
                "w-8 h-8 rounded-full flex items-center justify-center border",
                clueData.type === 'inference' 
                  ? "bg-indigo-900/50 border-indigo-500/50" 
                  : "bg-stone-900 border-stone-700"
              )}>
                {/* Icon placeholder */}
                <Search className={clsx(
                  "w-4 h-4",
                  clueData.type === 'inference' ? "text-indigo-300" : "text-amber-500"
                )} />
              </div>
              <span className={clsx(
                "text-xs font-bold leading-tight",
                clueData.type === 'inference' ? "text-indigo-100" : "text-amber-100"
              )}>
                {clueData.title}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Inspector Panel (Bottom or Side) */}
      {selectedClueId && (
        <div className="h-48 bg-stone-900 border-t border-amber-900/50 p-6 flex gap-6 animate-slide-up">
          {(() => {
            const clue = getClue(selectedClueId);
            if (!clue) return null;
            return (
              <>
                <div className="w-32 h-32 bg-black/50 border border-stone-700 flex items-center justify-center shrink-0">
                  {/* Image placeholder */}
                  <span className="text-stone-600 text-xs">NO IMAGE</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <h3 className="text-xl text-amber-500 mb-2 font-bold flex items-center gap-2">
                    {clue.title}
                    {clue.type === 'inference' && (
                      <span className="px-2 py-0.5 bg-indigo-900/50 text-indigo-300 text-[10px] rounded border border-indigo-700 uppercase tracking-wider">
                        推论
                      </span>
                    )}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {clue.description}
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {clue.tags?.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-stone-800 text-amber-500/70 text-xs rounded border border-stone-700">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
};
