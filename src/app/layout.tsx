import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "@/components/ui/toaster"
import { CSPostHogProvider } from './providers'

const inter = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Refreesh',
  description: "Unisciti a noi nella rivoluzione dell'acqua di cartone promozionale!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body className={inter.className}>
        <CSPostHogProvider>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <Toaster />
        </CSPostHogProvider>
        </body>
    </html>
  )
}
