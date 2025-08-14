'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

import { useTranslations } from 'next-intl'

export default function CTASection() {

  const t = useTranslations('cta')
  const benefits = [
    t('trial'),
    t('noFees'),
    t('cancel'),
    t('support')
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            {t('title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            {t('description')}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up animation-delay-600">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-blue-100 hover:text-white transition-colors group">
                <CheckCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group"
            >
              {t('startTrial')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('scheduleDemo')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
