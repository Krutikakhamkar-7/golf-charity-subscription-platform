import { SiteLink as Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatMoney } from '@/lib/utils';

const featureSteps = [
  {
    title: 'Subscribe with purpose',
    description: 'Choose a premium membership that fuels charity impact and unlocks monthly draws.'
  },
  {
    title: 'Submit your five best scores',
    description: 'Add your latest scores in seconds and keep your performance profile fresh.'
  },
  {
    title: 'Support causes you love',
    description: 'Allocate a donation percentage to featured charities every month.'
  },
  {
    title: 'Win meaningful rewards',
    description: 'Match numbers, claim prizes, and celebrate giving back over time.'
  }
];

const charities = [
  {
    name: 'Beacon Impact Fund',
    impact: '22,130 meals funded',
    percentage: 12,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Stroke Recovery Trust',
    impact: '8,250 therapy sessions',
    percentage: 16,
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Future Greens Initiative',
    impact: '14 youth scholarships',
    percentage: 18,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  }
];

const testimonials = [
  {
    name: 'Ava Chen',
    role: 'Weekend competitor',
    quote: 'I love the energy of tracking my rounds while knowing my subscription powers real impact.'
  },
  {
    name: 'Malik Roberts',
    role: 'Charity donor',
    quote: 'The dashboard makes every donation feel like a reward. It feels modern, emotional, and premium.'
  },
  {
    name: 'Sofia Green',
    role: 'Draw winner',
    quote: 'Winning the draw and supporting causes at the same time is exactly what I wanted from golf.'
  }
];

export default function HomePage() {
  return (
    <div className="page-shell space-y-24">
      <section className="relative overflow-hidden rounded-[3rem] bg-hero px-6 py-20 shadow-glow sm:px-10 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,207,151,0.25),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="opacity-100 transition-all duration-700 ease-out">
            <Badge className="mb-6 bg-white/10 text-white">Premium golf charity experience</Badge>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Play for More Than a Score.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Subscribe, enter golf scores, support charity, and win rewards through an elegant monthly draw engine.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button>Start Winning</Button>
              </Link>
              <Link href="/charities">
                <Button variant="secondary">Explore Charities</Button>
              </Link>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card className="border-brand-emerald/20 bg-white/5">
              <h3 className="text-base font-semibold text-white">Charity impact</h3>
              <p className="mt-3 text-slate-300">Every subscription directs a percentage of proceeds to curated causes.</p>
            </Card>
            <Card className="border-blue-400/20 bg-white/5">
              <h3 className="text-base font-semibold text-white">Winning excitement</h3>
              <p className="mt-3 text-slate-300">Compete each month for prize pools tied to your latest scores.</p>
            </Card>
            <Card className="border-gold/20 bg-white/5">
              <h3 className="text-base font-semibold text-white">Modern subscription</h3>
              <p className="mt-3 text-slate-300">Flexible plans with transparent renewal dates and support options.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-slate-300">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-emerald/10 text-brand-emerald">01</span>
            <h2 className="text-3xl font-semibold text-white">How it works</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {featureSteps.map((step) => (
              <Card key={step.title} className="hover:-translate-y-1 hover:bg-white/10 transition-transform">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="space-y-8 rounded-[2rem] bg-white/5 p-8 shadow-soft backdrop-blur-xl">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.32em] text-slate-400">Prize allocation</p>
            <div className="space-y-3">
              {[
                ['5-match', '40%', 'Jackpot pool'],
                ['4-match', '35%', 'Second prize'],
                ['3-match', '25%', 'Third prize']
              ].map(([tier, share, label]) => (
                <div key={tier} className="grid gap-2 rounded-3xl bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium text-white">{label}</p>
                    <span className="text-sm text-slate-400">{share}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800">
                    <div className={`h-2 rounded-full bg-brand-emerald`} style={{ width: share as string }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="uppercase tracking-[0.28em] text-brand-emerald">Featured Charities</p>
            <h2 className="text-3xl font-semibold text-white">Responsible giving meets compelling impact.</h2>
          </div>
          <Link href="/charities">
            <Button variant="ghost">See all charities</Button>
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {charities.map((charity) => (
            <Card key={charity.name} className="overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img src={charity.image} alt={charity.name} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{charity.name}</h3>
                  <Badge>{charity.percentage}%</Badge>
                </div>
                <p className="text-slate-300">{charity.impact}</p>
                <p className="text-sm text-slate-500">Purpose-driven investments for measurable community change.</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.32em] text-brand-emerald">Prize pool spotlight</p>
          <h2 className="text-3xl font-semibold text-white">Transparent breakdown, premium reward design.</h2>
          <p className="max-w-2xl text-slate-300">
            Every draw is structured with a clear percentage split so members can feel the value of every match tier.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Jackpot', amount: 42000, description: 'Big win for perfect matches.' },
              { label: 'Second tier', amount: 18500, description: 'Strong rewards for near-perfect play.' }
            ].map((item) => (
              <Card key={item.label}>
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-3 text-2xl font-semibold text-brand-emerald">{formatMoney(item.amount)}</p>
                <p className="mt-2 text-slate-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-white/5 p-8 shadow-soft">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Score flow</h3>
            <p className="text-slate-400">Enter your latest scores, keep the newest five, and build your monthly draw eligibility automatically.</p>
            <div className="grid gap-3">
              {['12', '18', '20', '30', '25'].map((score, index) => (
                <div key={score} className="flex items-center justify-between rounded-3xl bg-slate-900/80 p-4">
                  <span className="text-sm text-slate-400">Round {index + 1}</span>
                  <span className="text-lg font-semibold text-white">{score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="uppercase tracking-[0.32em] text-brand-emerald">What our players say</p>
            <h2 className="text-3xl font-semibold text-white">Authentic momentum from our community.</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-brand-emerald/10 bg-slate-950/80">
              <p className="text-slate-300">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-[3rem] bg-gradient-to-r from-slate-900/95 via-slate-950 to-slate-900 px-10 py-16 text-center shadow-glow">
        <div className="mx-auto max-w-3xl">
          <p className="uppercase tracking-[0.32em] text-brand-emerald">Final invitation</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Join the club where charity, sport, and premium rewards meet.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            Become a subscriber today and start turning your best rounds into meaningful impact and exciting prize opportunities.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button>Start your membership</Button>
            </Link>
            <Link href="/login">
              <Button variant="secondary">View plan options</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
