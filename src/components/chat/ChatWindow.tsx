'use client';

import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { Phone, Video, Search, MoreVertical } from 'lucide-react';
import { useRef, useEffect } from 'react';

// Dummy data for visual design
const DUMMY_MESSAGES = [
  { id: '1', content: 'Hey, are you on the grid yet?', isOwn: false, status: 'read' as const, time: '10:42 AM' },
  { id: '2', content: 'Just connected. The proxy is secure.', isOwn: true, status: 'read' as const, time: '10:43 AM' },
  { id: '3', content: 'Good. Sending you the coordinates now.', isOwn: false, status: 'read' as const, time: '10:45 AM' },
  { id: '4', content: 'Got them. Decrypting the payload.', isOwn: true, status: 'delivered' as const, time: '10:46 AM' },
];

export default function ChatWindow({ chatId }: { chatId: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex flex-col h-full bg-cyber-darker/50 w-full relative">
      {/* Header */}
      <div className="h-20 border-b border-cyber-cyan/20 bg-cyber-dark/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-cyber-purple/20 border-2 border-cyber-purple flex items-center justify-center animate-pulse">
              <span className="font-orbitron text-cyber-purple font-bold">N</span>
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-cyber-cyan border-2 border-cyber-dark rounded-full shadow-[0_0_10px_rgba(0,240,255,1)]"></div>
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-white text-glow-cyan uppercase">Neon Samurai {chatId}</h3>
            <span className="text-xs text-cyber-cyan">Online • Neural Link Active</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-cyber-foreground/60">
          <button className="p-2 hover:text-cyber-cyan hover:bg-cyber-cyan/10 rounded-full transition-colors"><Phone className="w-5 h-5" /></button>
          <button className="p-2 hover:text-cyber-purple hover:bg-cyber-purple/10 rounded-full transition-colors"><Video className="w-5 h-5" /></button>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <button className="p-2 hover:text-white rounded-full transition-colors"><Search className="w-5 h-5" /></button>
          <button className="p-2 hover:text-white rounded-full transition-colors"><MoreVertical className="w-5 h-5" /></button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 scroll-smooth">
        <div className="flex flex-col justify-end min-h-full space-y-2">
          <div className="text-center my-6">
            <span className="px-3 py-1 bg-cyber-glass text-xs text-cyber-foreground/40 rounded-full border border-white/5 uppercase tracking-widest">
              End-to-End Encrypted Session Started
            </span>
          </div>
          
          {DUMMY_MESSAGES.map((msg) => (
            <MessageBubble 
              key={msg.id}
              content={msg.content}
              isOwn={msg.isOwn}
              status={msg.status}
              time={msg.time}
            />
          ))}
        </div>
      </div>

      {/* Input */}
      <MessageInput />
    </div>
  );
}
