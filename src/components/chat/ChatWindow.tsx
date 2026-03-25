'use client';

import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import { Phone, Video, Search, MoreVertical, Wifi, WifiOff, Loader2 } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { useChatManager } from '@/hooks/useChatManager';
import { usePeer } from '@/components/providers/PeerProvider';

export default function ChatWindow({ chatId }: { chatId: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, status, sendMessage } = useChatManager(chatId);
  const { myPeerId } = usePeer();

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-cyber-darker/50 w-full relative">
      {/* Header */}
      <div className="h-20 border-b border-cyber-cyan/20 bg-cyber-dark/80 backdrop-blur-md flex items-center justify-between px-6 z-10 shrink-0 shadow-md">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-cyber-purple/20 border-2 border-cyber-purple flex items-center justify-center">
              <span className="font-orbitron font-bold text-cyber-purple">{chatId.substring(0, 2).toUpperCase()}</span>
            </div>
            <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-cyber-dark rounded-full ${status === 'connected' ? 'bg-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,1)]' : status === 'connecting' ? 'bg-cyber-yellow animate-pulse' : 'bg-red-500'}`}></div>
          </div>
          <div>
            <h3 className="font-orbitron font-bold text-white text-glow-cyan">PEER: {chatId.substring(0, 8)}...</h3>
            <span className="text-xs flex items-center gap-1 font-mono mt-1">
              {status === 'connected' && <><Wifi className="w-3 h-3 text-cyber-cyan" /><span className="text-cyber-cyan">Uplink Active</span></>}
              {status === 'connecting' && <><Loader2 className="w-3 h-3 text-cyber-yellow animate-spin" /><span className="text-cyber-yellow">Establishing...</span></>}
              {status === 'disconnected' && <><WifiOff className="w-3 h-3 text-red-500" /><span className="text-red-500">Disconnected</span></>}
            </span>
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
              End-to-End P2P Session
            </span>
          </div>
          
          {messages.map((msg) => {
            const date = new Date(msg.created_at);
            const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            return (
              <MessageBubble 
                key={msg.id}
                content={msg.content}
                isOwn={msg.sender_id === myPeerId}
                status={msg.status}
                time={timeString}
              />
            );
          })}
        </div>
      </div>

      {/* Input */}
      <MessageInput 
        onSend={(text) => sendMessage(text, 'text')} 
        disabled={status !== 'connected'} 
      />
    </div>
  );
}
