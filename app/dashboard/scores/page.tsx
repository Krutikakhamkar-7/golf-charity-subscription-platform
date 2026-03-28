import { Card } from '@/components/ui/card';

const latestScores = [
  { score: 25, date: '2026-05-21' },
  { score: 30, date: '2026-05-18' },
  { score: 20, date: '2026-05-12' },
  { score: 18, date: '2026-05-05' },
  { score: 12, date: '2026-04-28' }
];

export default function ScoresPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Scores</p>
        <h1 className="text-3xl font-semibold text-white">Your latest five rounds</h1>
        <p className="text-slate-400">New scores replace the oldest automatically and appear first.</p>
      </div>
      <Card className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {latestScores.map((entry, index) => (
            <div key={entry.date} className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Round {index + 1}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{entry.score}</p>
              <p className="mt-2 text-sm text-slate-400">{entry.date}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
