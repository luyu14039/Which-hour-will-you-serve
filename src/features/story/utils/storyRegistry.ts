import type { StoryNode } from '../../../types/story';
import { PROLOGUE_NODES } from '../../../data/story/chapters/prologue';

// Combine all chapters here
const ALL_NODES: Record<string, StoryNode> = {
  ...PROLOGUE_NODES,
  // ... other chapters
};

export const getStoryNode = (nodeId: string): StoryNode | undefined => {
  return ALL_NODES[nodeId];
};
