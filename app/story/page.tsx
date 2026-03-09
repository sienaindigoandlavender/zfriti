import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Maison',
  description: 'Fhal Zefriti is one of the oldest streets in the Marrakech medina. Spices have passed through here for centuries. This is where Zfriti begins.',
};

export default function StoryPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-20 max-w-[680px] mx-auto px-6 md:px-12">
        <p className="text-[13px] tracking-[0.2em] text-gray-400 font-light mb-10 italic">
          La Maison
        </p>
        <h1 className="text-5xl md:text-6xl font-light text-ink mb-14 leading-tight">
          The street
        </h1>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          Fhal Zefriti starts at the Koutoubia mosque and ends at the Jemaa el-Fna. It is one of the oldest commercial streets in the Marrakech medina. The cumin arrives in sacks from Meknès. The saffron comes down from Taliouine. The rose petals come in from the Dadès Valley in May and the whole street smells like someone opened every perfume bottle at once.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          The spice merchants have been here for centuries. They blend ras el hanout by hand every morning — twenty-seven spices, measured by feel, every merchant&apos;s recipe slightly different. They know which cumin is from this year&apos;s harvest and which has been sitting too long. They know when the saffron is real and when it has been cut with safflower. The knowledge is not written down anywhere. It passes from hand to hand, the same way the spices do.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          Zfriti is a street name, not a brand name. We did not hire anyone to invent it. The merchants downstairs have been selling under it for longer than anyone can remember. We put it on a label because it is the only honest thing to call this.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          The idea is not complicated. Take what is already here — the spice blends, the harissa made with chillies picked by hand, the bitter oranges that fall off the trees in January — and give it the packaging it deserves. Not plastic bags with handwritten labels. Not tourist markup. A kraft pouch, a clean label, and inside, something that someone put real knowledge into.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          We also carry what you cannot find in Marrakech. Garam masala. Chinese five-spice. Za&apos;atar. Dukkah. The city is full of people cooking food from home — Indian, Chinese, Lebanese, Egyptian — and spending months looking for a single ingredient. That gap should not exist in a city built on the spice trade.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-8">
          The preserves come when the fruit comes. Fig jam in September. Quince paste when the quince turns golden. Bitter orange marmalade in the dead of winter. Rose petal confiture for exactly three weeks in May, and then it is gone until next year. No pectin. No preservatives. The fruit, the sugar, the fire, and the patience to let it cook properly. That is the whole list.
        </p>

        <p className="text-[18px] font-light text-ink-light leading-[1.9] mb-14">
          We ship from the medina. The spices travel well — they have been crossing continents for a thousand years, they can handle a postal service. The preserves are packed in glass and wrapped properly. Everything leaves from the same street where it was made.
        </p>

        {/* Seasonal calendar */}
        <div className="border-t border-sand pt-14">
          <p className="text-[13px] tracking-[0.2em] text-gray-400 font-light mb-10 italic">
            The Calendar
          </p>
          <p className="text-[16px] font-light text-ink-light leading-relaxed italic mb-12">
            What arrives when. The spices are year-round. Everything else follows the fruit.
          </p>
          <div className="grid grid-cols-2 gap-10">
            {[
              { season: 'Spring', items: 'Damask roses from the Dadès Valley. Orange blossom distillation. Fresh herbs from the Rif. The first apricots from Midelt, if the year is warm.' },
              { season: 'Summer', items: 'Prickly pear — magenta, delicate, impossible to handle without gloves. Peaches. Melon. Cold drinks and nut milks.' },
              { season: 'Autumn', items: 'Fig season, the best three weeks of the year. Quince turns from green to gold. Pomegranates split open on the branch. New season thyme honey from the Atlas.' },
              { season: 'Winter', items: 'Bitter oranges fall in the streets. Preserved lemon season. The celebration spices — mrouzia for Eid, ras el hanout in every kitchen.' },
            ].map(s => (
              <div key={s.season} className="border-l-2 border-sand pl-6">
                <h3 className="text-xl font-normal text-ink mb-3">{s.season}</h3>
                <p className="text-[15px] font-light text-ink-light leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
