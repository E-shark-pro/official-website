import { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import CTASection from '@/components/cta-section'
import TestimonialsSection from '@/components/testimonials-section'
import StatsSection from '@/components/stats-section'

export const metadata: Metadata = {
  title: 'E Shark - LMS Platform for Educators | Sell Courses Online',
  description: 'Transform your teaching into a profitable business with E Shark LMS. Create, sell, and manage online courses with AI-powered tools, student management, and more.',
  keywords: 'LMS platform, online course creation, sell courses online, educator tools, student management, AI teaching tools, e-learning platform',
  openGraph: {
    title: 'E Shark - LMS Platform for Educators',
    description: 'Transform your teaching into a profitable business with E Shark LMS',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
