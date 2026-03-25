import { redirect } from 'next/navigation';

export default function Home() {
  // Eventually, we'll check auth here and redirect to /login or /chat
  redirect('/chat');
}
