import { Header } from '@/components/Header';
import './globals.css';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../../font/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '포텐게임',
  description: '컨디션 최상의 중고칩 최다 보유! 포텐게임에서 인생게임 찾자!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
