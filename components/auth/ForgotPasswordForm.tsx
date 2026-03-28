'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/lib/supabaseClient';
import { forgotPasswordSchema } from '@/lib/validators';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type FormValues = {
  email: string;
};

export function ForgotPasswordForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setError(null);
    setSuccess(null);
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/login`
    });

    if (resetError) {
      setError(resetError.message);
      return;
    }

    setSuccess('Check your inbox for a password reset link.');
  };

  return (
    <Card className="max-w-xl mx-auto p-8">
      <h2 className="text-2xl font-semibold text-white">Reset your password</h2>
      <p className="mt-3 text-sm text-slate-400">Enter your account email to receive a reset link.</p>
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
        {error ? <p className="text-sm text-rose-400">{error}</p> : null}
        {success ? <p className="text-sm text-emerald-400">{success}</p> : null}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send reset link'}
        </Button>
      </form>
    </Card>
  );
}
