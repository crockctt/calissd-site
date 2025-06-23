import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-[#F7B32B]/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4 min-w-0">
          <Link href="/">
            <Image src="/Calissdlogo.PNG" alt="CaliSSD Logo" width={56} height={56} className="w-14 h-14 rounded-lg border border-[#F7B32B]/60 bg-white shadow-sm" />
          </Link>
          <span className="hidden sm:block text-2xl font-bold text-[#15304B] tracking-tight whitespace-pre leading-tight text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
            California Social
            <br />
            Security Disability
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center ml-8 flex-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-2 py-1 text-lg font-medium transition text-[#15304B] hover:text-[#F7B32B] ${pathname === link.href ? 'after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-gradient-to-r after:from-[#F7B32B] after:to-[#FFD700] after:rounded-full after:content-[""]' : ''}`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* CTA Button */}
        <div className="hidden md:flex ml-6">
          <Link href="/contact" className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#F7B32B] to-[#FFD700] text-[#15304B] font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all border border-[#F7B32B]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
            Free Consultation
          </Link>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F7B32B] ml-2"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="28" height="28" fill="none" stroke="#15304B" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#F7B32B]/30 px-4 py-4 animate-fade-in-up">
          <nav className="flex flex-col gap-4 text-lg font-semibold text-[#15304B]">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 rounded hover:bg-[#F7B32B]/10 transition ${pathname === link.href ? 'font-bold text-[#F7B32B]' : ''}`}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 inline-block px-5 py-2 rounded-full bg-gradient-to-r from-[#F7B32B] to-[#FFD700] text-[#15304B] font-semibold shadow-md border border-[#F7B32B]/60" style={{ fontFamily: 'Inter, sans-serif' }} onClick={() => setMenuOpen(false)}>
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 