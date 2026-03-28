import { SiteLink as Link } from '@/components/ui/link';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-emerald">Member access</p>
          <h1 className="text-4xl font-semibold text-white">Secure login for subscribers and admins.</h1>
          <p className="max-w-2xl mx-auto text-slate-400">Sign in to manage your subscription, scores, charity allocation, and draw participation.</p>
        </div>
        <LoginForm />
        <p className="text-center text-sm text-slate-400">
          New here?{' '}
          <Link href="/signup" className="text-brand-emerald underline hover:text-white">
            Create an account.
          </Link>
        </p>
      </div>
    </div>
  );
}
