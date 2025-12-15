import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { GameState, StoryChoice, FactionId, CharacterId } from '../../../types/story';
import { DEDUCTIONS, getClue } from '../../../data/story/clues';
import { getItem } from '../../../data/story/items';

interface StoryActions {
  setNode: (nodeId: string) => void;
  addToHistory: (nodeId: string) => void;
  
  modifySanity: (delta: number) => void;
  modifyErosion: (delta: number) => void;
  modifyReputation: (faction: FactionId, delta: number) => void;
  modifyAffinity: (character: CharacterId, delta: number) => void;
  
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  
  addClue: (clueId: string) => void;
  
  // Clue Board Actions
  placeClue: (id: string, x: number, y: number) => void;
  moveClue: (id: string, x: number, y: number) => void;
  attemptDeduction: (clueA: string, clueB: string) => { success: boolean; message?: string };

  setFlag: (flag: string, value: boolean) => void;
  
  checkCondition: (condition: StoryChoice['condition']) => { passed: boolean; reason?: string };
  
  resetStory: () => void;
  
  // Debug
  debug_populateClues: () => void;
}

const INITIAL_STATE: GameState = {
  currentNodeId: 'prologue_start', // 假设这是起始节点
  history: [],
  sanity: { current: 100, max: 100 },
  erosion: 0,
  reputation: {
    suppression_bureau: 0,
    hush_house: 0,
    oblivion: 0
  },
  affinity: {
    elias: 0,
    mary: 0,
    morgan: 0,
    narrator: 0,
    unknown: 0
  },
  inventory: [],
  clues: [],
  boardState: {
    placedClues: [],
    connections: []
  },
  flags: {}
};

export const useStoryStore = create<GameState & StoryActions>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,

      setNode: (nodeId) => set({ currentNodeId: nodeId }),
      
      addToHistory: (nodeId) => set((state) => ({ 
        history: [...state.history, nodeId] 
      })),

      modifySanity: (delta) => set((state) => ({
        sanity: { 
          ...state.sanity, 
          current: Math.min(state.sanity.max, Math.max(0, state.sanity.current + delta)) 
        }
      })),

      modifyErosion: (delta) => set((state) => ({
        erosion: Math.min(100, Math.max(0, state.erosion + delta))
      })),

      modifyReputation: (faction, delta) => set((state) => ({
        reputation: {
          ...state.reputation,
          [faction]: (state.reputation[faction] || 0) + delta
        }
      })),

      modifyAffinity: (character, delta) => set((state) => ({
        affinity: {
          ...state.affinity,
          [character]: (state.affinity[character] || 0) + delta
        }
      })),

      addItem: (itemId) => set((state) => {
        if (state.inventory.includes(itemId)) return state;
        return { inventory: [...state.inventory, itemId] };
      }),

      removeItem: (itemId) => set((state) => ({
        inventory: state.inventory.filter(id => id !== itemId)
      })),

      addClue: (clueId) => set((state) => {
        if (state.clues.includes(clueId)) return state;
        // Auto-place new clue on board at a random position if not already placed
        const isPlaced = state.boardState.placedClues.some(c => c.id === clueId);
        if (!isPlaced) {
          return {
            clues: [...state.clues, clueId],
            boardState: {
              ...state.boardState,
              placedClues: [
                ...state.boardState.placedClues,
                { id: clueId, x: 100 + Math.random() * 200, y: 100 + Math.random() * 200 }
              ]
            }
          };
        }
        return { clues: [...state.clues, clueId] };
      }),

      placeClue: (id, x, y) => set((state) => {
        const exists = state.boardState.placedClues.some(c => c.id === id);
        if (exists) return state;
        return {
          boardState: {
            ...state.boardState,
            placedClues: [...state.boardState.placedClues, { id, x, y }]
          }
        };
      }),

      moveClue: (id, x, y) => set((state) => ({
        boardState: {
          ...state.boardState,
          placedClues: state.boardState.placedClues.map(c => 
            c.id === id ? { ...c, x, y } : c
          )
        }
      })),

      attemptDeduction: (clueA, clueB) => {
        const state = get();
        
        // Check if connection already exists
        const exists = state.boardState.connections.some(
          c => (c.from === clueA && c.to === clueB) || (c.from === clueB && c.to === clueA)
        );
        if (exists) return { success: false, message: '已连接' };

        // Find matching rule
        const rule = DEDUCTIONS.find(
          d => (d.clueA === clueA && d.clueB === clueB) || (d.clueA === clueB && d.clueB === clueA)
        );

        if (rule) {
          // Apply rewards
          if (rule.reward) {
            if (rule.reward.newClueId) {
              get().addClue(rule.reward.newClueId);
            }
            if (rule.reward.gainItem) {
              rule.reward.gainItem.forEach(id => get().addItem(id));
            }
            // Handle other rewards...
          }

          set((s) => ({
            boardState: {
              ...s.boardState,
              connections: [...s.boardState.connections, { from: clueA, to: clueB }]
            }
          }));

          return { success: true, message: rule.resultText };
        }

        return { success: false, message: '没有关联' };
      },

      setFlag: (flag, value) => set((state) => ({
        flags: { ...state.flags, [flag]: value }
      })),

      checkCondition: (condition) => {
        const state = get();
        if (!condition) return { passed: true };

        if (condition.requiredItem && !state.inventory.includes(condition.requiredItem)) {
          const item = getItem(condition.requiredItem);
          return { passed: false, reason: `需要道具：${item?.name || '未知物品'}` };
        }

        if (condition.minSanity && state.sanity.current < condition.minSanity) {
          return { passed: false, reason: `理智不足 (需要 ${condition.minSanity})` };
        }

        if (condition.maxErosion && state.erosion > condition.maxErosion) {
          return { passed: false, reason: '侵蚀度过高' };
        }

        if (condition.minReputation) {
          const currentRep = state.reputation[condition.minReputation.faction] || 0;
          if (currentRep < condition.minReputation.value) {
            return { passed: false, reason: '信誉不足' };
          }
        }

        if (condition.minAffinity) {
          const currentAff = state.affinity[condition.minAffinity.character] || 0;
          if (currentAff < condition.minAffinity.value) {
            return { passed: false, reason: '好感度不足' };
          }
        }

        if (condition.requiredClue && !state.clues.includes(condition.requiredClue)) {
          const clue = getClue(condition.requiredClue);
          return { passed: false, reason: `需要线索：${clue?.title || '未知线索'}` };
        }

        // Aspect check is not fully implemented in this store as it might depend on external state
        // But if we move aspect to this store or pass it in, we can check it.
        // For now, we assume aspect check is handled elsewhere or we add aspect to GameState.
        // Given the original app has aspect state, we might need to sync or access it.
        // For now, ignoring aspect check in this store function.

        return { passed: true };
      },

      resetStory: () => set(INITIAL_STATE),

      debug_populateClues: () => set((state) => ({
        clues: ['clue_moth_pattern', 'clue_bureau_badge', 'clue_morgan_statement'],
        boardState: {
          ...state.boardState,
          placedClues: [
            { id: 'clue_moth_pattern', x: 100, y: 100 },
            { id: 'clue_bureau_badge', x: 300, y: 100 },
            { id: 'clue_morgan_statement', x: 200, y: 300 }
          ]
        }
      }))
    }),
    {
      name: 'story-storage',
      partialize: (state) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { checkCondition, ...persistedState } = state;
        return persistedState;
      }
    }
  )
);
