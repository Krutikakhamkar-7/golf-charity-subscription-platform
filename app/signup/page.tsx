import { SiteLink as Link } from '@/components/ui/link';
import { SignupForm } from '@/components/auth/SignupForm';

export default function SignupPage() {
  return (
    <div className="page-shell py-20">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-emerald">Join the movement</p>
          <h1 className="text-4xl font-semibold text-white">Create your subscriber account.</h1>
          <p className="max-w-2xl mx-auto text-slate-400">Start tracking scores, backing charities, and entering draws.</p>
        </div>
        <SignupForm />
        <p className="text-center text-sm text-slate-400">
          Already a member?{' '}
          <Link href="/login" className="text-brand-emerald underline hover:text-white">
            Sign in.
          </Link>
        </p>
      </div>
    </div>
  );
}
