import type { Metadata } from 'next';
import './globals.css';
import CursorAnimation from '@/components/CursorAnimation';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'JJI: Hub',
  description: 'Creative Studio - Design & Development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Panchang:wght@700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body style={{ letterSpacing: '-0.04em', overflowX: 'hidden' }}>
        <CursorAnimation />
        <LoadingScreen/>
        {children}
      </body>
    </html>
  );
}
