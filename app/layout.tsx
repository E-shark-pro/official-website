import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import EnhancedNavigation from '@/components/enhanced-navigation'
import Footer from '@/components/footer'
import ChatSupport from '@/components/chat-support'
import { Toaster } from '@/components/ui/toaster'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'E Shark - LMS Platform for Educators',
    template: '%s | E Shark'
  },
  description: 'Transform your teaching into a profitable business with E Shark LMS. Create, sell, and manage online courses with AI-powered tools, student management, and more.',
  keywords: 'LMS platform, online course creation, sell courses online, educator tools, student management, AI teaching tools, e-learning platform, course marketplace',
  authors: [{ name: 'E Shark Team' }],
  creator: 'E Shark',
  publisher: 'E Shark',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eshark.com',
    siteName: 'E Shark',
    title: 'E Shark - LMS Platform for Educators',
    description: 'Transform your teaching into a profitable business with E Shark LMS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'E Shark LMS Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E Shark - LMS Platform for Educators',
    description: 'Transform your teaching into a profitable business with E Shark LMS',
    creator: '@eshark',
    images: ['/og-image.jpg'],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <EnhancedNavigation />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <ChatSupport />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
