import type { Aspect } from '../types';
import { type Hour, HOURS_DATA } from '../data/hours';
import { ASPECT_JUDGMENTS, SPECIAL_COMBINATIONS, type Judgment } from '../data/results';

export const calculateHourMatch = (scores: Record<Aspect, number>): Hour => {
  let bestHour = HOURS_DATA[0];
  let maxScore = -Infinity;

  for (const hour of HOURS_DATA) {
    if (hour.aspects.length === 0) continue;

    let rawScore = 0;
    let matchCount = 0;
    
    hour.aspects.forEach((aspect, index) => {
      const userScore = scores[aspect] || 0;
      
      // Optimized Weighting:
      // Primary aspect is crucial (1.0).
      // Secondary aspects provide support but shouldn't override a mismatch in primary.
      // Weights: 1.0, 0.6, 0.36...
      const weight = Math.pow(0.6, index);
      
      rawScore += userScore * weight;
      
      if (userScore > 0) matchCount++;
    });
    
    // Synergy Bonus:
    // If the user matches multiple aspects of the Hour, they are a better fit
    // than someone who just has a high score in the primary aspect.
    let synergyMultiplier = 1.0;
    if (hour.aspects.length > 1 && matchCount > 1) {
        synergyMultiplier = 1.1 + (matchCount * 0.05); 
    }

    // Penalty:
    // If the user has NO affinity for the Hour's primary aspect, 
    // it's very unlikely to be their patron Hour.
    if ((scores[hour.aspects[0]] || 0) === 0) {
        synergyMultiplier *= 0.5;
    }

    // Normalization:
    // We divide by a smaller factor than before to slightly favor complex Hours
    // if the user actually matches their complexity.
    const finalScore = (rawScore * synergyMultiplier) / Math.pow(hour.aspects.length, 0.3);
    
    if (finalScore > maxScore) {
      maxScore = finalScore;
      bestHour = hour;
    }
  }
  
  return bestHour;
};

export const getHighestAspect = (scores: Record<Aspect, number>): Aspect => {
    let maxAspect: Aspect = 'Lantern';
    let maxScore = -1;
    
    for (const [aspect, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            maxAspect = aspect as Aspect;
        }
    }
    return maxAspect;
};

export const calculateJudgment = (scores: Record<Aspect, number>): Judgment => {
    const sortedAspects = Object.entries(scores)
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
        .map(([aspect]) => aspect as Aspect);

    const primary = sortedAspects[0];
    const secondary = sortedAspects[1];

    // Check for special combination
    if (secondary) {
        const comboKey = `${primary}+${secondary}`;
        if (SPECIAL_COMBINATIONS[comboKey]) {
            return SPECIAL_COMBINATIONS[comboKey];
        }
    }

    return ASPECT_JUDGMENTS[primary];
};
