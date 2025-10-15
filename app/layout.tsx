import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ghosh Travels - Himalayan Tours & Car Rentals',
  description: 'Explore the breathtaking landscapes of the Himalayas with Ghosh Travels. Offering customized tour packages and car rentals for an unforgettable experience.',
  keywords: 'Himalayan tours, car rentals, Ghosh Travels, adventure, travel',
  authors: [{ name: 'Ghosh Travels' }],
  icons: {
    icon: [
      { url: '/icon-32x32.svg', type: 'image/svg+xml' },
      { url: '/icon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/icon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/icon-32x32.svg',
  },
  openGraph: {
    title: 'Ghosh Travels - Himalayan Tours & Car Rentals',
    description: 'Explore the breathtaking landscapes of the Himalayas with Ghosh Travels.',
    url: 'https://ghosh-travels.vercel.app/',
    siteName: 'Ghosh Travels',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-dark-text antialiased`}>
        {children}
      </body>
    </html>
  )
}
