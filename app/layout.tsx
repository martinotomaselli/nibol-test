// src/app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Carichiamo il font "Inter" da Google Fonts
const inter = Inter({ subsets: ['latin'] })

// Impostazioni SEO base per l'app
export const metadata: Metadata = {
  title: 'Nibol – Test Tecnico',
  description: 'App per prenotare spazi di lavoro',
}

// Questo layout wrappa tutte le pagine dell'app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
