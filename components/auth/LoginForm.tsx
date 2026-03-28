'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';
import { loginSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FormValues = {
  email: string;
  password: string;
};

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    const { error: authError } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <Card className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-white">Login to your account</h2>
      <p className="mt-3 text-sm text-slate-400">Secure access for subscribers and admins.</p>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-emerald"
            {...register('email')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-emerald"
            {...register('password')}
          />
        </div>
        {error ? <p className="text-sm text-rose-400">{error}</p> : null}
        <div className="flex items-center justify-between gap-4">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Continue'}
          </Button>
        </div>
      </form>
      <p className="mt-6 text-sm text-slate-400">
        Forgot your password?{' '}
        <a href="/login/forgot" className="text-brand-emerald underline hover:text-white">
          Reset it here
        </a>
        .
      </p>
    </Card>
  );
}
