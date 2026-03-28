'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

interface AdminGuardProps {
  children: React.ReactNode;
}

export function AdminGuard({ children }: AdminGuardProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.replace('/login');
        return;
      }
      const email = data.session.user.email;
      const { data: profile } = await supabase.from('users').select('role').eq('email', email).single();
      if (!profile || profile.role !== 'admin') {
        router.replace('/dashboard');
        return;
      }
      setLoading(false);
    };

    verify();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-full bg-white/10 px-8 py-4 text-slate-100">Verifying admin access…</div>
      </div>
    );
  }

  return <>{children}</>;
}
