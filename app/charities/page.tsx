import { SiteLink as Link } from '@/components/ui/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const charities = [
  {
    id: 'beacon-impact',
    name: 'Beacon Impact Fund',
    description: 'Funding resilient community programs and athlete wellness.',
    impact: '22,130 meals funded',
    percentage: 12,
    category: 'Community'
  },
  {
    id: 'stroke-recovery',
    name: 'Stroke Recovery Trust',
    description: 'Support for recovery care and adaptive golf clinics.',
    impact: '8,250 therapy sessions',
    percentage: 16,
    category: 'Health'
  },
  {
    id: 'future-greens',
    name: 'Future Greens Initiative',
    description: 'Scholarships and education for young players.',
    impact: '14 youth scholarships',
    percentage: 18,
    category: 'Education'
  }
];

export default function CharitiesPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="uppercase tracking-[0.32em] text-brand-emerald">Charities</p>
          <h1 className="text-4xl font-semibold text-white">Support curated causes with every subscription.</h1>
          <p className="mx-auto max-w-2xl text-slate-400">Browse meaningful charities, see impact highlights, and choose where your contributions go.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {charities.map((charity) => (
            <Link key={charity.id} href={`/charities/${charity.id}`} className="group">
              <Card className="h-full transition-transform hover:-translate-y-1 hover:border-brand-emerald/30">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{charity.name}</p>
                    <p className="mt-3 text-sm text-slate-400">{charity.description}</p>
                  </div>
                  <Badge>{charity.category}</Badge>
                </div>
                <div className="mt-6 grid gap-2 rounded-3xl bg-slate-950/70 p-4">
                  <span className="text-sm text-slate-400">Monthly donation allocation</span>
                  <p className="text-3xl font-semibold text-brand-emerald">{charity.percentage}%</p>
                  <p className="text-sm text-slate-500">Impact goal: {charity.impact}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
