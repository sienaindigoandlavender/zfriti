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
  return { title: `${prod.name} — ${prod.subtitle}`, description: prod.description.slice(0, 155) + '...' };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const prod = getProductBySlug(params.slug);
  if (!prod) notFound();
  const cat = prod.category;
  const related = cat.products.filter(p => p.slug !== prod.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <Link
          href={`/category/${cat.slug}`}
          className="inline-block text-[14px] font-light tracking-wide text-gray-400 hover:text-ink transition-colors mb-16"
        >
          ← {cat.name}
        </Link>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div
            className="aspect-square flex items-center justify-center"
            style={{ background: `linear-gradient(160deg, ${cat.color}10 0%, ${cat.color}05 100%)` }}
          >
            <span className="text-9xl font-light opacity-10" style={{ color: cat.color }}>Z</span>
          </div>

          <div className="md:pt-8">
            <p className="text-[14px] tracking-[0.1em] font-light italic mb-5" style={{ color: cat.color }}>
              {cat.name} · {prod.subtitle}
            </p>
            <h1 className="text-5xl md:text-6xl font-normal text-ink mb-8 leading-[1.05]">
              {prod.name}
            </h1>
            <p className="text-[17px] font-light text-ink-light leading-[1.9] mb-12">
              {prod.description}
            </p>

            <div className="border-t border-sand pt-7 mb-12 space-y-4">
              {[
                { label: 'Net weight', value: prod.weight },
                { label: 'Price', value: `€${prod.price}` },
                ...(prod.conservation ? [{ label: 'Storage', value: prod.conservation }] : []),
              ].map(row => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-[14px] font-light text-gray-400 italic">{row.label}</span>
                  <span className="text-[15px] font-light text-ink text-right max-w-[60%]">{row.value}</span>
                </div>
              ))}
            </div>

            {prod.ingredients && (
              <div className="mb-12">
                <p className="text-[13px] italic text-gray-400 font-light mb-3">Ingredients</p>
                <p className="text-[15px] font-light text-ink-light leading-relaxed">{prod.ingredients}</p>
              </div>
            )}

            <button className="w-full py-5 bg-ink text-white text-[15px] tracking-[0.1em] font-light hover:bg-ink-light transition-colors">
              Add to cart
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-32 mb-24">
            <p className="text-[13px] tracking-[0.2em] text-gray-400 font-light mb-12 italic">
              Also in {cat.name}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {related.map(r => (
                <Link key={r.slug} href={`/product/${r.slug}`} className="group">
                  <div
                    className="h-56 mb-5 flex items-center justify-center group-hover:scale-[1.02] transition-transform"
                    style={{ background: `linear-gradient(135deg, ${cat.color}12 0%, ${cat.color}06 100%)` }}
                  >
                    <span className="text-4xl font-light opacity-12" style={{ color: cat.color }}>Z</span>
                  </div>
                  <h3 className="text-xl font-normal text-ink mb-1">{r.name}</h3>
                  <p className="text-[14px] font-light text-gray-400">{r.weight} · €{r.price}</p>
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
