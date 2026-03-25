'use client';

import React from 'react';
import Link from 'next/link';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PORTFOLIO', href: '/portfolio' },
    { label: 'PROJECT REQUEST', href: 'https://request.jji.kr' },
    { label: 'CONTACT', href: 'mailto:contact@jji.kr' }
  ];

  const contactInfo = [
    { label: 'Art', email: 'ne@jji.kr' },
    { label: 'Product', email: 'mo@jji.kr' },
    { label: 'Project Request', email: 'contact@jji.kr' }
  ];

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
      {/* 전체를 스크롤 가능한 컨테이너로 — 모바일에서 내용 잘림 방지 */}
      <div
        className="hide-scrollbar" 
        style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}
      >

        {/* 닫기 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px var(--px)', flexShrink: 0 }}>
          <button
            onClick={onClose}
            style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid black', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            aria-label="Close menu"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line x1="1" y1="1" x2="13" y2="13" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="13" y1="1" x2="1" y2="13" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 메뉴 아이템 */}
        <nav style={{ padding: '40px var(--px)', flexShrink: 0 }}>
          {menuItems.map((item, index) => (
            <div key={item.href}>
              {item.href.startsWith('http') || item.href.startsWith('mailto:') ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ display: 'block', textAlign: 'right', fontSize: 'clamp(2rem,8vw,4rem)', fontWeight: 400, padding: '12px 0', transition: 'opacity 0.2s' }}
                  className="hover:opacity-60"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  style={{ display: 'block', textAlign: 'right', fontSize: 'clamp(2rem,8vw,4rem)', fontWeight: 400, padding: '12px 0', transition: 'opacity 0.2s' }}
                  className="hover:opacity-60"
                >
                  {item.label}
                </Link>
              )}
              {index < menuItems.length - 1 && <div style={{ borderTop: '1px solid black' }} />}
            </div>
          ))}
        </nav>

        {/* 이메일 영역 — flex-shrink:0으로 잘림 방지, 모바일 세로 스택 */}
        <div style={{ padding: '32px var(--px) 48px', flexShrink: 0, marginTop: 'auto' }}>
            <div 
              className="flex flex-row sm:flex-row justify-between" 
              style={{ gap: '24px' }}
            >
            {contactInfo.map((contact) => (
              <div key={contact.email} style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '14px', color: '#aaa', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}>
                  <span>{contact.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" opacity="0.4">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222" strokeWidth="2"/>
                  </svg>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  style={{ fontSize: 'clamp(1rem,4vw,1.75rem)', fontWeight: 500 }}
                  className="hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 스크롤바 숨김 CSS 추가됨 */}
      <style jsx>{`
        a:hover { opacity: 0.6; }
        
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}