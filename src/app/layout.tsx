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
    url: 'https://wip-korea.netlify.app/', // 도메인 변경 후 수정 필요
    siteName: 'WIP',
    // 오픈그래프용 이미지 추가 필요
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png',
    //     width: 800,
    //     height: 600,
    //   },
    // ],
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
