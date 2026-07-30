import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://hotelcostaserena.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hotel Costa Serena | Resort de Lujo Frente al Mar',
    template: '%s | Hotel Costa Serena',
  },
  description:
    'Hotel Costa Serena es un resort de lujo frente al mar. Habitaciones elegantes, gastronomía de autor, spa, actividades y promociones exclusivas. Reserva tu escapada perfecta.',
  keywords: [
    'hotel de lujo',
    'resort frente al mar',
    'hotel playa',
    'reservar hotel',
    'spa',
    'paquetes hotel y vuelo',
    'Costa Serena',
  ],
  authors: [{ name: 'Hotel Costa Serena' }],
  creator: 'Hotel Costa Serena',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    siteName: 'Hotel Costa Serena',
    title: 'Hotel Costa Serena | Resort de Lujo Frente al Mar',
    description:
      'Resort de lujo frente al mar. Habitaciones elegantes, gastronomía de autor, spa y experiencias inolvidables.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hotel Costa Serena, resort de lujo frente al mar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Costa Serena | Resort de Lujo Frente al Mar',
    description:
      'Resort de lujo frente al mar. Habitaciones elegantes, gastronomía de autor, spa y experiencias inolvidables.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f5a5e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
