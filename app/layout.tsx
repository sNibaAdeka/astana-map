import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://astana-mobility-botgarden.adyoka-sars.chatgpt.site'),
  title: 'Astana Mobility Lab — Ботанический сад',
  description: 'Рабочая карта Левого берега Астаны для проекта умных светофоров.',
  openGraph: {
    title: 'Ботанический сад — карта для умных светофоров',
    description: 'Интерактивная рабочая карта Левого берега Астаны.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ботанический сад: карта для умных светофоров' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ботанический сад — карта для умных светофоров',
    description: 'Интерактивная рабочая карта Левого берега Астаны.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
