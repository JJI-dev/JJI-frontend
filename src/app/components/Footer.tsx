'use client';

import React, { useState, useEffect } from 'react';

const KoreanTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateKoreanTime = () => {
      const now = new Date();
      const koreanTime = new Intl.DateTimeFormat('ko-KR', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(koreanTime.replace(/:/g, ' : '));
    };

    updateKoreanTime();
    const interval = setInterval(updateKoreanTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <p className="text-lg md:text-xl lg:text-2xl font-light tracking-tight">{currentTime}</p>;
};

const BottomLogo = () => {
  return (
    <div className="relative -mx-4 md:-mx-12 overflow-hidden">
      <div className="w-full" style={{ transform: 'translateY(50px)' }}>
        <svg viewBox="0 0 1920 173" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <g clipPath="url(#clip0_143_25)">
            <path d="M1894.75 248.5C1757.9 248.5 1698.75 209.65 1698.75 124.25C1698.75 38.85 1757.9 0 1894.75 0C2031.6 0 2090.75 38.85 2090.75 124.25C2090.75 209.65 2031.6 248.5 1894.75 248.5ZM1894.75 187.6C1990.3 187.6 2018.3 170.45 2018.3 124.25C2018.3 78.05 1990.3 60.9 1894.75 60.9C1798.85 60.9 1769.8 78.05 1769.8 124.25C1769.8 170.45 1798.85 187.6 1894.75 187.6Z" fill="black"/>
            <path d="M1282.22 243.6H1211.17V4.90015H1297.62L1440.42 185.15L1582.87 4.90015H1667.92V243.6H1596.87V89.2502L1475.42 243.6H1403.67L1282.22 89.2502V243.6Z" fill="black"/>
            <path d="M1176.94 243.6H858.44V4.90015H1176.94V60.5502H929.49V100.1H1170.29V145.95H929.49V187.95H1176.94V243.6Z" fill="black"/>
            <path d="M534.373 243.6H463.323V4.90015H544.523L749.623 166.25V4.90015H820.673V243.6H741.223L534.373 79.4501V243.6Z" fill="black"/>
            <path d="M425.682 243.6H354.632V4.90015H425.682V243.6Z" fill="black"/>
            <path d="M170.515 187.95C236.315 187.95 249.265 171.85 249.265 136.85V4.90015H320.315V137.2C320.315 205.8 285.665 248.85 172.965 248.85C137.265 248.85 102.965 243.95 76.3652 235.2L92.4652 177.45C115.915 184.45 147.415 187.95 170.515 187.95Z" fill="black"/>
            <path d="M-76.6039 187.95C-10.8039 187.95 2.14612 171.85 2.14612 136.85V4.90015H73.1961V137.2C73.1961 205.8 38.5461 248.85 -74.1539 248.85C-109.854 248.85 -144.154 243.95 -170.754 235.2L-154.654 177.45C-131.204 184.45 -99.7039 187.95 -76.6039 187.95Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0_143_25">
              <rect width="1920" height="176" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'X (MO)', href: '#' },
    { name: 'X (NE)', href: '#' },
    { name: 'Instagram (MO)', href: '#' },
    { name: 'Instagram (NE)', href: '#' }
  ];

  return (
    <footer>
      <div className="border-t border-black mb-8 md:mb-12"></div>
      
      {/* Footer Info - 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
        {/* Column 1: Contact */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 tracking-tight">want to see our work?</h4>
          <a href="mailto:contact@jji.kr" className="text-lg md:text-xl lg:text-2xl font-light hover:underline tracking-tight">
            contact@jji.kr
          </a>
        </div>

        {/* Column 2: Korea Time */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 tracking-tight">KOREA</h4>
          <KoreanTime />
        </div>

        {/* Column 3: Creator */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 tracking-tight">Creator</h4>
          <p className="text-lg md:text-xl lg:text-2xl font-light tracking-tight">JO YEJIN</p>
        </div>

        {/* Column 4: Links */}
        <div>
          <h4 className="text-lg md:text-xl lg:text-2xl font-medium mb-2 tracking-tight">LINK</h4>
          <div className="text-lg md:text-xl lg:text-2xl font-light space-y-1">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="block hover:underline tracking-tight">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-lg md:text-xl lg:text-2xl font-medium mb-8 tracking-tight">
        © COPYRIGHT 2026 JJI WORKS<br />ALL RIGHT RESERVED
      </div>

      <BottomLogo />
    </footer>
  );
}