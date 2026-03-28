'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';
import { signupSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FormValues = {
  full_name: string;
  email: string;
  password: string;
};

export function SignupForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: { data: { full_name: data.full_name, role: 'subscriber' } }
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    await supabase.from('users').insert({
      full_name: data.full_name,
      email: data.email,
      role: 'subscriber'
    });

    if (authData.session) {
      router.push('/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <Card className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-white">Start your membership</h2>
      <p className="mt-3 text-sm text-slate-400">Create an account and start entering scores.</p>
      <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-slate-300">Full name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-emerald"
            {...register('full_name')}
          />
        </div>
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
            placeholder="Choose a password"
            className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-brand-emerald"
            {...register('password')}
          />
        </div>
        {error ? <p className="text-sm text-rose-400">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </Card>
  );
}
