import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'hover';
}

export default function GlassCard({ children, className, variant = 'default' }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        variant === 'default'
          ? 'bg-cyber-glass border-cyber-cyan/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-cyber-glass-hover border-cyber-cyan/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]',
        className
      )}
    >
      {children}
    </div>
  );
}
