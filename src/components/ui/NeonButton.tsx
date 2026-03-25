import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'cyan' | 'purple' | 'magenta';
  variant?: 'solid' | 'outline' | 'ghost';
}

export default function NeonButton({
  children,
  className,
  color = 'cyan',
  variant = 'solid',
  ...props
}: NeonButtonProps) {
  const baseClasses = 'relative px-6 py-3 font-orbitron font-bold rounded-xl transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2';
  
  const colorMap = {
    cyan: {
      solid: 'bg-cyber-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)]',
      outline: 'bg-transparent border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]',
      ghost: 'bg-transparent text-cyber-cyan hover:bg-cyber-cyan/10 hover:text-white text-glow-cyan',
    },
    purple: {
      solid: 'bg-cyber-purple text-white shadow-[0_0_15px_rgba(189,0,255,0.5)] hover:shadow-[0_0_25px_rgba(189,0,255,0.8)]',
      outline: 'bg-transparent border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]',
      ghost: 'bg-transparent text-cyber-purple hover:bg-cyber-purple/10 hover:text-white text-glow-purple',
    },
    magenta: {
      solid: 'bg-cyber-magenta text-white shadow-[0_0_15px_rgba(255,0,60,0.5)] hover:shadow-[0_0_25px_rgba(255,0,60,0.8)]',
      outline: 'bg-transparent border border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta/10 hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]',
      ghost: 'bg-transparent text-cyber-magenta hover:bg-cyber-magenta/10 hover:text-white text-glow-magenta',
    },
  };

  return (
    <button className={cn(baseClasses, colorMap[color][variant], className)} {...props}>
      <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
