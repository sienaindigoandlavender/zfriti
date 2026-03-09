import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Boutique',
  description: 'Browse the complete Zfriti catalogue. Spice blends, herbs, chilli & harissa, preserves, honey, and fine groceries from the Marrakech medina.',
};

export default function ShopPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-48 pb-16 px-6 md:px-12 text-center bg-warm-white">
          <h1 className="text-5xl md:text-7xl font-light text-ink mb-4 tracking-wide">La Boutique</h1>
          <p className="text-lg font-light text-ink/40 italic">Five families, one pantry</p>
        </section>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          {CATEGORIES.map(cat => (
            <section key={cat.slug} className="mb-24">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <Link href={`/category/${cat.slug}`} className="text-3xl md:text-4xl font-normal text-ink hover:opacity-70 transition-opacity">
                    {cat.name}
                  </Link>
                  <span className="text-[14px] font-light text-ink/30 italic ml-2">{cat.tagline}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand">
                {cat.products.map(prod => (
                  <Link key={prod.slug} href={`/product/${prod.slug}`} className="group bg-white hover:bg-warm-white transition-colors p-8 md:p-10 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: cat.color }} />
                    <div>
                      <h3 className="text-xl font-normal text-ink mb-1 leading-snug">{prod.name}</h3>
                      <p className="text-[13px] font-light italic" style={{ color: cat.color }}>{prod.subtitle}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-[13px] font-light text-ink/40">{prod.weight}</span>
                      <span className="text-[15px] text-ink">€{prod.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
