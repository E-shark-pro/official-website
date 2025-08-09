'use client'
// import { Metadata } from 'next'
import { Users, Target, Award, Lightbulb } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

// export const metadata: Metadata = {
//   title: 'About E Shark - Empowering Educators Worldwide',
//   description: 'Learn about E Shark\'s mission to help teachers and educators monetize their expertise through our comprehensive LMS platform.',
//   keywords: 'about E Shark, educator empowerment, online teaching platform, LMS company',
// }

function AboutContent() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className={`text-center mb-16 animate-fade-in-up ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
          <h1 className={`text-4xl md:text-6xl font-bold text-blue-900 mb-6 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
            <Target className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className={`text-2xl font-bold text-blue-900 mb-4 ${language === 'ar' ? 'font-arabic-bold text-right' : ''}`}>
              {t('about.mission')}
            </h2>
            <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {t('about.missionDesc')}
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
            <Lightbulb className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className={`text-2xl font-bold text-blue-900 mb-4 ${language === 'ar' ? 'font-arabic-bold text-right' : ''}`}>
              {t('about.vision')}
            </h2>
            <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
              {t('about.visionDesc')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-center text-blue-900 mb-12 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
            {t('about.values')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center group hover:scale-105 transition-all duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-blue-900 mb-3 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                {t('about.educatorFirst')}
              </h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                {t('about.educatorFirstDesc')}
              </p>
            </div>
            <div className={`text-center group hover:scale-105 transition-all duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <Award className="w-16 h-16 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-blue-900 mb-3 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                {t('about.quality')}
              </h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                {t('about.qualityDesc')}
              </p>
            </div>
            <div className={`text-center group hover:scale-105 transition-all duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
              <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-blue-900 mb-3 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                {t('about.innovation')}
              </h3>
              <p className={`text-gray-600 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                {t('about.innovationDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
          <h2 className={`text-3xl font-bold text-blue-900 mb-6 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
            {t('about.team')}
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
            {t('about.teamDesc')}
          </p>
        </div>
      </div>
    </main>
  )
}

export default function AboutPage() {
  return <AboutContent />
}
