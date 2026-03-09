import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Order Zfriti products online for worldwide shipping, via WhatsApp for same-day delivery in Marrakech, or pick up at Riad di Siena.',
};

export default function OrderPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 max-w-[680px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink mb-4 leading-tight">
          Order
        </h1>
        <p className="font-serif text-base font-light text-ink-light leading-relaxed italic mb-16">
          Three ways to get your products.
        </p>

        {[
          {
            title: 'Online Shop',
            subtitle: 'Worldwide shipping',
            desc: 'Browse the full catalogue. We ship from Marrakech to anywhere in the world. Spices and dry goods ship flat rate. Preserves and jars are carefully packed for long journeys.',
            cta: 'Browse the shop',
            href: '/shop',
          },
          {
            title: 'WhatsApp',
            subtitle: 'Direct order',
            desc: 'Send us your list. We prepare, pack, and deliver the same day in Marrakech. Pay on delivery or by bank transfer. Simple.',
            cta: 'Send a message',
            href: '#',
          },
          {
            title: 'At the Riad',
            subtitle: 'Pick up in person',
            desc: 'Come visit us at Riad di Siena, Fhal Zefriti, Marrakech medina. No need to order ahead — if it\'s in stock, it\'s yours. Taste before you buy.',
            cta: 'View on Google Maps',
            href: '#',
          },
        ].map((ch, i) => (
          <div key={ch.title} className="border-t border-sand py-10 grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
            <div>
              <h2 className="font-serif text-2xl font-normal text-ink mb-1">{ch.title}</h2>
              <p className="text-[12px] font-light text-gray-400">{ch.subtitle}</p>
            </div>
            <div>
              <p className="text-[15px] font-light text-ink-light leading-relaxed mb-5">
                {ch.desc}
              </p>
              <a
                href={ch.href}
                className="text-[12px] font-light text-ink border-b border-ink pb-0.5 tracking-wide hover:opacity-60 transition-opacity"
              >
                {ch.cta}
              </a>
            </div>
          </div>
        ))}

        {/* Shipping info */}
        <div className="border-t border-sand mt-8 pt-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-8">
            Shipping
          </p>
          <div className="space-y-6">
            {[
              { zone: 'Marrakech', detail: 'Same-day delivery via courier. Free on orders over 200 MAD.' },
              { zone: 'Morocco', detail: 'Amana or CTM colis. 2–4 business days. Flat rate 35 MAD.' },
              { zone: 'Europe', detail: 'DHL or La Poste. 5–8 business days. From €12.' },
              { zone: 'Rest of World', detail: 'DHL International. 7–14 business days. From €18.' },
            ].map(s => (
              <div key={s.zone} className="flex gap-8">
                <span className="text-sm font-serif font-normal text-ink w-32 flex-shrink-0">{s.zone}</span>
                <span className="text-[13px] font-light text-ink-light">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
