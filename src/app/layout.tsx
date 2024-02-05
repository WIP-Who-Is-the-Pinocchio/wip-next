import type { Metadata } from 'next';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WIP',
  description: '대한민국 국회의원 공약이행률 순위',
  icons: {
    icon: '/wipLogo.svg',
  },
  openGraph: {
    title: 'WIP',
    description: '대한민국 국회의원 공약이행률 순위',
    url: 'https://k-pinocchio.co.kr/',
    siteName: 'WIP',
    images: [
      {
        url: 'https://i.ibb.co/QFXpVNQ/wip-meta.png',
        width: 1200,
        height: 671,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">{children}</body>
    </html>
  );
}
