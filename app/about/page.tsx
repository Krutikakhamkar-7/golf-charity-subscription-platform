import { Card } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="uppercase tracking-[0.32em] text-brand-emerald">About</p>
          <h1 className="text-4xl font-semibold text-white">A bold new chapter for golf, charity, and premium rewards.</h1>
          <p className="mx-auto max-w-3xl text-slate-400">We bring fintech polish, emotional design, and subscription-first mechanics to the golf community.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Mission',
              description: 'Create a modern membership experience that combines sport, social impact, and meaningful reward systems.'
            },
            {
              title: 'Vision',
              description: 'Launch a community where every round supports causes, every draw feels premium, and every member feels valued.'
            },
            {
              title: 'Values',
              description: 'Clarity, care, momentum, and design excellence in every interaction.'
            }
          ].map((item) => (
            <Card key={item.title}>
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
