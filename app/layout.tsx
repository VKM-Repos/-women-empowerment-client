import { cn } from '@/lib/utils';
import './globals.css';

import { Providers } from '@/lib/utils/providers';
import { Metadata } from 'next';
import { Quicksand, Sora } from 'next/font/google';
import { siteConfig } from '@/lib/config/siteConfig';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  adjustFontFallback: false,
});
const quickSand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quickSand',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: ['Women', 'Empowerment', 'Directory', 'Community'],
  authors: [
    {
      name: siteConfig.creator.name,
      url: siteConfig.creator.website,
    },
  ],
  creator: siteConfig.creator.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator.twitterId,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={cn('antialiased', sora.variable, quickSand.variable)}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
