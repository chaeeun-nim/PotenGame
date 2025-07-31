import { Header } from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

import localFont from 'next/font/local';
import MobileGnb from '@/components/Header/MobileGnb';

const pretendard = localFont({
  src: '../../font/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '포텐게임',
  description:
    '컨디션 최상의 중고칩 국내 최다보유! 최저가 신상게임과 구하기힘든 게임기기까지 모두 갖춘 포텐게임에서 인생게임을 찾아보세요!',
  keywords: [
    '중고 게임칩',
    '닌텐도',
    '닌텐도스위치',
    '플스',
    '닌텐도 중고칩',
    '플스5',
    '플스4',
    '게임중고칩',
    '닌텐도 스위치2',
    '최저가',
  ],
  authors: [
    { name: '멋쟁이 사저처럼 프론트엔드 부트캠프 13기 파이널 프로젝트 14조' },
    { name: '이도울' },
    { name: '송채은' },
    { name: '김태우' },
    { name: '배동초' },
  ],
  metadataBase: new URL('https://poten-game.vercel.app/'),
  openGraph: {
    title: '포텐게임',
    description:
      '컨디션 최상의 중고칩 국내 최다보유! 최저가 신상게임과 구하기힘든 게임기기까지 모두 갖춘 포텐게임에서 인생게임을 찾아보세요!',
    type: 'website',
    siteName: '포텐게임',
    images: [
      {
        url: '/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: '포텐게임',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <MobileGnb />
        {children}
        <Footer />
      </body>
    </html>
  );
}
