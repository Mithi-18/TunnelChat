import { useState, useEffect, useCallback } from 'react';
import { usePeer } from '@/components/providers/PeerProvider';
import type { DataConnection } from 'peerjs';
import { Message } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export function useChatManager(remotePeerId: string) {
  const { peer, myPeerId, connectToPeer } = usePeer();
  const [messages, setMessages] = useState<Message[]>([]);
  const [connection, setConnection] = useState<DataConnection | null>(null);
  const [status, setStatus] = useState<'connecting' | 'connected' | 'disconnected'>('disconnected');

  // Load from localStorage on mount
  useEffect(() => {
    if (!remotePeerId) return;
    try {
      const saved = localStorage.getItem(`chat_${remotePeerId}`);
      if (saved) setMessages(JSON.parse(saved));
    } catch (e) {
      console.error('Error loading history:', e);
    }
  }, [remotePeerId]);

  // Save to localStorage on change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(`chat_${remotePeerId}`, JSON.stringify(messages));
    }
  }, [messages, remotePeerId]);

  // Setup connection handlers
  const setupConnection = useCallback((conn: DataConnection) => {
    setConnection(conn);
    
    conn.on('open', () => {
      setStatus('connected');
    });

    conn.on('data', (data: any) => {
      // Received a message
      if (data.type === 'message') {
        setMessages(prev => [...prev, data.message]);
      }
    });

    conn.on('close', () => {
      setStatus('disconnected');
      setConnection(null);
    });

    conn.on('error', (err) => {
      console.error('Connection error:', err);
      setStatus('disconnected');
    });
  }, []);

  // Outgoing connection attempt
  useEffect(() => {
    if (!peer || !remotePeerId || connection) return;

    setStatus('connecting');
    const conn = connectToPeer(remotePeerId);
    if (conn) setupConnection(conn);

  }, [peer, remotePeerId, connectToPeer, connection, setupConnection]);

  // Incoming connection listener
  useEffect(() => {
    if (!peer) return;

    const handleConnection = (conn: DataConnection) => {
      if (conn.peer === remotePeerId) {
        setupConnection(conn);
      }
    };

    peer.on('connection', handleConnection);

    return () => {
      peer.off('connection', handleConnection);
    };
  }, [peer, remotePeerId, setupConnection]);

  const sendMessage = (content: string, type: Message['type'] = 'text') => {
    if (!connection || status !== 'connected' || !myPeerId) return;

    const msg: Message = {
      id: uuidv4(),
      chat_id: remotePeerId,
      sender_id: myPeerId,
      content,
      type,
      is_edited: false,
      status: 'sent',
      created_at: new Date().toISOString()
    };

    // Update locally
    setMessages(prev => [...prev, msg]);

    // Send to peer
    connection.send({ type: 'message', message: msg });
  };

  return { messages, status, sendMessage };
}
