import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Maison',
  description: 'Fhal Zefriti is one of the oldest streets in the Marrakech medina. Spices have passed through here for centuries.',
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-48 pb-16 px-6 md:px-12 text-center bg-warm-white">
          <p className="text-[13px] tracking-[0.3em] text-ink/30 font-light mb-8 italic">La Maison</p>
          <h1 className="text-5xl md:text-7xl font-light text-ink mb-6 tracking-wide">The street</h1>
          <p className="text-xl font-light text-ink/40 italic">Fhal Zefriti, Marrakech medina</p>
        </section>

        <div className="max-w-[680px] mx-auto px-6 md:px-12 py-20 md:py-24">
          {[
            'Fhal Zefriti starts at the Koutoubia mosque and ends at the Jemaa el-Fna. It is one of the oldest commercial streets in the Marrakech medina. The cumin arrives in sacks from Meknès. The saffron comes down from Taliouine. The rose petals come in from the Dadès Valley in May and the whole street smells like someone opened every perfume bottle at once.',
            'The spice merchants have been here for centuries. They blend ras el hanout by hand every morning \u2014 twenty-seven spices, measured by feel, every merchant\u2019s recipe slightly different. They know which cumin is from this year\u2019s harvest and which has been sitting too long. They know when the saffron is real and when it has been cut with safflower. The knowledge is not written down anywhere. It passes from hand to hand, the same way the spices do.',
            'Zfriti is a street name, not a brand name. We did not hire anyone to invent it. The merchants downstairs have been selling under it for longer than anyone can remember. We put it on a label because it is the only honest thing to call this.',
            'The idea is not complicated. Take what is already here \u2014 the spice blends, the harissa made with chillies picked by hand, the bitter oranges that fall off the trees in January \u2014 and give it the packaging it deserves. Not plastic bags with handwritten labels. Not tourist markup. A kraft pouch, a clean label, and inside, something that someone put real knowledge into.',
            'We also carry what you cannot find in Marrakech. Garam masala. Chinese five-spice. Za\u2019atar. Dukkah. The city is full of people cooking food from home \u2014 Indian, Chinese, Lebanese, Egyptian \u2014 and spending months looking for a single ingredient. That gap should not exist in a city built on the spice trade.',
            'The preserves come when the fruit comes. Fig jam in September. Quince paste when the quince turns golden. Bitter orange marmalade in the dead of winter. Rose petal confiture for exactly three weeks in May, and then it is gone until next year. No pectin. No preservatives. The fruit, the sugar, the fire, and the patience to let it cook properly. That is the whole list.',
            'We ship from the medina. The spices travel well \u2014 they have been crossing continents for a thousand years, they can handle a postal service. The preserves are packed in glass and wrapped properly. Everything leaves from the same street where it was made.',
          ].map((para, i) => (
            <p key={i} className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
              {para}
            </p>
          ))}
        </div>

        {/* Seasonal calendar — light background */}
        <section className="bg-warm-white py-24 px-6 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <p className="text-[13px] tracking-[0.3em] text-ink/30 font-light mb-6 italic text-center">The Calendar</p>
            <p className="text-xl font-light text-ink/50 italic text-center mb-16">
              What arrives when. The spices are year-round. Everything else follows the fruit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { season: 'Spring', color: '#6B3654', items: 'Damask roses from the Dadès Valley. Orange blossom distillation. Fresh herbs from the Rif. The first apricots from Midelt.' },
                { season: 'Summer', color: '#B22234', items: 'Prickly pear \u2014 magenta and delicate. Peaches. Melon. Cold drinks and nut milks.' },
                { season: 'Autumn', color: '#D4920B', items: 'Fig season, the best three weeks of the year. Quince turns gold. Pomegranates split on the branch. New thyme honey.' },
                { season: 'Winter', color: '#C4652A', items: 'Bitter oranges fall in the streets. Preserved lemon season. Mrouzia for Eid, ras el hanout in every kitchen.' },
              ].map(s => (
                <div key={s.season} className="border-l-2 pl-6" style={{ borderColor: s.color }}>
                  <h3 className="text-xl font-normal text-ink mb-3">{s.season}</h3>
                  <p className="text-[14px] font-light text-ink/50 leading-relaxed">{s.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
