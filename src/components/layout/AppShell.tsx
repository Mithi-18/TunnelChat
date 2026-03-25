'use client';

import Sidebar from './Sidebar';
import ParticleBackground from '../ui/ParticleBackground';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-full relative overflow-hidden bg-cyber-dark">
      <ParticleBackground />
      <Sidebar />
      <main className="flex-1 h-full relative z-10">
        {children}
      </main>
    </div>
  );
}
