import type { Metadata } from 'next'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import EnhancedNavigation from '@/components/enhanced-navigation'
import Footer from '@/components/footer'
import ChatSupport from '@/components/chat-support'
import { Toaster } from '@/components/ui/toaster'
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLocale, getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import { ThemeProvider } from '@/components/theme-provider'
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
  generator: 'Youssef Elaraby'
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
  const direction = getLangDir(locale);
  const messages1 = await getMessages()
  console.log(messages1, "messages1");
  console.log(messages, "messages");


  return (
    <html lang={locale} dir={direction} className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning >
      <body className={`${inter.className} antialiased `}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>

            <main className={`lg:pt-20 ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}>
              <EnhancedNavigation />
              {children}

            </main>
            <Footer />
            <ChatSupport />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
