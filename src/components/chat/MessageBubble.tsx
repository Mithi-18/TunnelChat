'use client';

import { cn } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';

interface MessageBubbleProps {
  content: string;
  isOwn: boolean;
  status: 'sent' | 'delivered' | 'read';
  time: string;
}

export default function MessageBubble({ content, isOwn, status, time }: MessageBubbleProps) {
  return (
    <div className={cn('flex w-full mb-4', isOwn ? 'justify-end' : 'justify-start')}>
      <div 
        className={cn(
          'max-w-[75%] px-4 py-2 rounded-2xl relative',
          isOwn 
            ? 'bg-cyber-cyan/10 border border-cyber-cyan/30 text-white rounded-br-sm shadow-[0_4px_20px_rgba(0,240,255,0.1)]' 
            : 'bg-cyber-glass border border-white/5 text-cyber-foreground rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
        )}
      >
        <p className="text-sm leading-relaxed break-words">{content}</p>
        
        <div className="flex items-center justify-end gap-1 mt-1 shrink-0">
          <span className="text-[10px] text-cyber-foreground/40">{time}</span>
          {isOwn && (
            <span className={cn('text-[12px]', status === 'read' ? 'text-cyber-cyan' : 'text-cyber-foreground/40')}>
              {status === 'sent' && <Check className="w-3 h-3" />}
              {(status === 'delivered' || status === 'read') && <CheckCheck className="w-3 h-3" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
