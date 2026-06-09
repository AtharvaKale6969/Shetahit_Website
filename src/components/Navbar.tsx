"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products & Services", href: "/products" },
    { name: "Farmers Welfare Program", href: "/farmers-welfare-program" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full relative z-50 flex flex-col">
      {/* Top Dark Green Bar */}
      <div className="bg-[#043b22] text-white py-2 px-4 sm:px-6 h-auto min-h-[40px] flex items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-end items-end sm:items-center gap-1 sm:gap-8 text-[11px] sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+91 7020692535</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>sales@shetahit.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar (White Background) */}
      <nav className="bg-white px-4 sm:px-6 shadow-md border-b border-gray-100 relative h-16 sm:h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative h-full">
          
          {/* Logo overlapping the top bar */}
          <div className="absolute -top-6 sm:-top-10 left-0 sm:left-0 bg-white rounded-t-xl rounded-b-xl p-2 sm:p-3 shadow-md z-20 flex items-center justify-center h-[90px] w-28 sm:h-[130px] sm:w-40">
            <Link href="/" className="flex items-center justify-center w-full h-full relative" onClick={() => setIsMobileMenuOpen(false)}>
              <Image 
                src="/wp-content/uploads/2023/10/Shetahit.webp" 
                alt="Shetahit Logo" 
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Spacer for logo area on desktop so flex doesn't overlap the logo */}
          <div className="w-28 sm:w-40 hidden lg:block"></div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors hover:text-[#df6c1f] ${isActive ? "text-[#df6c1f]" : "text-[#333333]"}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#043b22] ml-auto p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col z-40 max-h-[calc(100vh-100px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-6 py-4 border-b border-gray-50 transition-colors ${isActive ? "bg-[#f7f9f4] text-[#df6c1f] font-bold" : "text-[#333333] font-medium"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
