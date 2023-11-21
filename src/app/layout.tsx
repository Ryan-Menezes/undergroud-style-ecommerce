import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import './globals.css'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Underground Style',
    template: '%s | Underground Style'
  },
  description: 'A melhor loja de camisas do país',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
