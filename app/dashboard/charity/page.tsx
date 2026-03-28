import { Card } from '@/components/ui/card';

export default function CharityDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Charity</p>
        <h1 className="text-3xl font-semibold text-white">Your selected cause</h1>
        <p className="text-slate-400">Adjust the donation percentage or change the charity partner at any time.</p>
      </div>
      <Card className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Current charity</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Stroke Recovery Trust</h2>
          </div>
          <div className="rounded-full bg-brand-emerald/10 px-4 py-2 text-sm font-semibold text-brand-emerald">16%</div>
        </div>
        <p className="text-slate-300">A modern charity partner focused on recovery, adaptive sport, and community resilience.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <button className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">Change charity</button>
          <button className="rounded-full bg-brand-emerald px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Adjust donation</button>
        </div>
      </Card>
    </div>
  );
}
