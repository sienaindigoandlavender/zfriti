'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CATEGORIES } from '@/lib/products';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/[0.97] backdrop-blur-md' 
        : 'bg-white'
    }`}>
      {/* Top bar */}
      <div className="bg-warm-white text-center py-2 border-b border-sand">
        <p className="text-[12px] font-light tracking-wide text-ink/40 italic">
          Shipping worldwide from Marrakech
        </p>
      </div>

      {/* Main nav */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center py-5 border-b border-sand/50">
          <div className="w-24" />
          <Link href="/" className="text-center">
            <div className="text-2xl md:text-3xl tracking-[0.4em] font-semibold text-ink">ZFRITI</div>
            <div className="text-[11px] tracking-[0.35em] font-light text-ink/30 mt-0.5">MARRAKECH</div>
          </Link>
          <div className="w-24 flex justify-end gap-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/40 cursor-pointer hover:text-ink transition-colors">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink/40 cursor-pointer hover:text-ink transition-colors">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </div>
        </div>

        <nav className="flex justify-center gap-8 md:gap-12 py-3 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <Link key={cat.slug} href={`/category/${cat.slug}`} className="text-[14px] font-light tracking-wide text-ink/50 hover:text-ink transition-colors whitespace-nowrap">
              {cat.name}
            </Link>
          ))}
          <Link href="/story" className="text-[14px] font-light tracking-wide text-ink/50 hover:text-ink transition-colors whitespace-nowrap">
            La Maison
          </Link>
        </nav>
      </div>
    </header>
  );
}
