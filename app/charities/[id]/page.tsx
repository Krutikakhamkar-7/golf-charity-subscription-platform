import { SiteLink as Link } from '@/components/ui/link';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';

const charityList = [
  {
    id: 'beacon-impact',
    name: 'Beacon Impact Fund',
    description: 'Funding resilient community programs and athlete wellness.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    impact: ['22,130 meals funded', '240 community events supported', '12 greenhouse projects']
  },
  {
    id: 'stroke-recovery',
    name: 'Stroke Recovery Trust',
    description: 'Support for recovery care and adaptive golf clinics.',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80',
    impact: ['8,250 therapy sessions', '74 adaptive equipment grants', '18 recovery retreats']
  },
  {
    id: 'future-greens',
    name: 'Future Greens Initiative',
    description: 'Scholarships and education for young players.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    impact: ['14 youth scholarships', '9 mentorship programs', '30 sustainable greens built']
  }
];

export default function CharityDetailPage({ params }: { params: any }) {
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const charity = charityList.find((item) => item.id === id);

  if (!charity) {
    notFound();
  }

  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.4fr]">
          <div className="space-y-6">
            <p className="uppercase tracking-[0.28em] text-brand-emerald">Charity details</p>
            <h1 className="text-4xl font-semibold text-white">{charity.name}</h1>
            <p className="max-w-3xl text-slate-300">{charity.description}</p>
            <div className="overflow-hidden rounded-[2rem] bg-slate-950/80 shadow-soft">
              <img src={charity.image} alt={charity.name} className="h-full w-full object-cover" />
            </div>
          </div>
          <Card className="space-y-6">
            <p className="uppercase tracking-[0.28em] text-slate-400">Impact accelerator</p>
            <div className="space-y-4">
              {charity.impact.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-emerald" />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <Link href="/charities">
              <button className="w-full rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/20">
                Back to charities
              </button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
