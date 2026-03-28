import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/ui/footer';
import { SiteHeader } from '@/components/ui/site-header';

export const metadata: Metadata = {
  title: 'Golf Charity Subscription Platform',
  description: 'A premium subscription experience for golfers who play for charity and rewards.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-brand-950 text-slate-100">
          <SiteHeader />
          <main className="relative isolate overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
