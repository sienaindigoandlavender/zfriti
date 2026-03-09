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
  return { title: cat.name, description: `${cat.intro.slice(0, 155)}...` };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug);
  if (!cat) notFound();

  return (
    <>
      <Nav />
      <main>
        <div className="pt-24" style={{ backgroundColor: cat.color }}>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 text-white">
            <Link href="/shop" className="inline-block text-[14px] font-light tracking-wide text-white/70 hover:text-white transition-opacity mb-10">
              ← La Boutique
            </Link>
            <h1 className="text-5xl md:text-7xl font-light mb-5 leading-[1.05]">{cat.name}</h1>
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/85 max-w-[600px] italic">
              {cat.intro}
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {cat.products.map(prod => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-start">
                <div
                  className="h-[180px] md:h-[220px] flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                  style={{ background: `linear-gradient(135deg, ${cat.color}12 0%, ${cat.color}06 100%)` }}
                >
                  <span className="text-5xl font-light opacity-12" style={{ color: cat.color }}>Z</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-normal text-ink mb-1">{prod.name}</h2>
                  <p className="text-[14px] font-light italic mb-5" style={{ color: cat.color }}>
                    {prod.subtitle}
                  </p>
                  <p className="text-[15px] font-light text-ink-light leading-[1.85] mb-5">
                    {prod.description}
                  </p>
                  <p className="text-[14px] font-light text-gray-400">{prod.weight} · €{prod.price}</p>
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
