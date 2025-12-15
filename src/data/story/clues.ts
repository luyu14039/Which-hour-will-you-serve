import type { Clue, DeductionRule } from '../../types/story';

export const CLUES: Record<string, Clue> = {
  'clue_moth_pattern': {
    id: 'clue_moth_pattern',
    title: '飞蛾斑纹',
    description: '死者体内的飞蛾翅膀上有着类似眼睛的斑纹，令人感到眩晕。',
    type: 'physical',
    icon: 'Eye',
    tags: ['尸体', '飞蛾']
  },
  'clue_bureau_badge': {
    id: 'clue_bureau_badge',
    title: '防剿局徽章',
    description: '一枚沉甸甸的徽章，象征着在这个隐秘世界的执法权。',
    type: 'physical',
    icon: 'Shield',
    tags: ['物品', '防剿局']
  },
  'clue_morgan_statement': {
    id: 'clue_morgan_statement',
    title: '摩根的警告',
    description: '摩根提到“世界的背面”，并暗示这起案件超出了常理。',
    type: 'testimony',
    icon: 'MessageSquare',
    tags: ['证言', '神秘']
  },
  'clue_supernatural_nature': {
    id: 'clue_supernatural_nature',
    title: '超自然本质',
    description: '这些飞蛾并非自然生物，而是某种来自“世界背面”的超自然现象。',
    type: 'inference',
    icon: 'Sparkles',
    tags: ['推论', '飞蛾', '世界背面']
  }
};

export const DEDUCTIONS: DeductionRule[] = [
  {
    id: 'deduction_moth_origin',
    clueA: 'clue_moth_pattern',
    clueB: 'clue_morgan_statement',
    resultText: '这些飞蛾并非自然生物，而是某种来自“世界背面”的超自然现象。',
    reward: {
      newClueId: 'clue_supernatural_nature',
      aspectReward: { Moth: 1 }
    }
  }
];

export const getClue = (id: string): Clue | undefined => {
  return CLUES[id];
};
