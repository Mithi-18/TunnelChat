'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type Peer from 'peerjs';
import type { DataConnection } from 'peerjs';
import { useSession } from 'next-auth/react';

interface PeerContextType {
  peer: Peer | null;
  myPeerId: string | null;
  connectToPeer: (id: string) => DataConnection | null;
}

const PeerContext = createContext<PeerContextType>({
  peer: null,
  myPeerId: null,
  connectToPeer: () => null,
});

export const usePeer = () => useContext(PeerContext);

export default function PeerProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const [peer, setPeer] = useState<Peer | null>(null);
  const [myPeerId, setMyPeerId] = useState<string | null>(null);

  useEffect(() => {
    // Only initialize peer if we have a user session
    if (!session?.user) return;
    
    // Dynamically import PeerJS because it requires window/navigator which is not available in SSR
    import('peerjs').then(({ default: Peer }) => {
      // Create a deterministic PeerID from the user's email base64 (simplified for demo)
      // Otherwise, you can just omit the ID and let PeerServer generate a random one.
      const deterministicId = btoa(session.user?.email || 'user').replace(/=/g, '');
      const newPeer = new Peer(deterministicId, {
        host: '0.peerjs.com',
        port: 443,
        secure: true,
      });

      newPeer.on('open', (id) => {
        setMyPeerId(id);
        console.log('My PeerJS ID is:', id);
      });

      // Handle generic incoming connections and store them globally if needed
      // Currently handled by specific chat instances via useChat hook
      
      setPeer(newPeer);

      return () => {
        newPeer.destroy();
      };
    });
  }, [session]);

  const connectToPeer = (id: string) => {
    if (!peer) return null;
    return peer.connect(id);
  };

  return (
    <PeerContext.Provider value={{ peer, myPeerId, connectToPeer }}>
      {children}
    </PeerContext.Provider>
  );
}
