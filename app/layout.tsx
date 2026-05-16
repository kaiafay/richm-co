import type { Metadata } from 'next'
import { Bebas_Neue, DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RichM Co. | Coaching & Consulting',
  description:
    'Rich McCauley — Personal Training, Sales Consulting, and Life Coaching for people who are done playing small.',
  keywords: ['personal training', 'sales consulting', 'life coaching', 'Rich McCauley', 'RichM Co'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#0a0a0a]" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
