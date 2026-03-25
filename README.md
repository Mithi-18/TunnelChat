# TunnelChat — Serverless P2P Cyberpunk Messenger

![TunnelChat Preview](https://via.placeholder.com/800x400/050510/00f0ff?text=TUNNELCHAT)

TunnelChat is a 100% serverless, decentralized, peer-to-peer messaging application featuring a modern Neo-Cyberpunk aesthetic. It uses WebRTC (via PeerJS) for real-time secure communication and NextAuth.js for stateless Google authentication. **No backend database is required.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMithi-18%2FTunnelChat&env=GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET,NEXTAUTH_URL&envDescription=Add%20your%20Google%20OAuth%20credentials%20and%20NextAuth%20secrets&project-name=tunnelchat&repository-name=TunnelChat)

## Features
- 🚀 **Zero Database**: True P2P communication securely negotiated over WebRTC DataChannels.
- 🔐 **Stateless Auth**: JWT-based Google Sign-In using NextAuth.
- 💾 **Decentralized Storage**: Message history is kept strictly in your local browser (`localStorage`).
- 🎨 **Cyberpunk UI**: Glassmorphism, neon glow accents, particles, and custom scrollbars using Tailwind CSS v4.

## Quick Start (Local)

1. Clone the repository:
```bash
git clone https://github.com/Mithi-18/TunnelChat.git
cd TunnelChat
```

2. Copy the `.env.local.example` strictly to `.env.local` and add your Google Application credentials:
```bash
cp .env.local.example .env.local
```

3. Install and run:
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the Cyberpunk Terminal.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
