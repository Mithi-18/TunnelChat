'use client';

import { MessageSquare, Users, Hash, Phone, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { icon: MessageSquare, href: '/chat', label: 'Chats' },
    { icon: Users, href: '/group', label: 'Groups' },
    { icon: Hash, href: '/channel', label: 'Channels' },
    { icon: Phone, href: '/call', label: 'Calls' },
    { icon: Settings, href: '/settings', label: 'Settings' },
  ];

  return (
    <aside className="w-16 h-full glass border-r border-white/10 flex flex-col items-center py-6 justify-between shrink-0 z-10">
      <div className="flex flex-col items-center gap-8">
        <div className="w-10 h-10 rounded-xl bg-cyber-darker border border-cyber-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          <span className="font-orbitron font-bold text-cyber-cyan text-xl">T</span>
        </div>

        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-3 rounded-xl text-cyber-foreground/60 hover:text-cyber-cyan hover:bg-cyber-cyan/10 transition-all duration-300 group relative"
            >
              <item.icon className="w-6 h-6" />
              <span className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-cyber-darker border border-cyber-cyan/30 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <button className="p-3 rounded-xl text-cyber-foreground/60 hover:text-cyber-magenta hover:bg-cyber-magenta/10 transition-all duration-300 group relative">
        <LogOut className="w-6 h-6" />
        <span className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-cyber-darker border border-cyber-magenta/30 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Logout
        </span>
      </button>
    </aside>
  );
}
