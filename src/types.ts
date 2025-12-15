export type Aspect = 
  | 'Lantern' // 灯
  | 'Forge'   // 铸
  | 'Edge'    // 刃
  | 'Winter'  // 冬
  | 'Heart'   // 心
  | 'Grail'   // 杯
  | 'Moth'    // 蛾
  | 'Knock'   // 启
  | 'Secret Histories' // 秘史
  | 'Moon'    // 月
  | 'Sky'     // 穹
  | 'Rose'    // 引
  | 'Scale'   // 鳞
  | 'Nectar'; // 蜜

export interface Option {
  id: string;
  text: string;
  values: Partial<Record<Aspect, number>>;
  flavorText: string;
  nextQuestionId?: string;
  requirement?: {
    aspect: Aspect;
    minScore: number;
  };
}

export interface Question {
  id: string;
  title: string;
  description: string;
  options: Option[];
}

export interface AspectScore {
  aspect: Aspect;
  score: number;
}

export interface HistoryRecord {
  questionId: string;
  questionTitle: string;
  optionId: string;
  optionText: string;
  values: Partial<Record<Aspect, number>>;
  flavorText: string;
}

export type Perspective = 'protagonist' | 'observer';
