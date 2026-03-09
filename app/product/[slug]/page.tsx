import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES, getProductBySlug, getAllProducts } from '@/lib/products';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllProducts().map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const prod = getProductBySlug(params.slug);
  if (!prod) return {};
  return {
    title: `${prod.name} — ${prod.subtitle}`,
    description: prod.description.slice(0, 155) + '...',
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const prod = getProductBySlug(params.slug);
  if (!prod) notFound();

  const cat = prod.category;

  // Get related products from same category, excluding current
  const related = cat.products.filter(p => p.slug !== prod.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <Link
          href={`/category/${cat.slug}`}
          className="inline-block text-[11px] font-light uppercase tracking-[0.15em] text-gray-400 hover:text-ink transition-colors mb-16"
        >
          ← {cat.name}
        </Link>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Image placeholder */}
          <div
            className="aspect-square flex items-center justify-center"
            style={{ background: `linear-gradient(160deg, ${cat.color}10 0%, ${cat.color}05 100%)` }}
          >
            <div className="text-center">
              <span className="font-serif text-8xl font-light opacity-10" style={{ color: cat.color }}>Z</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:pt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] font-light mb-4" style={{ color: cat.color }}>
              {cat.name} · {prod.subtitle}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-normal text-ink mb-6 leading-[1.1]">
              {prod.name}
            </h1>
            <p className="font-serif text-base font-light text-ink-light leading-[1.9] mb-10">
              {prod.description}
            </p>

            {/* Details table */}
            <div className="border-t border-sand pt-6 mb-10 space-y-3">
              {[
                { label: 'Net weight', value: prod.weight },
                { label: 'Price', value: `€${prod.price}` },
                ...(prod.conservation ? [{ label: 'Storage', value: prod.conservation }] : []),
              ].map(row => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-[12px] font-light text-gray-400 uppercase tracking-[0.1em]">{row.label}</span>
                  <span className="text-[14px] font-light text-ink text-right max-w-[60%]">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Ingredients */}
            {prod.ingredients && (
              <div className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-400 font-light mb-2">Ingredients</p>
                <p className="text-[13px] font-light text-ink-light leading-relaxed">{prod.ingredients}</p>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex gap-3">
              <button className="flex-1 py-4 bg-ink text-white text-[11px] uppercase tracking-[0.2em] font-light hover:bg-ink-light transition-colors">
                Add to Cart
              </button>
              <Link
                href="/order"
                className="flex-1 py-4 border border-ink text-ink text-[11px] uppercase tracking-[0.2em] font-light text-center hover:bg-ink hover:text-white transition-all"
              >
                Order via WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-28 mb-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-10">
              Also in {cat.name}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {related.map(r => (
                <Link key={r.slug} href={`/product/${r.slug}`} className="group">
                  <div
                    className="h-48 mb-4 flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                    style={{ background: `linear-gradient(135deg, ${cat.color}12 0%, ${cat.color}06 100%)` }}
                  >
                    <span className="font-serif text-4xl font-light opacity-15" style={{ color: cat.color }}>Z</span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-ink mb-1">{r.name}</h3>
                  <p className="text-[11px] font-light text-gray-400">{r.weight} · €{r.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
