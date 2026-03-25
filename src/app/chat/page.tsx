import { MessageSquare } from 'lucide-react';

export default function ChatEmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-cyber-foreground/50 selection:bg-none">
      <div className="w-24 h-24 rounded-full border border-cyber-cyan/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
        <MessageSquare className="w-10 h-10 text-cyber-cyan opacity-80" />
      </div>
      <h2 className="font-orbitron text-2xl font-bold text-white mb-2">TUNNEL<span className="text-cyber-cyan">CHAT</span></h2>
      <p className="text-sm">Select a conversation or start a new encrypted uplink.</p>
    </div>
  );
}
