import { Card } from '@/components/ui/card';

export default function AdminPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Admin overview</p>
        <h1 className="text-3xl font-semibold text-white">Operational command center</h1>
        <p className="text-slate-400">Monitor users, draws, charities, and winnings from a premium analytics console.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        {[
          { label: 'Users', value: '1,240' },
          { label: 'Active subscriptions', value: '860' },
          { label: 'Prize pool', value: '$128,000' }
        ].map((stat) => (
          <Card key={stat.label} className="rounded-3xl p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{stat.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
