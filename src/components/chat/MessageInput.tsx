'use client';

import { Paperclip, Send, Smile, Mic } from 'lucide-react';
import { useState } from 'react';

interface MessageInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export default function MessageInput({ onSend, disabled }: MessageInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() && !disabled) {
      onSend(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-cyber-cyan/10 bg-cyber-dark/80 backdrop-blur-md shrink-0">
      <div className="flex items-end gap-3 max-w-5xl mx-auto">
        <button disabled={disabled} className="p-3 rounded-xl text-cyber-foreground/60 hover:text-cyber-magenta hover:bg-cyber-magenta/10 transition-colors disabled:opacity-50">
          <Paperclip className="w-5 h-5" />
        </button>
        
        <div className={`flex-1 bg-cyber-darker border border-cyber-cyan/20 rounded-2xl flex items-end p-1 shadow-inner relative transition-all ${disabled ? 'opacity-50' : 'focus-within:border-cyber-cyan/50 focus-within:shadow-[0_0_15px_rgba(0,240,255,0.2)]'}`}>
          <button disabled={disabled} className="p-2 text-cyber-foreground/50 hover:text-cyber-yellow transition-colors shrink-0">
            <Smile className="w-6 h-6" />
          </button>
          
          <textarea 
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={disabled ? "Connecting to peer..." : "Type your message..."}
            className="w-full max-h-32 bg-transparent text-white placeholder-cyber-foreground/40 resize-none outline-none py-3 px-2 flex-1 min-h-[48px] overflow-y-auto disabled:cursor-not-allowed"
            rows={1}
          />
          
          <button disabled={disabled} className="p-2 text-cyber-foreground/50 hover:text-cyber-cyan transition-colors shrink-0">
            <Mic className="w-6 h-6" />
          </button>
        </div>
        
        <button 
          onClick={handleSend}
          disabled={disabled || !text.trim()} 
          className="p-3 rounded-xl bg-cyber-cyan text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all shrink-0 pt-3 pb-3 disabled:opacity-50 disabled:hover:bg-cyber-cyan disabled:hover:shadow-none"
        >
          <Send className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
}
