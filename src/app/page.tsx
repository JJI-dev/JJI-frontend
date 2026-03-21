'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HamburgerMenu from '@/components/HamburgerMenu';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <Header onMenuToggle={toggleMenu} isMenuOpen={menuOpen} />

      <main className="pt-12 md:pt-16 px-4 md:px-12 max-w-[1920px] mx-auto">
        {/* Navigation Section - 4 Columns */}
        <div className="min-h-[calc(100vh-24rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
            {/* Column 1: ABOUT / PORTFOLIO */}
            <div className="flex flex-col">
              <Link href="/about" className="text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer">
                ABOUT
              </Link>
              <Link href="/portfolio" className="text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer">
                PROTFOLIO
              </Link>
            </div>

            {/* Column 2: MO + Services */}
            <div className="space-y-4">
              <a 
                href="https://mo.jji.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer"
              >
                MO
              </a>
              <ul className="space-y-1 text-lg md:text-xl lg:text-2xl text-gray-400">
                <li>Web</li>
                <li>Mobile</li>
                <li>Admin</li>
              </ul>
            </div>

            {/* Column 3: NE + Services */}
            <div className="space-y-4">
              <a 
                href="https://ne.jji.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer"
              >
                NE
              </a>
              <ul className="space-y-1 text-lg md:text-xl lg:text-2xl text-gray-400">
                <li>3D</li>
                <li>Illustration</li>
                <li>Graphics</li>
                <li>Video</li>
                <li>Design</li>
              </ul>
            </div>

            {/* Column 4: PROJECT REQUEST / SPACE / CAREER */}
            <div className="flex flex-col gap-6">
              <a 
                href="https://request.jji.kr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-4xl md:text-5xl lg:text-6xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer"
              >
                PROJECT REQUEST
              </a>
              {/* 모바일에서 Footer 구분선과 여백 확보 */}
              <div className="flex gap-24 pb-4 lg:pb-0">
                <a 
                  href="https://space.jji.kr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-4xl md:text-5xl lg:text-2xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer"
                >
                  SPACE
                </a>
                <a 
                  href="https://career.jji.kr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-4xl md:text-5xl lg:text-2xl font-medium underline decoration-2 underline-offset-4 hover:opacity-60 transition-opacity tracking-tight leading-tight cursor-pointer"
                >
                  CAREER
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <HamburgerMenu isOpen={menuOpen} onClose={toggleMenu} />
    </div>
  );
}
