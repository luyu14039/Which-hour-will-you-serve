import { useStoryStore } from '../stores/useStoryStore';
import { Brain, Skull } from 'lucide-react';

export const StatusPanel = () => {
  const { sanity, erosion } = useStoryStore();

  // Calculate percentages
  const sanityPercent = (sanity.current / sanity.max) * 100;
  const erosionPercent = erosion; // Erosion is 0-100

  return (
    <div className="fixed top-4 left-4 z-50 flex flex-col gap-2 w-48 bg-stone-900/80 p-3 rounded-lg border border-stone-700 backdrop-blur-sm text-stone-200">
      {/* Sanity Bar */}
      <div className="flex items-center gap-2">
        <Brain className="w-4 h-4 text-blue-300" />
        <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${sanityPercent}%` }}
          />
        </div>
        <span className="text-xs font-mono w-8 text-right">{sanity.current}</span>
      </div>

      {/* Erosion Bar */}
      <div className="flex items-center gap-2">
        <Skull className="w-4 h-4 text-purple-400" />
        <div className="flex-1 h-2 bg-stone-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${erosionPercent}%` }}
          />
        </div>
        <span className="text-xs font-mono w-8 text-right">{erosion}%</span>
      </div>
    </div>
  );
};
