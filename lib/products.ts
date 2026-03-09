export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  weight: string;
  price: string;
  description: string;
  ingredients?: string;
  conservation?: string;
}

export interface Category {
  slug: string;
  name: string;
  color: string;
  tagline: string;
  intro: string;
  products: Product[];
}

export const CATEGORIES: Category[] = [
  {
    slug: 'spices',
    name: 'Spices',
    color: '#C4652A',
    tagline: 'The blends — warmth and depth',
    intro: 'Every blend is a recipe. Not a list of ingredients, but a balance built over generations by cooks who never wrote anything down. Ras el Hanout alone can contain twenty-seven spices, each one measured by hand, each merchant\'s version slightly different.',
    products: [
      { slug: 'ras-el-hanout', name: 'Ras el Hanout', subtitle: 'The blend of blends', weight: '100g', price: '8.50', description: 'Twenty-seven spices. Every merchant on Fhal Zefriti has their own recipe. This one uses long pepper, rose buds, nutmeg, cardamom, ginger — all ground by hand. The name means "head of the shop," meaning the best the merchant has to offer.', ingredients: 'Cumin, coriander, turmeric, paprika, black pepper, ginger, cardamom, cinnamon, nutmeg, clove, rose petals, long pepper, mace, allspice, fennel seed, star anise, galangal, cubeb pepper, ash berries, orris root, monk\'s pepper, grains of paradise, nigella, lavender, white pepper, cayenne, fenugreek', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'mrouzia', name: 'Mrouzia', subtitle: 'The celebration blend', weight: '80g', price: '7.50', description: 'Ceylon cinnamon, ginger, long pepper, ras el hanout. This blend only comes out for Eid al-Adha and the grandest occasions. Lamb braised with honey, almonds, and raisins — the dish that marks the Moroccan calendar.', ingredients: 'Ceylon cinnamon, ginger, long pepper, ras el hanout, mace, turmeric, black pepper, nutmeg', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'tanjia', name: 'Tanjia', subtitle: 'The artisans\' blend', weight: '100g', price: '8.50', description: 'Cumin, saffron, ras el hanout, dried garlic. The dish of Marrakech\'s bachelors: fill the clay urn, carry it to the hammam oven, come back three hours later. The blend does the rest.', ingredients: 'Cumin, saffron threads, ras el hanout, dried garlic, salt, preserved lemon zest', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'garam-masala', name: 'Garam Masala', subtitle: 'India in Marrakech', weight: '80g', price: '9.00', description: 'Green cardamom, clove, black cumin, cinnamon, black pepper, nutmeg. Toasted then ground. For the expats who\'ve been searching for this taste for years — and for anyone who wants to cook Indian at home in Morocco.', ingredients: 'Green cardamom, clove, black cumin, Ceylon cinnamon, black pepper, nutmeg, mace', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'chinese-five-spice', name: 'Five-Spice', subtitle: 'China in Marrakech', weight: '60g', price: '9.00', description: 'Star anise, Sichuan peppercorn, Chinese cinnamon, clove, fennel. The balance of five flavours. Impossible to find in Marrakech — until now.', ingredients: 'Star anise, Sichuan peppercorn, Chinese cinnamon (cassia), clove, fennel seed', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'baharat', name: 'Baharat', subtitle: 'The Levant', weight: '80g', price: '8.50', description: 'Paprika, cumin, coriander, black pepper, clove, nutmeg, cinnamon, cardamom. The universal blend of the Middle East. Every kitchen from Beirut to Baghdad has a jar.', ingredients: 'Paprika, cumin, coriander, black pepper, clove, nutmeg, cinnamon, cardamom', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
    ]
  },
  {
    slug: 'herbs',
    name: 'Herbs',
    color: '#4A6741',
    tagline: 'Freshness and earth',
    intro: 'Herbs from the Rif mountains, the Levant, the Atlantic coast. Dried slowly, kept whole as long as possible. The fragrance lives in the leaf, not in the powder.',
    products: [
      { slug: 'zaatar', name: 'Za\'atar', subtitle: 'Thyme, sumac, sesame', weight: '80g', price: '8.50', description: 'The quintessential Levantine blend. Wild thyme, tart sumac, toasted sesame. On bread with olive oil, on labneh, on morning eggs.', ingredients: 'Wild thyme, sumac, toasted sesame, salt', conservation: 'Store in a cool, dry place. Best within 4 months.' },
      { slug: 'herbes-du-rif', name: 'Herbes du Rif', subtitle: 'Northern mountains', weight: '60g', price: '6.50', description: 'Wild oregano, thyme, rosemary, sage. Gathered in the Rif mountains, dried in the shade. For grilled meats, roasted vegetables, marinades.', ingredients: 'Wild oregano, thyme, rosemary, sage', conservation: 'Store in a cool, dry place. Best within 4 months.' },
      { slug: 'charmoula', name: 'Charmoula', subtitle: 'The fish marinade', weight: '80g', price: '7.50', description: 'Dried coriander, parsley, cumin, paprika, garlic. The base of every charmoula. Add olive oil, preserved lemon, and time.', ingredients: 'Dried coriander, dried parsley, cumin, paprika, garlic powder, salt', conservation: 'Store in a cool, dry place. Best within 4 months.' },
      { slug: 'dukkah', name: 'Dukkah', subtitle: 'Egypt', weight: '100g', price: '9.00', description: 'Hazelnuts, coriander, cumin, sesame, pepper. The Egyptian condiment: dip bread in oil, then in dukkah. Simple. Perfect.', ingredients: 'Roasted hazelnuts, coriander seed, cumin, toasted sesame, black pepper, salt', conservation: 'Store in a cool, dry place. Best within 3 months.' },
    ]
  },
  {
    slug: 'chili',
    name: 'Chilli & Harissa',
    color: '#B22234',
    tagline: 'The fire — measured or free',
    intro: 'Chilli is a precision instrument. Mild for colour, medium for warmth, hot for those who know what they\'re doing. Harissa is an art unto itself — not just heat, but smoke, depth, and character.',
    products: [
      { slug: 'harissa', name: 'Harissa', subtitle: 'House chilli paste', weight: '120g', price: '10.00', description: 'Dried red chillies, garlic, caraway, coriander seed, olive oil. Made in small batches. Smoky, deep, not just hot.', ingredients: 'Dried red chillies, garlic, caraway, coriander seed, extra virgin olive oil, salt', conservation: 'Refrigerate after opening. Best within 3 months.' },
      { slug: 'sweet-paprika', name: 'Sweet Paprika', subtitle: 'Moroccan paprika', weight: '80g', price: '5.50', description: 'The invisible foundation of Moroccan cooking. Deep red colour, round sweetness. In every tagine, every kefta, every marinade.', ingredients: 'Dried sweet red peppers, ground', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'hot-chilli', name: 'Hot Chilli', subtitle: 'For those who know', weight: '60g', price: '5.50', description: 'Ground bird\'s eye chilli. Half a teaspoon is enough. For true heat lovers.', ingredients: 'Ground bird\'s eye chilli', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
      { slug: 'smoked-chilli', name: 'Smoked Chilli', subtitle: 'Moroccan chipotle', weight: '60g', price: '7.50', description: 'Chillies dried over wood fire. Smoke first, heat second. For grilled meats and slow sauces.', ingredients: 'Wood-smoked dried chillies, ground', conservation: 'Store in a cool, dry place away from light. Best within 6 months.' },
    ]
  },
  {
    slug: 'citrus-honey',
    name: 'Citrus & Honey',
    color: '#D4920B',
    tagline: 'Sunshine in a jar',
    intro: 'The orange trees of the medina, the lemons of the Atlas, the thyme honey of the hills. What keeps best from the warm season.',
    products: [
      { slug: 'bitter-orange-marmalade', name: 'Bitter Orange', subtitle: 'Marmalade', weight: '220g', price: '12.00', description: 'Bitter oranges grow in the streets of Marrakech. We gather them in January, cut them by hand, and cook them slowly with sugar and nothing else.', ingredients: 'Bitter oranges, sugar', conservation: 'Store in a cool, dry place. Refrigerate after opening.' },
      { slug: 'preserved-lemon', name: 'Preserved Lemon', subtitle: 'Salt-cured', weight: '200g', price: '10.00', description: 'Beldi lemons, salt, time. Three months minimum. The secret ingredient of every chicken tagine.', ingredients: 'Beldi lemons, coarse sea salt', conservation: 'Keep submerged in brine. Refrigerate after opening.' },
      { slug: 'orange-blossom-syrup', name: 'Orange Blossom', subtitle: 'Syrup', weight: '250ml', price: '9.00', description: 'Distilled in Kelâat M\'Gouna. For mint tea, pastries, or simply a glass of cold water in summer.', ingredients: 'Sugar, water, orange blossom water', conservation: 'Store in a cool, dry place. Best within 12 months.' },
      { slug: 'thyme-honey', name: 'Thyme Honey', subtitle: 'Middle Atlas', weight: '250g', price: '16.00', description: 'Harvested in the Middle Atlas hills. Unheated, unfiltered. Natural crystallisation. Dense, floral, almost medicinal.', ingredients: 'Raw thyme honey', conservation: 'Store at room temperature. Do not refrigerate.' },
      { slug: 'amlou', name: 'Amlou', subtitle: 'Almond & argan paste', weight: '200g', price: '14.00', description: 'Roasted almonds, argan oil, honey. Morocco\'s peanut butter, infinitely better. At breakfast, on bread.', ingredients: 'Roasted almonds, argan oil, honey', conservation: 'Store in a cool, dry place. Stir before use.' },
    ]
  },
  {
    slug: 'fruits-roses',
    name: 'Fruits & Roses',
    color: '#6B3654',
    tagline: 'Preserving as an act of conservation',
    intro: 'Every fruit has its season, its region, its moment. Jam is a way of keeping that moment. No added pectin, no preservatives. Fruit, sugar, fire.',
    products: [
      { slug: 'fig-anise-jam', name: 'Fig & Anise', subtitle: 'Jam', weight: '220g', price: '12.00', description: 'Purple figs from Taounate, green anise. The late summer harvest. Thick, dark, fragrant.', ingredients: 'Purple figs, sugar, green anise', conservation: 'Store in a cool, dry place. Refrigerate after opening.' },
      { slug: 'rose-petal-jam', name: 'Rose', subtitle: 'Petal jam', weight: '220g', price: '14.00', description: 'Rose petals from the Dadès Valley. Gathered in May, cooked the same day. Pale pink, intense perfume.', ingredients: 'Damask rose petals, sugar, lemon juice', conservation: 'Store in a cool, dry place. Refrigerate after opening.' },
      { slug: 'prickly-pear-jelly', name: 'Prickly Pear', subtitle: 'Jelly', weight: '200g', price: '11.00', description: 'The fruit of the cactus. Magenta colour, delicate sweet flavour. Filtered, seedless, transparent as a jewel.', ingredients: 'Prickly pear fruit, sugar, lemon juice', conservation: 'Store in a cool, dry place. Refrigerate after opening.' },
      { slug: 'quince-paste', name: 'Quince', subtitle: 'Fruit paste', weight: '200g', price: '10.00', description: 'The Moroccan membrillo. Cooked until amber and dense. Cuts with a knife. With cheese, it\'s a dessert.', ingredients: 'Quince, sugar, lemon juice', conservation: 'Wrap tightly. Store in a cool, dry place.' },
      { slug: 'pomegranate-molasses', name: 'Pomegranate', subtitle: 'Molasses', weight: '180ml', price: '11.00', description: 'Reduced pomegranate juice. Sweet-sour, syrupy, almost black. On salads, grilled meats, labneh.', ingredients: 'Pomegranate juice, sugar, lemon juice', conservation: 'Refrigerate after opening. Best within 6 months.' },
      { slug: 'apricot-rosemary-jam', name: 'Apricot & Rosemary', subtitle: 'Jam', weight: '220g', price: '12.00', description: 'Apricots from Midelt, a branch of rosemary infused during cooking. Golden, tart, herbaceous.', ingredients: 'Apricots, sugar, fresh rosemary, lemon juice', conservation: 'Store in a cool, dry place. Refrigerate after opening.' },
    ]
  }
];

export function getAllProducts(): (Product & { category: Category })[] {
  return CATEGORIES.flatMap(cat =>
    cat.products.map(prod => ({ ...prod, category: cat }))
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}

export function getProductBySlug(slug: string): (Product & { category: Category }) | undefined {
  for (const cat of CATEGORIES) {
    const prod = cat.products.find(p => p.slug === slug);
    if (prod) return { ...prod, category: cat };
  }
  return undefined;
}
