import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-brand-emerald">Active subscription</p>
              <h1 className="text-3xl font-semibold text-white">Horizon Monthly</h1>
            </div>
            <Badge>Active</Badge>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Renewal', value: 'May 12, 2026' },
              { label: 'Total draws', value: '4' },
              { label: 'Charity match', value: '16%' }
            ].map((item) => (
              <div key={item.label} className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-6 bg-slate-950/80">
          <p className="uppercase tracking-[0.3em] text-slate-400">Charity allocation</p>
          <h2 className="text-2xl font-semibold text-white">Stroke Recovery Trust</h2>
          <p className="text-slate-300">Current impact partner with dynamic donation tracking.</p>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="space-y-3">
          <p className="uppercase tracking-[0.3em] text-slate-400">Latest wins</p>
          <p className="text-3xl font-semibold text-brand-emerald">$7,400</p>
          <p className="text-sm text-slate-400">Total credited prizes from all published draws.</p>
        </Card>
        <Card className="space-y-3">
          <p className="uppercase tracking-[0.3em] text-slate-400">Monthly draw</p>
          <p className="text-3xl font-semibold text-white">May 2026</p>
          <p className="text-sm text-slate-400">Next draw: May 28. Submit your fifth score to qualify.</p>
        </Card>
        <Card className="space-y-3">
          <p className="uppercase tracking-[0.3em] text-slate-400">Impact score</p>
          <p className="text-3xl font-semibold text-white">92%</p>
          <p className="text-sm text-slate-400">On track with charity donations and premium membership goals.</p>
        </Card>
      </div>
    </div>
  );
}
