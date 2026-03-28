import { Card } from '@/components/ui/card';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Profile</p>
        <h1 className="text-3xl font-semibold text-white">Your account details</h1>
        <p className="text-slate-400">Manage your member profile, communication preferences, and account access.</p>
      </div>
      <Card className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Name</p>
            <p className="mt-3 text-lg font-semibold text-white">Golf Player</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
            <p className="mt-3 text-lg font-semibold text-white">player@golfimpact.com</p>
          </div>
        </div>
        <div className="rounded-3xl bg-slate-900/80 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Member since</p>
          <p className="mt-3 text-lg font-semibold text-white">April 2026</p>
        </div>
      </Card>
    </div>
  );
}
