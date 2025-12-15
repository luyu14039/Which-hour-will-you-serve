import type { Aspect } from '../types';

export type CharacterId = 'elias' | 'mary' | 'morgan' | 'narrator' | 'unknown';
export type FactionId = 'suppression_bureau' | 'hush_house' | 'oblivion';
export type Emotion = 'neutral' | 'happy' | 'angry' | 'fear' | 'sad' | 'surprised';

export interface GameState {
  // 基础状态
  currentNodeId: string;
  history: string[];      // 已读节点 ID
  
  // RPG 数值
  sanity: {               // 理智
    current: number;
    max: number;
  };
  erosion: number;        // 侵蚀度 (0-100)，越高越危险
  
  // 社交系统
  reputation: Record<FactionId, number>; // 局内信誉
  affinity: Record<CharacterId, number>; // 人物好感度
  
  // 物品与线索
  inventory: string[];    // 拥有的道具 ID 列表
  clues: string[];        // 拥有的线索 ID 列表
  
  // 线索板状态
  boardState: {
    placedClues: { id: string; x: number; y: number }[];
    connections: { from: string; to: string }[];
  };

  // 剧情开关
  flags: Record<string, boolean>;
}

export interface StoryNode {
  id: string;
  text: string;           // 支持 <clue id="c1">文本</clue>
  speaker: CharacterId;
  emotion?: Emotion;
  background?: string;
  
  // 环境信息
  time?: string;          // e.g. "1929年 11月 14日 - 下午"
  location?: string;      // e.g. "伦敦 - 防剿局总部"

  choices?: StoryChoice[];
  
  // 进入节点时的自动结算
  onEnter?: {
    unlockClue?: string[];
    gainItem?: string[];    // 获得道具
    removeItem?: string[];  // 失去道具
    
    // 数值变动
    deltaSanity?: number;   // 理智增减
    deltaErosion?: number;  // 侵蚀增减
    deltaReputation?: Partial<Record<FactionId, number>>;
    deltaAffinity?: Partial<Record<CharacterId, number>>;
    
    playSound?: string;
    updateAspect?: Partial<Record<Aspect, number>>; // 修改性相 (兼容旧系统)
  };
  
  nextId?: string;
}

export interface StoryChoice {
  text: string;
  nextId: string;
  
  // 可见性与可用性条件
  condition?: {
    // 道具要求 (工具)
    requiredItem?: string;  // 必须拥有此道具才能选
    
    // 数值要求
    minSanity?: number;
    maxErosion?: number;
    minReputation?: { faction: FactionId; value: number };
    minAffinity?: { character: CharacterId; value: number };
    
    // 线索要求
    requiredClue?: string;
    
    // 性相要求
    aspect?: Aspect;
    minScore?: number;
  };
  
  // 失败时的显示模式
  fallback?: 'hidden' | 'disabled'; // hidden: 不显示; disabled: 灰色显示并提示原因
}

export interface Item {
  id: string;
  name: string;
  description: string;
  icon: string; // 可以是 lucide-react 的图标名或者图片路径
  type: 'tool' | 'consumable' | 'key_item';
  
  // 道具效果 (如果是消耗品)
  effect?: {
    restoreSanity?: number;
    reduceErosion?: number;
  };
}

export type ClueType = 'testimony' | 'physical' | 'document' | 'inference';

export interface Clue {
  id: string;
  title: string;          // 显示在便签上的标题
  description: string;    // 详细描述
  type: ClueType;
  icon?: string;          // 可选图标
  tags?: string[];        // 标签
}

export interface DeductionRule {
  id: string;
  clueA: string;          // 线索 A 的 ID
  clueB: string;          // 线索 B 的 ID
  resultText: string;     // 合成后的推论文本
  reward?: {
    newClueId?: string;   // 生成的新线索/推论
    unlockNodeId?: string;// 解锁的剧情节点 ID
    aspectReward?: Partial<Record<Aspect, number>>;
    gainItem?: string[];
  };
}
