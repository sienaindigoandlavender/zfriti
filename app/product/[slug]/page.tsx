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
  return { title: `${prod.name} \u2014 ${prod.subtitle}`, description: prod.description.slice(0, 155) + '...' };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const prod = getProductBySlug(params.slug);
  if (!prod) notFound();
  const cat = prod.category;
  const related = cat.products.filter(p => p.slug !== prod.slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <div className="pt-36 max-w-[1400px] mx-auto px-6 md:px-12">
          <Link href={`/category/${cat.slug}`} className="inline-block text-[14px] font-light tracking-wide text-ink/30 hover:text-ink transition-colors mb-12">
            \u2190 {cat.name}
          </Link>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Product image — light background with category accent */}
            <div className="aspect-square flex items-center justify-center bg-warm-white relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: cat.color }} />
              <div className="text-center">
                <div className="text-[12px] tracking-[0.3em] font-light text-ink/20 mb-4">ZFRITI</div>
                <div className="text-5xl md:text-6xl font-light" style={{ color: cat.color }}>{prod.name}</div>
                <div className="text-[14px] font-light text-ink/30 italic mt-3">{prod.subtitle}</div>
              </div>
            </div>

            <div className="md:pt-4">
              <p className="text-[14px] tracking-[0.12em] font-light italic mb-5" style={{ color: cat.color }}>
                {cat.name}
              </p>
              <h1 className="text-5xl md:text-6xl font-normal text-ink mb-3 leading-[1.05]">{prod.name}</h1>
              <p className="text-2xl font-light text-ink/40 italic mb-10">{prod.subtitle}</p>
              <p className="text-[17px] font-light text-ink-light leading-[1.9] mb-12">{prod.description}</p>

              <div className="mb-10">
                <span className="text-3xl font-light text-ink">\u20AC{prod.price}</span>
                <span className="text-[15px] font-light text-ink/30 ml-3">{prod.weight}</span>
              </div>

              <button className="w-full py-5 text-[15px] tracking-[0.12em] font-light transition-colors" style={{ backgroundColor: cat.color, color: 'white' }}>
                Add to cart
              </button>

              <div className="border-t border-sand pt-8 mt-10 space-y-4">
                {prod.conservation && (
                  <div className="flex justify-between">
                    <span className="text-[14px] font-light text-ink/30 italic">Storage</span>
                    <span className="text-[15px] font-light text-ink text-right max-w-[60%]">{prod.conservation}</span>
                  </div>
                )}
              </div>

              {prod.ingredients && (
                <div className="mt-8 border-t border-sand pt-8">
                  <p className="text-[14px] italic text-ink/30 font-light mb-3">Ingredients</p>
                  <p className="text-[15px] font-light text-ink-light leading-relaxed">{prod.ingredients}</p>
                </div>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-28 mb-20">
              <p className="text-[14px] tracking-[0.2em] text-ink/30 font-light mb-12 italic text-center">
                Also in {cat.name}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-sand">
                {related.map(r => (
                  <Link key={r.slug} href={`/product/${r.slug}`} className="group bg-white hover:bg-warm-white transition-colors p-8 flex flex-col justify-between min-h-[200px]">
                    <div>
                      <h3 className="text-xl font-normal text-ink mb-1">{r.name}</h3>
                      <p className="text-[13px] font-light italic" style={{ color: cat.color }}>{r.subtitle}</p>
                    </div>
                    <p className="text-[14px] font-light text-ink/40">{r.weight} · \u20AC{r.price}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
