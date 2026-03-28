import { Card } from '@/components/ui/card';

export default function AdminWinnersPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Winner verification</p>
        <h1 className="text-3xl font-semibold text-white">Review submissions and approve payouts.</h1>
      </div>
      <Card className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-white">Player: Golf Player</p>
            <p className="text-sm text-slate-400">Match: 4-match</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full bg-brand-emerald px-4 py-2 text-sm font-semibold text-slate-950">Approve</button>
            <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">Reject</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
