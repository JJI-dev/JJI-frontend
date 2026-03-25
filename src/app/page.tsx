'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible,  setVisible]  = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white relative overflow-x-hidden" style={{ display: 'flex', minHeight: '100vh' }}>
      <Header onMenuToggle={() => setMenuOpen(p => !p)} isMenuOpen={menuOpen} />

      <main
        ref={mainRef}
        className="max-w-[1920px] mx-auto"
        style={{
          paddingTop: '80px',
          paddingLeft: 'var(--px)',
          paddingRight: 'var(--px)',
          flex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Navigation Section */}
        <div className="min-h-[calc(100vh-24rem)] flex items-center">

          {/* 모바일: 1컬럼 세로 스택 / 데스크탑: 4컬럼 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">

            {/* Column 1: ABOUT / PORTFOLIO */}
            <div
              className="flex flex-col gap-1"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s',
              }}
            >
              <Link href="/about" className="text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                ABOUT
              </Link>
              <Link href="/portfolio" className="text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                PORTFOLIO
              </Link>
            </div>

            {/* Column 2: MO + Services */}
            <div
              className="space-y-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s',
              }}
            >
              <a href="https://mo.jji.kr" target="_blank" rel="noopener noreferrer"
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                MO
              </a>
              <ul className="space-y-1 text-base md:text-xl lg:text-2xl text-gray-400">
                <li>Web</li>
                <li>Mobile</li>
                <li>Admin</li>
              </ul>
            </div>

            {/* Column 3: NE + Services */}
            <div
              className="space-y-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.19s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.19s',
              }}
            >
              <a href="https://ne.jji.kr" target="_blank" rel="noopener noreferrer"
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                NE
              </a>
              <ul className="space-y-1 text-base md:text-xl lg:text-2xl text-gray-400">
                <li>3D</li>
                <li>Illustration</li>
                <li>Graphics</li>
                <li>Video</li>
                <li>Design</li>
              </ul>
            </div>

            {/* Column 4: PROJECT REQUEST / SPACE / CAREER */}
            <div
              className="flex flex-col gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1) 0.26s, transform 0.65s cubic-bezier(0.22,1,0.36,1) 0.26s',
              }}
            >
              <a href="https://request.jji.kr" target="_blank" rel="noopener noreferrer"
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                PROJECT REQUEST
              </a>
              <div className="flex gap-8 sm:gap-12 lg:gap-24 pb-4 lg:pb-0">
                <a href="https://space.jji.kr" target="_blank" rel="noopener noreferrer"
                  className="block text-2xl md:text-2xl lg:text-2xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                  SPACE
                </a>
                <a href="https://career.jji.kr" target="_blank" rel="noopener noreferrer"
                  className="block text-2xl md:text-2xl lg:text-2xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity leading-tight cursor-pointer">
                  CAREER
                </a>
              </div>
            </div>

          </div>
        </div>

        <Footer />
      </main>

      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* 전체 페이지(body)의 스크롤바를 숨기는 글로벌 CSS 추가 */}
      <style jsx global>{`
        body {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}