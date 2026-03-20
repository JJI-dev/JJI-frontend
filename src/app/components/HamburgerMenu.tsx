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
    { label: 'PROJECT RQUEST', href: 'https://request.jji.kr' },
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
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
      }}
    >
      <div className="h-full flex flex-col">
        {/* Close Button */}
        <div className="flex justify-end p-6 md:p-8">
          <button 
            onClick={onClose}
            className="w-15 h-15 md:w-15 md:h-15 rounded-full border-1 border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            aria-label="Close menu"
          >
             <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.5" fill="white" stroke="black" strokeWidth="1"/>
              <rect x="23.7773" y="22.362" width="20" height="2" transform="rotate(45 23.7773 22.362)" fill="black"/>
              <rect x="22.3633" y="36.5042" width="20" height="2" transform="rotate(-45 22.3633 36.5042)" fill="black"/>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 flex flex-col justify-center px-6 md:px-20">
          {menuItems.map((item, index) => (
            <div key={item.href} className="my-2 md:my-1">
              {item.href.startsWith('http') || item.href.startsWith('mailto:') ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`block text-right text-4xl md:text-5xl lg:text-6xl font-normal py-4 hover:opacity-60 transition-all duration-300 ${
                    isOpen ? 'animate-slideIn' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`block text-right text-4xl md:text-5xl lg:text-6xl font-normal py-4 hover:opacity-60 transition-all duration-300 ${
                    isOpen ? 'animate-slideIn' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              )}
              {index < menuItems.length - 1 && <div className="border-t border-black mt-4"></div>}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="px-6 md:px-20 py-12 md:py-16 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12">
            {contactInfo.map((contact) => (
              <div key={contact.email} className="text-right w-full md:w-auto">
                <div className="flex items-center justify-end gap-2 text-lg md:text-xl text-gray-400 mb-2">
                  <span>{contact.label}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" opacity="0.4">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#222" strokeWidth="2"/>
                  </svg>
                </div>
                <a href={`mailto:${contact.email}`} className="text-2xl md:text-3xl lg:text-4xl font-medium hover:underline">
                  {contact.email}
                </a>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="flex justify-center md:justify-end items-center gap-6 mt-12">
            <a href="#" className="hover:opacity-60 transition-opacity">
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none">
                <rect x="3.875" y="3.75" width="22.5" height="22.5" stroke="#222" strokeWidth="2" rx="4"/>
                <circle cx="23.25" cy="7.5" r="1.5" fill="#222"/>
                <circle cx="15.5" cy="15" r="5" stroke="#222" strokeWidth="2"/>
              </svg>
            </a>
            <span className="text-2xl md:text-3xl">B</span>
            <span className="text-2xl md:text-3xl">B</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}