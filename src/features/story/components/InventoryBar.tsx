import { useStoryStore } from '../stores/useStoryStore';
import { getItem } from '../../../data/story/items';
import { Key, Pill, Image, Package } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  'Key': Key,
  'Pill': Pill,
  'Image': Image,
  'default': Package
};

export const InventoryBar = () => {
  const { inventory } = useStoryStore();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  if (inventory.length === 0) return null;

  const selectedItem = selectedItemId ? getItem(selectedItemId) : null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Item Detail Popup */}
      {selectedItem && (
        <div className="bg-stone-900/90 border border-amber-900/50 p-4 rounded-lg w-64 mb-2 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4">
          <h4 className="text-amber-100 font-serif font-bold mb-1">{selectedItem.name}</h4>
          <p className="text-stone-400 text-sm leading-relaxed">{selectedItem.description}</p>
          {selectedItem.type === 'consumable' && (
            <div className="mt-2 text-xs text-blue-400">
              点击使用 (未实现)
            </div>
          )}
        </div>
      )}

      {/* Inventory Grid */}
      <div className="flex gap-2 bg-stone-950/80 p-2 rounded-lg border border-stone-800 backdrop-blur-sm">
        {inventory.map((itemId) => {
          const item = getItem(itemId);
          if (!item) return null;
          
          const Icon = IconMap[item.icon] || IconMap['default'];
          const isSelected = selectedItemId === itemId;

          return (
            <button
              key={itemId}
              onClick={() => setSelectedItemId(isSelected ? null : itemId)}
              className={clsx(
                "w-10 h-10 flex items-center justify-center rounded border transition-all",
                isSelected 
                  ? "bg-amber-900/40 border-amber-500 text-amber-200" 
                  : "bg-stone-900/50 border-stone-700 text-stone-500 hover:bg-stone-800 hover:text-stone-300"
              )}
              title={item.name}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </div>
  );
};
