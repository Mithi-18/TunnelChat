'use client';

import { Paperclip, Send, Smile, Mic } from 'lucide-react';

export default function MessageInput() {
  return (
    <div className="p-4 border-t border-cyber-cyan/10 bg-cyber-dark/80 backdrop-blur-md">
      <div className="flex items-end gap-3 max-w-5xl mx-auto">
        <button className="p-3 rounded-xl text-cyber-foreground/60 hover:text-cyber-magenta hover:bg-cyber-magenta/10 transition-colors">
          <Paperclip className="w-5 h-5" />
        </button>
        
        <div className="flex-1 bg-cyber-darker border border-cyber-cyan/20 rounded-2xl flex items-end p-1 shadow-inner relative focus-within:border-cyber-cyan/50 focus-within:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all">
          <button className="p-2 text-cyber-foreground/50 hover:text-cyber-yellow transition-colors shrink-0">
            <Smile className="w-6 h-6" />
          </button>
          
          <textarea 
            placeholder="Type your message..."
            className="w-full max-h-32 bg-transparent text-white placeholder-cyber-foreground/40 resize-none outline-none py-3 px-2 flex-1 min-h-[48px] overflow-y-auto"
            rows={1}
          />
          
          <button className="p-2 text-cyber-foreground/50 hover:text-cyber-cyan transition-colors shrink-0">
            <Mic className="w-6 h-6" />
          </button>
        </div>
        
        <button className="p-3 rounded-xl bg-cyber-cyan text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all shrink-0 pt-3 pb-3">
          <Send className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
}
