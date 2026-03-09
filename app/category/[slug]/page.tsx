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
        <div className="pt-48 pb-16 px-6 md:px-12 bg-warm-white">
          <div className="max-w-[1400px] mx-auto">
            <Link href="/shop" className="inline-block text-[14px] font-light tracking-wide text-ink/30 hover:text-ink transition-colors mb-10">
              \u2190 La Boutique
            </Link>
            <div className="flex items-center gap-4 mb-5">
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: cat.color }} />
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05]" style={{ color: cat.color }}>{cat.name}</h1>
            </div>
            <p className="text-lg md:text-xl font-light leading-relaxed text-ink/50 max-w-[600px] italic ml-8">
              {cat.intro}
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="grid md:grid-cols-2 gap-px bg-sand">
            {cat.products.map(prod => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group bg-white hover:bg-warm-white transition-colors p-10 md:p-12 flex flex-col justify-between min-h-[280px]">
                <div>
                  <h2 className="text-2xl md:text-3xl font-normal text-ink mb-1">{prod.name}</h2>
                  <p className="text-[14px] font-light italic mb-6" style={{ color: cat.color }}>{prod.subtitle}</p>
                  <p className="text-[15px] font-light text-ink-light leading-[1.85]">{prod.description}</p>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <span className="text-[13px] font-light text-ink/30">{prod.weight}</span>
                  <span className="text-[17px] text-ink">\u20AC{prod.price}</span>
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
