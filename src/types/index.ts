export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  status: 'online' | 'offline' | 'away';
  last_seen: string;
  created_at: string;
}

export interface Chat {
  id: string;
  type: 'private' | 'group' | 'channel';
  name?: string; // used for groups/channels
  description?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  created_by: string; // admin user ID
}

export interface ChatParticipant {
  chat_id: string;
  user_id: string;
  role: 'member' | 'admin';
  joined_at: string;
  last_read_message_id?: string;
}

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  type: 'text' | 'image' | 'video' | 'file' | 'voice' | 'system';
  media_url?: string;
  file_name?: string;
  file_size?: number;
  duration?: number; // for voice
  reply_to?: string; // message ID
  is_edited: boolean;
  status: 'sent' | 'delivered' | 'read';
  created_at: string;
  updated_at?: string;
}

export interface Reaction {
  id: string;
  message_id: string;
  user_id: string;
  emoji: string;
  created_at: string;
}

export interface Call {
  id: string;
  chat_id: string;
  caller_id: string;
  receiver_id?: string; // missing for group calls
  type: 'audio' | 'video';
  status: 'initiating' | 'ongoing' | 'ended' | 'missed' | 'rejected';
  started_at: string;
  ended_at?: string;
}
