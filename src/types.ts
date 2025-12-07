export type Aspect = 
  | 'Lantern' // 灯
  | 'Forge'   // 铸
  | 'Edge'    // 刃
  | 'Winter'  // 冬
  | 'Heart'   // 心
  | 'Grail'   // 杯
  | 'Moth'    // 蛾
  | 'Knock'   // 启
  | 'Secret Histories'; // 秘史

export interface Option {
  id: string;
  text: string;
  aspect: Aspect;
  value: number;
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
