'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useNavigation } from './NavigationContext'
import { useScrollPosition } from './hooks/useScrollPosition'

export default function Header() {
  const { isMenuOpen, toggleMenu } = useNavigation()
  const isTop = useScrollPosition()

  return (
    // 3. 헤더 z-index를 낮춥니다. (z-[50] -> z-[40])
    <header className="fixed top-0 left-0 right-0 z-[40] h-[60px] bg-transparent">
      <div className="h-full w-full flex items-center justify-between px-[40px]">
        {/* 로고 */}
        <Link href="/" className="flex-shrink-0" aria-label="Home">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isTop ? 1 : 0, pointerEvents: isTop ? 'auto' : 'none' }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/logo.svg" 
              alt="JJI Logo" 
              width={57} 
              height={32}
              priority 
            />
          </motion.div>
        </Link>

        {/* 메뉴 버튼: Navigation의 z-index는 z-[60]으로 유지합니다. */}
        <button
          onClick={toggleMenu}
          className="flex-shrink-0 cursor-pointer transition-opacity hover:opacity-70"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <Image 
              src="/menu-close.svg" 
              alt="Close menu" 
              width={60} 
              height={60} 
            />
          ) : (
            <Image 
              src="/menu-button.svg" 
              alt="Open menu" 
              width={42} 
              height={42} 
            />
          )}
        </button>
      </div>
    </header>
  )
}