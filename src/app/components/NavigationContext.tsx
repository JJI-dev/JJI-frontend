'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface NavigationContextType {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <NavigationContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return context
}

