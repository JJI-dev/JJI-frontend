import type { Metadata } from 'next'
import './globals.css'
import { NavigationProvider } from './components/NavigationContext'
import Header from './components/Header'
import Navigation from './components/Navigation'
// Footer는 page.tsx로 이동하여 제거했습니다.

export const metadata: Metadata = {
  title: 'JJI.kr',
  description: 'Creative Visuals and Case Studies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="font-sans antialiased">
        <NavigationProvider>
          <Header />
          <main> {/* main 태그가 스크롤 컨테이너 역할을 합니다. */}
            {children}
          </main>
          <Navigation />
        </NavigationProvider>
      </body>
    </html>
  )
}