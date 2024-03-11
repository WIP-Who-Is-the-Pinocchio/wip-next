import type { Metadata } from 'next';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' K피노키오 - 누가 공약을 지키지 않는가',
  description:
    '제22대 총선에 재출마하는 21대 국회의원들의 공약 이행률 순위와 결과',
  keywords: [
    'k피노키오',
    '공약',
    '총선',
    '선거',
    '22대',
    '21대',
    '순위',
    '국회의원',
  ],
  icons: {
    icon: '/wipLogo.svg',
  },
  verification: {
    google: 'EWUknIFTpEBvR0cghd3GS3WXt7UXtOAcAqRDlg3lcoo',
    other: {
      'naver-site-verification': 'ab6e827fd84c58e3211c89283fc7c637ac38f118',
    },
  },
  openGraph: {
    title: 'K피노키오 - 누가 공약을 지키지 않는가',
    description:
      '제22대 총선에 재출마하는 21대 국회의원들의 공약 이행률 순위와 결과',
    url: 'https://k-pinocchio.co.kr/',
    siteName: 'WIP',
    images: [
      {
        url: 'https://i.ibb.co/ys3YdhX/WIP.png',
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
