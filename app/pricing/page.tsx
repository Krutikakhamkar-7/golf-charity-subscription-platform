import { SiteLink as Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const plans = [
  {
    title: 'Horizon Monthly',
    price: '$18',
    description: 'Flexible access with monthly charity support and draw entry.',
    benefits: ['Unlimited score entries', 'Monthly draw access', 'Charity donation tracking']
  },
  {
    title: 'Elevate Annual',
    price: '$180',
    description: 'Best value for dedicated members with premium impact benefits.',
    benefits: ['2 months free', 'Priority draw placement', 'Annual impact report']
  }
];

export default function PricingPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="uppercase tracking-[0.32em] text-brand-emerald">Pricing</p>
          <h1 className="text-4xl font-semibold text-white">Choose the subscription path that powers your play.</h1>
          <p className="mx-auto max-w-2xl text-slate-400">Transparent pricing for modern golfers who want impact and reward.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <Card key={plan.title} className="space-y-6 border-brand-emerald/15">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-brand-emerald">{plan.title}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              </div>
              <p className="text-slate-400">{plan.description}</p>
              <ul className="space-y-3 text-slate-300">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-emerald" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full">Choose plan</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
