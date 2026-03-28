import { Card } from '@/components/ui/card';

export default function AdminCharitiesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="uppercase tracking-[0.3em] text-brand-emerald">Charity manager</p>
        <h1 className="text-3xl font-semibold text-white">Add, update, or remove charity partners.</h1>
      </div>
      <Card className="grid gap-6 md:grid-cols-2">
        {['Beacon Impact Fund', 'Stroke Recovery Trust', 'Future Greens Initiative'].map((title) => (
          <div key={title} className="rounded-3xl bg-slate-900/80 p-6">
            <p className="font-semibold text-white">{title}</p>
            <p className="mt-3 text-sm text-slate-400">Category, featured status, and donation percentage settings available.</p>
          </div>
        ))}
      </Card>
    </div>
  );
}
