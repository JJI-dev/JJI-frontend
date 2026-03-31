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
      // z-index를 50으로 설정 (Header는 100이므로 메뉴 위에 헤더가 뜹니다)
      className={`fixed inset-0 bg-white transition-all duration-700 ease-in-out ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)', zIndex: 50 }}
    >
      <div
        className="hide-scrollbar" 
        style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        {/* ★ 메뉴 내부의 자체 닫기 버튼 영역은 삭제했습니다! (헤더 버튼이 그 역할을 대신합니다) */}

        {/* 메뉴 아이템 - padding-top을 넉넉하게 주어 헤더 영역과 겹치지 않게 합니다 */}
        <nav style={{ padding: '100px var(--px) 40px', flexShrink: 0 }}>
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

        {/* 이메일 영역 */}
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

      {/* 스크롤바 숨김 CSS */}
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