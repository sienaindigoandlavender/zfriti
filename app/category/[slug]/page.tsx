import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES, getCategoryBySlug } from '@/lib/products';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return CATEGORIES.map(cat => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) return {};
  return {
    title: cat.name,
    description: `${cat.intro.slice(0, 155)}...`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <div className="pt-24" style={{ backgroundColor: cat.color }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 text-white">
            <Link href="/shop" className="inline-block text-[11px] font-light uppercase tracking-[0.15em] opacity-70 hover:opacity-100 transition-opacity mb-8">
              ← Shop
            </Link>
            <h1 className="font-serif text-5xl md:text-6xl font-light mb-4 leading-[1.05]">{cat.name}</h1>
            <p className="font-serif text-base md:text-lg font-light leading-relaxed opacity-90 max-w-[600px] italic">
              {cat.intro}
            </p>
          </div>
        </div>

        {/* Products */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {cat.products.map(prod => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group grid grid-cols-[180px_1fr] md:grid-cols-[200px_1fr] gap-8 items-start">
                <div
                  className="h-[180px] md:h-[200px] flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                  style={{ background: `linear-gradient(135deg, ${cat.color}12 0%, ${cat.color}06 100%)` }}
                >
                  <span className="font-serif text-4xl font-light opacity-15" style={{ color: cat.color }}>Z</span>
                </div>
                <div>
                  <h2 className="font-serif text-[22px] font-normal text-ink mb-1">{prod.name}</h2>
                  <p className="text-[11px] font-light uppercase tracking-[0.15em] mb-4" style={{ color: cat.color }}>
                    {prod.subtitle}
                  </p>
                  <p className="text-sm font-light text-ink-light leading-relaxed mb-4">
                    {prod.description}
                  </p>
                  <p className="text-[13px] font-light text-gray-400">{prod.weight} · €{prod.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
