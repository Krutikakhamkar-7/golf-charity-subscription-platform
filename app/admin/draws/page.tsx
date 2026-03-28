import { Card } from '@/components/ui/card';

export default function AdminDrawsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Draw management</p>
        <h1 className="text-3xl font-semibold text-white">Run and publish monthly draws.</h1>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          { label: 'Current month', value: 'May 2026' },
          { label: 'Draw type', value: 'Algorithmic' },
          { label: 'Rollover', value: '$12,000' }
        ].map((item) => (
          <Card key={item.label} className="rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
          </Card>
        ))}
      </div>
      <Card className="space-y-4">
        <button className="rounded-full bg-brand-emerald px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          Simulate draw
        </button>
        <button className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
          Publish results
        </button>
      </Card>
    </div>
  );
}
