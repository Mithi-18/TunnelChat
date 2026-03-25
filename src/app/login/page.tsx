'use client';

import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      console.error('Error logging in:', error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative p-4">
      <ParticleBackground />
      
      <GlassCard className="w-full max-w-md p-8 relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-cyber-cyan blur-[10px] opacity-70" />
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyber-darker border-2 border-cyber-cyan shadow-[0_0_20px_rgba(0,240,255,0.4)] mb-6">
            <span className="font-orbitron font-black text-4xl text-cyber-cyan text-glow-cyan">T</span>
          </div>
          <h1 className="font-orbitron text-3xl font-bold text-white mb-2 tracking-wider">
            TUNNEL<span className="text-cyber-cyan">CHAT</span>
          </h1>
          <p className="text-cyber-foreground/60">Messages through the digital tunnel.</p>
        </div>

        <div className="space-y-6">
          <NeonButton 
            onClick={handleGoogleLogin} 
            disabled={isLoading}
            className="w-full"
            color="cyan"
            variant="outline"
          >
            {isLoading ? (
              <span className="animate-pulse">Accessing Mainframe...</span>
            ) : (
              <>
                <Terminal className="w-5 h-5" />
                <span>Initialize Google Auth</span>
              </>
            )}
          </NeonButton>
          
          <div className="text-center text-xs text-cyber-foreground/40 mt-8">
            <p>Accessing the grid requires biometric or OAuth verification.</p>
            <p className="mt-1">By continuing, you agree to the Neural Network Terms.</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
