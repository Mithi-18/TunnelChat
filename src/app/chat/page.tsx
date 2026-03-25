'use client';

import { MessageSquare, Link as LinkIcon } from 'lucide-react';
import { usePeer } from '@/components/providers/PeerProvider';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NeonButton from '@/components/ui/NeonButton';

export default function ChatEmptyState() {
  const { myPeerId } = usePeer();
  const [targetId, setTargetId] = useState('');
  const router = useRouter();

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (targetId.trim()) {
      router.push(`/chat/${targetId.trim()}`);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-cyber-foreground/50 selection:bg-none p-6 relative">
      <div className="w-24 h-24 rounded-full border border-cyber-cyan/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <MessageSquare className="w-10 h-10 text-cyber-cyan opacity-80" />
      </div>
      <h2 className="font-orbitron text-2xl font-bold text-white mb-2">TUNNEL<span className="text-cyber-cyan">CHAT</span></h2>
      <p className="text-sm mb-12">Select a conversation or start a new encrypted uplink.</p>

      {/* Connection Panel */}
      <div className="bg-cyber-glass border border-white/5 p-6 rounded-2xl w-full max-w-md backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="mb-6 pb-6 border-b border-white/5">
          <p className="text-xs text-cyber-cyan mb-2 font-orbitron tracking-wider">YOUR NEURAL ID:</p>
          <div className="bg-cyber-darker p-3 rounded-xl border border-cyber-cyan/20 flex items-center justify-between">
            <span className="font-mono text-sm text-white select-all">{myPeerId || 'INITIALIZING...'}</span>
            <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></span>
          </div>
        </div>

        <form onSubmit={handleConnect} className="space-y-4">
          <p className="text-xs text-cyber-purple mb-2 font-orbitron tracking-wider">ESTABLISH UPLINK:</p>
          <div className="relative">
            <input 
              type="text" 
              value={targetId}
              onChange={(e) => setTargetId(e.target.value)}
              placeholder="Enter Target ID..."
              className="w-full bg-cyber-darker border border-cyber-purple/20 rounded-xl px-4 py-3 pl-10 text-white outline-none focus:border-cyber-purple/50 focus:shadow-[0_0_15px_rgba(189,0,255,0.2)] transition-all font-mono text-sm"
              required
            />
            <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-foreground/50" />
          </div>
          <NeonButton 
            color="purple" 
            variant="outline" 
            className="w-full py-2.5" 
            type="submit"
          >
            Connect
          </NeonButton>
        </form>
      </div>
    </div>
  );
}
