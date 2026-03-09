import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Browse the complete Zfriti catalogue. Spice blends, herbs, chilli & harissa, preserves, honey, and fine groceries from the Marrakech medina.',
};

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-[600px] mb-20">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink mb-5 leading-tight">The Shop</h1>
          <p className="font-serif text-base font-light text-ink-light leading-relaxed italic">
            Five families. Each has its colour, its season, its logic. Together, they form a complete pantry.
          </p>
        </div>

        {CATEGORIES.map(cat => (
          <section key={cat.slug} className="mb-24">
            <div className="flex items-baseline gap-4 mb-3">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
              <Link href={`/category/${cat.slug}`} className="font-serif text-3xl font-normal text-ink hover:opacity-70 transition-opacity">
                {cat.name}
              </Link>
            </div>
            <p className="text-sm font-light text-gray-400 ml-[26px] mb-8">{cat.tagline}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
              {cat.products.map(prod => (
                <Link
                  key={prod.slug}
                  href={`/product/${prod.slug}`}
                  className="group bg-[#FAFAF8] hover:bg-opacity-50 transition-colors p-8 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />
                  <div>
                    <h3 className="font-serif text-lg font-normal text-ink mb-1 leading-snug">{prod.name}</h3>
                    <p className="text-[11px] font-light uppercase tracking-[0.1em]" style={{ color: cat.color }}>{prod.subtitle}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-light text-gray-400">{prod.weight}</span>
                    <span className="font-serif text-sm text-ink">€{prod.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
