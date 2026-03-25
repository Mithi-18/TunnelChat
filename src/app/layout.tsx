import type { Metadata } from 'next';
import { Orbitron, Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/providers/AuthProvider';
import PeerProvider from '@/components/providers/PeerProvider';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TunnelChat | Serverless Cyberpunk Messenger',
  description: 'Real-time serverless messaging platform with a cyberpunk aesthetic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} dark`}>
      <body className="antialiased overflow-hidden w-screen h-screen bg-cyber-dark text-cyber-foreground selection:bg-cyber-cyan selection:text-black">
        <AuthProvider>
          <PeerProvider>
            {children}
          </PeerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
