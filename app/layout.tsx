import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CustomCursor } from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SmartCart Co. | Smart Digital Cart System for Grocery Stores',
  description: 'SmartCart eliminates billing queues with a mobile-first smart shopping cart system. Real-time pricing, zero queue checkout.',
  keywords: ['smart cart', 'grocery billing', 'no queue shopping', 'retail tech', 'smart shopping cart system'],
  authors: [{ name: 'SmartCart Co.' }],
  openGraph: {
    title: 'SmartCart Co.',
    description: 'No More Queues. Just Smart Shopping.',
    type: 'website',
    url: 'https://smartcartco.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartCart Co.',
    description: 'Smart grocery cart system — zero billing queues.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://smartcartco.com' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SmartCart Co.",
              "description": "Smart Digital Cart System for grocery stores",
              "url": "https://smartcartco.com",
              "foundingDate": "2024",
              "industry": "Retail Technology"
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
