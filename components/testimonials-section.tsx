'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { useState } from 'react'

import { useTranslations } from 'next-intl'

export default function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)


  const t = useTranslations('testimonials')
  const testimonials = [
    {
      name: t('sarah.name'),
      role: t('sarah.role'),
      content: t('sarah.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: t('michael.name'),
      role: t('michael.role'),
      content: t('michael.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: t('emily.name'),
      role: t('emily.role'),
      content: t('emily.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-200/30 dark:bg-orange-800/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`text-center mb-16 animate-fade-in-up  `}>
          <h2 className={`text-3xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6  `}>
            {t('title')}
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto  `}>
            {t('description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group ${hoveredIndex === index ? 'scale-105 -rotate-1' : ''
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className={`flex mb-4  `}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 text-yellow-400 fill-current transition-all duration-300 ${hoveredIndex === index ? 'animate-pulse scale-110' : ''
                        }`}
                    />
                  ))}
                </div>
                <p className={`text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors  `}>
                  "{testimonial.content}"
                </p>
                <div className={`flex items-center  `}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-orange-400 flex items-center justify-center text-white font-bold transition-all duration-300 ${hoveredIndex === index ? 'scale-110 rotate-12' : ''
                    }  `}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div  >
                    <div className={`font-semibold text-blue-900 dark:text-blue-100 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors  `}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors  `}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
