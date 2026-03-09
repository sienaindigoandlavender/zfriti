import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zfriti.com'),
  title: {
    default: 'Zfriti — Spices, Preserves & Fine Groceries from Marrakech',
    template: '%s | Zfriti'
  },
  description: 'Spice blends, artisanal preserves, harissa, honey, and fine groceries from the heart of the Marrakech medina. Sourced from Fhal Zefriti, delivered worldwide.',
  keywords: ['Moroccan spices', 'ras el hanout', 'harissa', 'Marrakech', 'artisanal preserves', 'Moroccan food', 'gourmet groceries'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zfriti.com',
    siteName: 'Zfriti',
    title: 'Zfriti — The Good Things from the Medina',
    description: 'Spice blends, preserves, harissa, honey and fine groceries from Fhal Zefriti, Marrakech.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zfriti — Spices & Preserves from Marrakech',
    description: 'Artisanal spice blends and preserves from the heart of the Marrakech medina.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
