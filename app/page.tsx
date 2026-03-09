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
        <section className="pt-44 pb-48 px-6 md:px-12 text-center max-w-[750px] mx-auto">
          <p className="text-[14px] tracking-[0.3em] text-gray-400 font-light mb-12">
            Fhal Zefriti · Médina de Marrakech
          </p>
          <h1 className="text-6xl md:text-8xl font-light text-ink leading-[1.0] mb-10 tracking-wide">
            Épicerie fine
          </h1>
          <p className="text-xl md:text-2xl font-light text-ink-light leading-relaxed italic mb-16 max-w-[560px] mx-auto">
            Spice blends, preserves, harissa, honey &amp; syrups.<br />
            From the heart of the Marrakech medina.
          </p>
          <Link
            href="/shop"
            className="inline-block px-14 py-4 border border-ink text-[14px] tracking-[0.15em] font-light text-ink hover:bg-ink hover:text-white transition-all duration-300"
          >
            Enter the shop
          </Link>
        </section>

        {/* Category strip */}
        <section className="grid grid-cols-2 md:grid-cols-5">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative min-h-[280px] md:min-h-[320px] p-8 md:p-10 flex flex-col justify-end text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: cat.color }}
            >
              <p className="text-[12px] tracking-[0.2em] font-light text-white/60 mb-3">
                {cat.products.length} products
              </p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight mb-2">
                {cat.name}
              </h2>
              <p className="text-[14px] font-light text-white/75 leading-relaxed">
                {cat.tagline}
              </p>
            </Link>
          ))}
        </section>

        {/* Featured products */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
          <p className="text-[13px] tracking-[0.2em] text-gray-400 font-light mb-14">
            Selection
          </p>
          <div className="grid md:grid-cols-3 gap-16">
            {featured.map(({ cat, prod }) => (
              <Link key={prod.slug} href={`/product/${prod.slug}`} className="group">
                <div
                  className="h-96 mb-8 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.01]"
                  style={{ background: `linear-gradient(135deg, ${cat.color}15 0%, ${cat.color}08 100%)` }}
                >
                  <span className="text-7xl font-light opacity-15" style={{ color: cat.color }}>Z</span>
                </div>
                <p className="text-[13px] tracking-[0.12em] font-light mb-2" style={{ color: cat.color }}>
                  {cat.name}
                </p>
                <h3 className="text-[26px] font-normal text-ink mb-2">{prod.name}</h3>
                <p className="text-[15px] font-light text-gray-400">{prod.weight} · €{prod.price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* La Maison teaser */}
        <section className="bg-[#FAFAF8] py-32 px-6 md:px-12">
          <div className="max-w-[600px] mx-auto text-center">
            <p className="text-[13px] tracking-[0.2em] text-gray-400 font-light mb-10 italic">
              La Maison
            </p>
            <p className="text-2xl font-light text-ink-light leading-relaxed mb-12">
              Fhal Zefriti starts at the Koutoubia mosque and ends at the Jemaa el-Fna. The spice merchants have been here for centuries. The knowledge passes from hand to hand, the same way the spices do.
            </p>
            <Link href="/story" className="text-[14px] font-light text-ink border-b border-ink pb-1 tracking-wide hover:opacity-80 transition-opacity">
              Our story
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
