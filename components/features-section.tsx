'use client';
import { BookOpen, Users, Brain, DollarSign, BarChart3, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from './language-provider'

export default function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: BookOpen,
      title: t('features.courseCreation'),
      description: t('features.courseCreationDesc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: Users,
      title: t('features.studentManagement'),
      description: t('features.studentManagementDesc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      icon: Brain,
      title: t('features.aiAssistant'),
      description: t('features.aiAssistantDesc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: DollarSign,
      title: t('features.revenue'),
      description: t('features.revenueDesc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    },
    {
      icon: BarChart3,
      title: t('features.analytics'),
      description: t('features.analyticsDesc'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: Shield,
      title: t('features.security'),
      description: t('features.securityDesc'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100'
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer hover:scale-105 ${feature.bgColor} ${feature.hoverColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
