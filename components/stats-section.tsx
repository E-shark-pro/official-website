'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, Users, BookOpen, DollarSign } from 'lucide-react'
import { useTranslations } from 'next-intl';


function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {

  const t = useTranslations('stats')

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: '+',
      label: t('educators'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: BookOpen,
      value: 50000,
      suffix: '+',
      label: t('courses'),
      color: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Users,
      value: 500000,
      suffix: '+',
      label: t('students'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: DollarSign,
      value: 2000000,
      suffix: '+',
      label: t('revenue'),
      color: 'text-orange-600 dark:text-orange-400'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-110 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 dark:bg-white/5 rounded-2xl group-hover:bg-white/20 dark:group-hover:bg-white/10 transition-all duration-300 group-hover:rotate-12">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className={`text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-orange-200 transition-colors  `}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className={`text-blue-100 dark:text-blue-200 text-sm lg:text-base group-hover:text-white transition-colors  `}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
