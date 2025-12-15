import { useEffect, useState } from 'react';
import { useStoryStore } from '../stores/useStoryStore';
import { getStoryNode } from '../utils/storyRegistry';
import { DialogueBox } from './DialogueBox';
import { StatusPanel } from './StatusPanel';
import { InventoryBar } from './InventoryBar';
import { ClueBoard } from './ClueBoard';
import type { StoryChoice } from '../../../types/story';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound, type SoundType } from '../../../contexts/SoundContext';
import { Brain, LogOut, RotateCcw } from 'lucide-react';

export const StoryView = ({ onExit }: { onExit: () => void }) => {
  const { 
    currentNodeId, 
    setNode, 
    addToHistory, 
    modifySanity, 
    modifyErosion, 
    modifyReputation, 
    modifyAffinity,
    addItem,
    addClue,
    resetStory
  } = useStoryStore();
  
  const { playSound } = useSound();
  const [currentNode, setCurrentNode] = useState(getStoryNode(currentNodeId));
  const [showClueBoard, setShowClueBoard] = useState(false);

  // Sync local state with store and handle onEnter effects
  useEffect(() => {
    const node = getStoryNode(currentNodeId);
    if (node) {
      setCurrentNode(node);
      
      // Handle onEnter effects
      if (node.onEnter) {
        const { 
          deltaSanity, 
          deltaErosion, 
          deltaReputation, 
          deltaAffinity, 
          gainItem, 
          unlockClue, 
          playSound: soundEffect 
        } = node.onEnter;

        if (deltaSanity) modifySanity(deltaSanity);
        if (deltaErosion) modifyErosion(deltaErosion);
        if (deltaReputation) {
          Object.entries(deltaReputation).forEach(([faction, value]) => {
            modifyReputation(faction as any, value);
          });
        }
        if (deltaAffinity) {
          Object.entries(deltaAffinity).forEach(([char, value]) => {
            modifyAffinity(char as any, value);
          });
        }
        if (gainItem) gainItem.forEach(id => addItem(id));
        if (unlockClue) unlockClue.forEach(id => addClue(id));
        if (soundEffect) playSound(soundEffect as SoundType);
      }
    }
  }, [currentNodeId, modifySanity, modifyErosion, modifyReputation, modifyAffinity, addItem, addClue, playSound]);

  const handleChoice = (choice: StoryChoice) => {
    addToHistory(currentNodeId);
    setNode(choice.nextId);
  };

  const handleNext = () => {
    if (currentNode?.nextId) {
      addToHistory(currentNodeId);
      setNode(currentNode.nextId);
    }
  };

  if (!currentNode) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error: Node {currentNodeId} not found.
        <button onClick={resetStory} className="ml-4 underline">Reset Story</button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-stone-200 font-sans selection:bg-amber-900 selection:text-amber-100">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {currentNode.background && (
          <motion.img
            key={currentNode.background}
            src={currentNode.background}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover grayscale contrast-125 brightness-50"
            alt="Background"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
      </div>

      {/* UI Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <StatusPanel />
        </div>
        
        {/* Top Right Controls */}
        <div className="absolute top-4 right-4 flex gap-2 pointer-events-auto z-50">
          <button 
            onClick={() => {
              if (confirm('确定要重置故事进度吗？')) {
                resetStory();
                window.location.reload();
              }
            }}
            className="p-3 bg-stone-900/80 border border-red-900/50 rounded-full hover:bg-red-900/30 transition-colors group"
            title="Reset Story"
          >
            <RotateCcw className="w-6 h-6 text-red-500 group-hover:text-red-300" />
          </button>
          <button 
            onClick={() => setShowClueBoard(true)}
            className="p-3 bg-stone-900/80 border border-amber-900/50 rounded-full hover:bg-amber-900/30 transition-colors group"
            title="Deduction Board"
          >
            <Brain className="w-6 h-6 text-amber-500 group-hover:text-amber-300" />
          </button>
          <button 
            onClick={onExit}
            className="p-3 bg-stone-900/80 border border-stone-700 rounded-full hover:bg-red-900/30 transition-colors group"
            title="Exit Story"
          >
            <LogOut className="w-6 h-6 text-stone-500 group-hover:text-red-400" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto z-20">
          <InventoryBar />
        </div>
        
        {/* Dialogue Layer - Full Screen */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end pb-0 md:pb-0">
          <div className="pointer-events-auto w-full h-full">
            <DialogueBox 
              node={currentNode} 
              onChoiceSelect={handleChoice}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>

      {/* Clue Board Overlay */}
      <AnimatePresence>
        {showClueBoard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-50"
          >
            <ClueBoard onClose={() => setShowClueBoard(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
