import type { ReactNode } from 'react';
import { SiteLink as Link } from '@/components/ui/link';

const navItems = [
  { label: 'Overview', href: '/admin' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Draws', href: '/admin/draws' },
  { label: 'Charities', href: '/admin/charities' },
  { label: 'Winners', href: '/admin/winners' },
  { label: 'Analytics', href: '/admin/analytics' }
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell space-y-10">
      <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
        <aside className="space-y-6 rounded-[2rem] bg-slate-950/80 p-6 shadow-soft">
          <div className="space-y-3">
            <p className="uppercase tracking-[0.3em] text-brand-emerald">Admin panel</p>
            <h2 className="text-2xl font-semibold text-white">Operations center</h2>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-3xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/" className="block rounded-full border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
            Back to home
          </Link>
        </aside>
        <section className="space-y-8">{children}</section>
      </div>
    </div>
  );
}
