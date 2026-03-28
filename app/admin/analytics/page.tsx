import { Card } from '@/components/ui/card';

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Analytics</p>
        <h1 className="text-3xl font-semibold text-white">Subscription and impact metrics.</h1>
      </div>
      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total donations</p>
          <p className="mt-4 text-3xl font-semibold text-white">$54,200</p>
        </Card>
        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Active members</p>
          <p className="mt-4 text-3xl font-semibold text-white">860</p>
        </Card>
        <Card className="rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Monthly growth</p>
          <p className="mt-4 text-3xl font-semibold text-brand-emerald">+12%</p>
        </Card>
      </div>
    </div>
  );
}
