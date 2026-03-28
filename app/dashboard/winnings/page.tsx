import { Card } from '@/components/ui/card';

export default function WinningsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Winnings</p>
        <h1 className="text-3xl font-semibold text-white">Your draw performance</h1>
        <p className="text-slate-400">Track pending, approved, and paid prizes from published draws.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          { label: 'Total won', value: '$7,400' },
          { label: 'Pending', value: '$1,200' },
          { label: 'Paid', value: '$6,200' }
        ].map((stat) => (
          <Card key={stat.label} className="rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </Card>
        ))}
      </div>
      <Card className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Recent winner submission</p>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">Pending</span>
        </div>
        <p className="text-slate-300">Proof image uploaded and awaiting admin approval for payout.</p>
      </Card>
    </div>
  );
}
