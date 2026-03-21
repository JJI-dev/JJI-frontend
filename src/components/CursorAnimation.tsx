'use client'

import { useEffect, useRef } from 'react'

export default function CursorAnimation() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnterHover = () => {
      dot.classList.add('hovered')
      ring.classList.add('hovered')
    }
    const onLeaveHover = () => {
      dot.classList.remove('hovered')
      ring.classList.remove('hovered')
    }
    const onEnterDark = () => {
      dot.classList.add('on-dark')
      ring.classList.add('on-dark')
    }
    const onLeaveDark = () => {
      dot.classList.remove('on-dark')
      ring.classList.remove('on-dark')
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    const addListeners = () => {
      document.querySelectorAll<Element>('a, button, [role="button"], .work-item').forEach(el => {
        el.addEventListener('mouseenter', onEnterHover)
        el.addEventListener('mouseleave', onLeaveHover)
      })
      document.querySelectorAll<Element>('.nav-overlay-panel').forEach(el => {
        el.addEventListener('mouseenter', onEnterDark)
        el.addEventListener('mouseleave', onLeaveDark)
      })
    }

    setTimeout(addListeners, 500)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
