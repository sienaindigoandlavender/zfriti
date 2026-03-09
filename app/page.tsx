import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { CATEGORIES } from '@/lib/products';

export default function HomePage() {
  const featured = [
    { cat: CATEGORIES[0], prod: CATEGORIES[0].products[0] },
    { cat: CATEGORIES[3], prod: CATEGORIES[3].products[0] },
    { cat: CATEGORIES[4], prod: CATEGORIES[4].products[1] },
  ];

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-44 px-6 md:px-12 text-center max-w-[700px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-light mb-10">
            Fhal Zefriti · Marrakech Medina
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-ink leading-[1.05] mb-8 tracking-wide">
            The good things<br />from the medina
          </h1>
          <p className="font-serif text-lg font-light text-ink-light leading-relaxed italic mb-14 max-w-[520px] mx-auto">
            Spice blends, preserves, harissa, honey, syrups. Made in Marrakech. Delivered to your door.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-4 border border-ink text-[11px] uppercase tracking-[0.2em] font-light text-ink hover:bg-ink hover:text-white transition-all duration-300"
          >
            Discover
          </Link>
        </section>

        {/* Category strip */}
        <section className="grid grid-cols-2 md:grid-cols-5">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative min-h-[240px] md:min-h-[280px] p-8 md:p-10 flex flex-col justify-end text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: cat.color }}
            >
              <p className="text-[9px] uppercase tracking-[0.25em] font-light opacity-70 mb-3">
                {cat.products.length} products
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-light leading-tight mb-2">
                {cat.name}
              </h2>
              <p className="text-[12px] font-light opacity-80 leading-relaxed">
                {cat.tagline}
              </p>
            </Link>
          ))}
        </section>

        {/* Featured products */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-28">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-12">
            Selection
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {featured.map(({ cat, prod }) => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group">
                <div
                  className="h-80 mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${cat.color}18 0%, ${cat.color}08 100%)` }}
                >
                  <span className="font-serif text-6xl font-light opacity-20" style={{ color: cat.color }}>Z</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.15em] font-light mb-2" style={{ color: cat.color }}>
                  {cat.name}
                </p>
                <h3 className="font-serif text-[22px] font-normal text-ink mb-1">{prod.name}</h3>
                <p className="text-[13px] font-light text-gray-400">{prod.weight} · €{prod.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Story teaser */}
        <section className="bg-[#FAFAF8] py-28 px-6 md:px-12">
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-8">
              Our Story
            </p>
            <p className="font-serif text-xl font-light text-ink-light leading-relaxed mb-10">
              Fhal Zefriti is a street that runs from the Koutoubia mosque to the Jemaa el-Fna square.
              Spices have been traded here for centuries. We live on this street. We know every merchant,
              every product, every season. Zfriti is the medina in a pouch.
            </p>
            <Link href="/story" className="text-[12px] font-light text-ink border-b border-ink pb-0.5 tracking-wide hover:opacity-60 transition-opacity">
              Read more
            </Link>
          </div>
        </section>

        {/* How to order */}
        <section className="max-w-[800px] mx-auto py-28 px-6 md:px-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-12 text-center">
            Order
          </p>
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { title: 'Online', desc: 'Browse the full catalogue. Worldwide shipping from Marrakech.' },
              { title: 'WhatsApp', desc: 'Message your order directly. Same-day delivery in Marrakech.' },
              { title: 'Instagram', desc: 'Follow @zfriti for new arrivals, recipes, and behind the scenes.' },
            ].map(ch => (
              <div key={ch.title}>
                <h3 className="font-serif text-3xl font-light text-ink mb-4">{ch.title}</h3>
                <p className="text-[13px] font-light text-ink-light leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
