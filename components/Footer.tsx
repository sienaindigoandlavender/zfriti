import Link from 'next/link';
import { CATEGORIES } from '@/lib/products';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div>
            <div className="text-2xl tracking-[0.35em] font-normal mb-4">ZFRITI</div>
            <div className="text-[14px] font-light text-white/60 leading-relaxed">
              Fhal Zefriti, Médina<br />
              Marrakech, Maroc
            </div>
          </div>

          <div className="flex gap-20">
            <div>
              <div className="text-[14px] font-medium text-white/50 mb-5 tracking-wide">La Boutique</div>
              {CATEGORIES.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="block text-[14px] font-light text-white/70 mb-2.5 hover:text-white transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            <div>
              <div className="text-[14px] font-medium text-white/50 mb-5 tracking-wide">La Maison</div>
              {[
                { label: 'Notre histoire', href: '/story' },
                { label: 'Instagram', href: '#' },
              ].map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-[14px] font-light text-white/70 mb-2.5 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-16 pt-6 flex flex-col md:flex-row justify-between">
          <div className="text-[13px] font-light text-white/40">© 2026 Zfriti · Marrakech</div>
          <div className="text-[13px] font-light italic text-white/40">Épicerie fine</div>
        </div>
      </div>
    </footer>
  );
}
