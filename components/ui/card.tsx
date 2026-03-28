import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`glass shadow-soft border border-white/10 rounded-3xl p-6 backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}

export default Card;
