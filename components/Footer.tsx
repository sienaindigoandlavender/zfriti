import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="font-serif text-xl tracking-[0.35em] font-normal mb-3">ZFRITI</div>
            <div className="text-[11px] font-light text-[#666] leading-relaxed">
              Fhal Zefriti, Médina<br />
              Marrakech, Morocco
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4 font-light">Shop</div>
              {CATEGORIES.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="block text-[12px] font-light text-[#888] mb-2 hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4 font-light">Zfriti</div>
              {[
                { label: 'Our Story', href: '/story' },
                { label: 'Order', href: '/order' },
                { label: 'Instagram', href: '#' },
                { label: 'WhatsApp', href: '#' },
              ].map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-[12px] font-light text-[#888] mb-2 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] mt-12 pt-6 flex flex-col md:flex-row justify-between">
          <div className="text-[10px] font-light text-[#555]">© 2026 Zfriti SARL · Marrakech</div>
          <div className="text-[10px] font-light text-[#555]">Spices · Preserves · Marrakech</div>
        </div>
      </div>
    </footer>
  );
}
