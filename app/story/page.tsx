import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Fhal Zefriti is one of the oldest streets in the Marrakech medina. Spices have passed through here for centuries. This is where Zfriti begins.',
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 max-w-[680px] mx-auto px-6 md:px-12">
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-8">
          Our Story
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink mb-12 leading-tight">
          A street, a pantry
        </h1>

        {[
          'Fhal Zefriti is one of the oldest streets in the Marrakech medina. It runs from the Koutoubia mosque directly to the Jemaa el-Fna square. For centuries, this has been the street where spices, herbs, and terroir products enter the old city.',
          'We live on this street. We know the merchants by first name, the seasons by what appears on the stalls, quality by nose and by touch. Zfriti is not a concept — it\'s an address.',
          'The idea is simple: take what has always been sold on Fhal Zefriti, prepare it with care, package it with respect, and deliver it to your door. No marketing, no artificial storytelling. Just the good things from the medina, prepared by hands that know.',
          'We start with spices — the Moroccan blends that every kitchen uses, and the world blends that nobody can easily find in Marrakech. Then chillies and harissa, dried herbs, seasonal preserves, honey, syrups.',
          'One day, Zfriti will be a complete pantry. For now, it\'s a beginning. A kraft pouch, a black label, and inside, something real.',
        ].map((para, i) => (
          <p key={i} className="font-serif text-[17px] font-light text-ink-light leading-[1.9] mb-7">
            {para}
          </p>
        ))}

        {/* Seasonal calendar */}
        <div className="border-t border-sand mt-16 pt-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 font-light mb-8">
            The Calendar
          </p>
          <div className="grid grid-cols-2 gap-8">
            {[
              { season: 'Spring', items: 'Roses from the Dadès Valley, fresh herbs from the Rif, orange blossom' },
              { season: 'Summer', items: 'Apricots from Midelt, prickly pears, cold drinks, nut milks' },
              { season: 'Autumn', items: 'Purple figs, quince, pomegranates, new season honey' },
              { season: 'Winter', items: 'Bitter oranges, preserved lemons, celebration spices' },
            ].map(s => (
              <div key={s.season} className="border-l-2 border-sand pl-5">
                <h3 className="font-serif text-lg font-normal text-ink mb-2">{s.season}</h3>
                <p className="text-[13px] font-light text-ink-light leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
