import '@/styles/globals.scss';
import { yapari, kollektif } from '@/styles/fonts';
import Signature from '@/components/Signature';
import dynamic from 'next/dynamic';
import { Preload } from '../preload';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Theme } from '@/utils/themes';
import { getThemes } from '@/lib/sanity/queries';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { VisualEditingControls } from '@/components/VisualEditingControls';
import { baseUrl } from '@/lib/env';

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  keywords: [
    'Ruben',
    'Panzich',
    'Rubeanie',
    'Portfolio',
    'About',
    'Links',
    'Contact',
    'Artist',
    'Developer'
  ],
  authors: [{ name: 'Ruben Panzich', url: 'https://www.ruben-p.com' }],
  other: {
    'darkreader-lock': true
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
  colorScheme: 'dark',
  viewportFit: 'cover',
  interactiveWidget: 'overlays-content'
};

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  const themes = await getThemes();
  return (
    <html lang='en' className={`${yapari.variable} ${kollektif.variable}`}>
      <body>
        <Preload />
        <Signature />
        <Suspense>
          <Theme themes={themes} />
          <Navbar />
          <main>{children}</main>
          <Scene
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none'
            }}
          />
          <Footer />
        </Suspense>
        <Analytics />
        <SpeedInsights />
        <VisualEditingControls />
      </body>
    </html>
  );
}
