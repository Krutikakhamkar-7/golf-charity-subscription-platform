import { SiteLink as Link } from '@/components/ui/link';
import { Button } from './button';

const navItems = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Charities', href: '/charities' },
  { label: 'About', href: '/about' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <div className="transition duration-500 ease-out">
          <Link href="/" className="text-xl font-semibold tracking-tight text-white">
            Golf Impact
          </Link>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
