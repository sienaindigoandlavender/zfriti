import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/products';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero — light, airy */}
        <section className="pt-48 pb-44 px-6 md:px-12 text-center bg-warm-white">
          <p className="text-[14px] tracking-[0.35em] text-ink/30 font-light mb-12">
            FHAL ZEFRITI · MARRAKECH
          </p>
          <h1 className="text-6xl md:text-9xl font-light text-ink leading-[0.95] mb-10 tracking-wide">
            Épicerie fine
          </h1>
          <p className="text-xl md:text-2xl font-light text-ink/50 italic mb-16 max-w-[500px] mx-auto leading-relaxed">
            Spice blends, preserves &amp; fine groceries<br />
            from the Marrakech medina
          </p>
          <Link
            href="/shop"
            className="inline-block px-14 py-4 border border-ink text-[14px] tracking-[0.15em] font-light text-ink hover:bg-ink hover:text-white transition-all duration-300"
          >
            Enter the shop
          </Link>
        </section>

        {/* Categories — colour blocks */}
        <section className="grid grid-cols-2 md:grid-cols-5">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative min-h-[280px] md:min-h-[320px] p-8 md:p-10 flex flex-col justify-end text-white overflow-hidden transition-all duration-500"
              style={{ backgroundColor: cat.color }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-light leading-tight mb-1.5">
                  {cat.name}
                </h2>
                <p className="text-[13px] font-light text-white/80 italic">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* Featured — light background, category colour cards */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-36">
          <div className="text-center mb-20">
            <p className="text-[13px] tracking-[0.3em] text-ink/30 font-light mb-5 italic">Selection</p>
            <h2 className="text-4xl md:text-5xl font-light text-ink">Our favourites</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { cat: CATEGORIES[0], prod: CATEGORIES[0].products[0] },
              { cat: CATEGORIES[3], prod: CATEGORIES[3].products[0] },
              { cat: CATEGORIES[4], prod: CATEGORIES[4].products[1] },
            ].map(({ cat, prod }) => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group">
                <div
                  className="aspect-[3/4] flex flex-col justify-end p-10 relative overflow-hidden"
                  style={{ backgroundColor: cat.color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="relative z-10 text-white">
                    <p className="text-[12px] tracking-[0.2em] font-light text-white/70 mb-3 italic">{cat.name}</p>
                    <h3 className="text-3xl md:text-4xl font-light mb-2">{prod.name}</h3>
                    <p className="text-[15px] font-light text-white/80">{prod.weight} · €{prod.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* La Maison teaser — light sand background */}
        <section className="bg-warm-white py-28 md:py-32 px-6 md:px-12">
          <div className="max-w-[650px] mx-auto text-center">
            <p className="text-[13px] tracking-[0.3em] text-ink/30 font-light mb-10 italic">La Maison</p>
            <p className="text-2xl md:text-3xl font-light text-ink/70 leading-relaxed mb-12">
              The spice merchants have been on Fhal Zefriti for centuries. They blend ras el hanout by hand every morning. The knowledge passes from hand to hand, the same way the spices do.
            </p>
            <Link href="/story" className="inline-block px-10 py-3.5 border border-ink text-[14px] tracking-[0.12em] font-light text-ink hover:bg-ink hover:text-white transition-all duration-300">
              Our story
            </Link>
          </div>
        </section>

        {/* All categories preview */}
        <section className="py-28 md:py-36">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            {CATEGORIES.map(cat => (
              <div key={cat.slug} className="mb-16 last:mb-0">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <Link href={`/category/${cat.slug}`} className="text-2xl md:text-3xl font-normal text-ink hover:opacity-70 transition-opacity">
                      {cat.name}
                    </Link>
                  </div>
                  <Link href={`/category/${cat.slug}`} className="text-[14px] font-light text-ink/40 hover:text-ink transition-colors italic">
                    View all →
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand">
                  {cat.products.slice(0, 4).map(prod => (
                    <Link
                      key={prod.slug}
                      href={`/product/${prod.slug}`}
                      className="group bg-white p-8 flex flex-col justify-between min-h-[200px] hover:bg-warm-white transition-colors"
                    >
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
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
