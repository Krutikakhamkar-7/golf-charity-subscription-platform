import { Card } from '@/components/ui/card';

export default function SubscriptionPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Subscription</p>
        <h1 className="text-3xl font-semibold text-white">Plan details</h1>
        <p className="text-slate-400">Manage plan status, renewal timing, and billing information.</p>
      </div>
      <Card className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Plan</p>
            <p className="mt-3 text-2xl font-semibold text-white">Elevate Annual</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Status</p>
            <p className="mt-3 text-2xl font-semibold text-brand-emerald">Active</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Renewal date</p>
            <p className="mt-3 text-lg font-semibold text-white">June 12, 2026</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Stripe ID</p>
            <p className="mt-3 text-lg font-semibold text-white">sub_01F6XYZ...</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Billing</p>
            <p className="mt-3 text-lg font-semibold text-white">Card ending 1234</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
