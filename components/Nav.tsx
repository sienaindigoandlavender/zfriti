'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/[0.97] backdrop-blur-md border-b border-sand' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl tracking-[0.35em] font-semibold text-ink hover:opacity-70 transition-opacity">
          ZFRITI
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: 'La Boutique', href: '/shop' },
            { label: 'La Maison', href: '/story' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-light tracking-wide text-ink-light hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
