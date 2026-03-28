import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald/80';
  const styles =
    variant === 'secondary'
      ? 'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700'
      : variant === 'ghost'
      ? 'bg-transparent text-slate-100 hover:bg-white/5'
      : 'bg-brand-emerald text-slate-950 shadow-glow hover:bg-emerald-400';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
