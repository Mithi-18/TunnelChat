import ChatWindow from '@/components/chat/ChatWindow';

export default async function ActiveChatPage({
  params,
}: {
  params: Promise<{ chatId: string }>;
}) {
  const resolvedParams = await params;
  
  return <ChatWindow chatId={resolvedParams.chatId} />;
}
