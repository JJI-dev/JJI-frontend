'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative w-full h-[300px] bg-white overflow-visible border-t border-gray-200">
      <div className="h-full flex items-center px-[40px]">
        <div className="w-full overflow-visible">
          <Image
            src="/footer-text.svg"
            alt="JUNEMO"
            width={1920}
            height={176}
            className="w-full h-auto object-contain object-left"
            style={{ maxWidth: 'none', width: 'calc(100vw - 80px)' }}
            priority
          />
        </div>
      </div>
    </footer>
  )
}

