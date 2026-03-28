import type { ScoreRecord, MonthlyDraw } from '@/types';

export function generateRandomDraw() {
  const numbers = new Set<number>();
  while (numbers.size < 5) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

export function generateAlgorithmicDraw(scores: ScoreRecord[]) {
  const frequency = new Map<number, number>();
  scores.forEach((score) => {
    frequency.set(score.score, (frequency.get(score.score) ?? 0) + 1);
  });

  if (frequency.size < 5) {
    return generateRandomDraw();
  }

  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([score]) => score)
    .sort((a, b) => a - b);
}

export function compareScoreSet(latestScores: number[], drawNumbers: number[]) {
  return latestScores.filter((score) => drawNumbers.includes(score)).length;
}

export function calculatePrizePool(totalPool: number) {
  return {
    fiveMatch: Math.round(totalPool * 0.4),
    fourMatch: Math.round(totalPool * 0.35),
    threeMatch: Math.round(totalPool * 0.25)
  };
}

export function simulateDrawResults(
  users: Array<{ id: string; latestScores: number[] }>,
  draw: MonthlyDraw,
  prizePool: number
) {
  const distribution = calculatePrizePool(prizePool);
  return users.map((user) => {
    const matches = compareScoreSet(user.latestScores, draw.winning_numbers);
    const matchType = matches === 5 ? '5-match' : matches === 4 ? '4-match' : matches === 3 ? '3-match' : null;
    const prize_amount = matchType === '5-match' ? distribution.fiveMatch : matchType === '4-match' ? distribution.fourMatch : matchType === '3-match' ? distribution.threeMatch : 0;
    return {
      user_id: user.id,
      match_type: matchType,
      prize_amount,
      wins: matches,
      latestScores: user.latestScores
    };
  });
}
