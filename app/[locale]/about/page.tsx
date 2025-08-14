'use client'
import SectionTitle from '@/components/ui/section-title'
// import { Metadata } from 'next'
import { Users, Target, Award, Lightbulb } from 'lucide-react'
import { useTranslations } from 'next-intl'
import FAQDemo from './components/Faq'


// export const metadata: Metadata = {
//   title: 'About E Shark - Empowering Educators Worldwide',
//   description: 'Learn about E Shark\'s mission to help teachers and educators monetize their expertise through our comprehensive LMS platform.',
//   keywords: 'about E Shark, educator empowerment, online teaching platform, LMS company',
// }

function AboutContent() {

  const t = useTranslations('about')

  return (
    <main className="mt-20 pt-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className={`text-center mb-16 animate-fade-in-up `}>
          <SectionTitle title={t('title')} description={t('subtitle')} />

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border-primaryLight border-2">
            <Target className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h2 className={`text-2xl font-bold text-foreground mb-4 `}>
              {t('mission')}
            </h2>
            <p className={`text-muted-foreground leading-relaxed `}>
              {t('missionDesc')}
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group border-third border-2">
            <Lightbulb className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className={`text-2xl font-bold text-foreground mb-4 `}>
              {t('vision')}
            </h2>
            <p className={`text-muted-foreground leading-relaxed `}>
              {t('visionDesc')}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-center text-primary mb-12 `}>
            {t('values')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center group hover:scale-105 transition-all duration-300 `}>
              <Users className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-primary mb-3 `}>
                {t('educatorFirst')}
              </h3>
              <p className={`text-muted-foreground leading-relaxed `}>
                {t('educatorFirstDesc')}
              </p>
            </div>
            <div className={`text-center group hover:scale-105 transition-all duration-300 `}>
              <Award className="w-16 h-16 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-primary mb-3 `}>
                {t('quality')}
              </h3>
              <p className={`text-muted-foreground leading-relaxed `}>
                {t('qualityDesc')}
              </p>
            </div>
            <div className={`text-center group hover:scale-105 transition-all duration-300 `}>
              <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-xl font-semibold text-primary mb-3 `}>
                {t('innovation')}
              </h3>
              <p className={`text-muted-foreground leading-relaxed `}>
                {t('innovationDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`text-center `}>
          <h2 className={`text-3xl font-bold text-primary mb-6 `}>
            {t('team')}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed `}>
            {t('teamDesc')}
          </p>
        </div>
      </div>


      {/* faq */}

      <FAQDemo />

    </main>
  )
}

export default function AboutPage() {
  return <AboutContent />
}
