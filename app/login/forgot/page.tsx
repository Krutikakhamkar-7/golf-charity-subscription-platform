import { SiteLink as Link } from '@/components/ui/link';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-emerald">Password reset</p>
          <h1 className="text-4xl font-semibold text-white">Recover access securely.</h1>
          <p className="max-w-2xl mx-auto text-slate-400">Enter your email and we’ll send a reset link right away.</p>
        </div>
        <ForgotPasswordForm />
        <p className="text-center text-sm text-slate-400">
          Return to{' '}
          <Link href="/login" className="text-brand-emerald underline hover:text-white">
            login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
