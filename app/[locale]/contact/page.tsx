'use client'
// import { Metadata } from 'next'
import ContactForm from '@/components/contact-form'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

// export const metadata: Metadata = {
//   title: 'Contact E Shark - Get in Touch with Our Team',
//   description: 'Contact E Shark for support, sales inquiries, or partnership opportunities. We\'re here to help you succeed with our LMS platform.',
//   keywords: 'contact E Shark, LMS support, sales inquiry, customer service, partnership',
// }

function ContactContent() {
  const { t, language } = useLanguage()

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 animate-fade-in-up ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
          <h1 className={`text-4xl md:text-6xl font-bold text-blue-900 mb-6 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
            {t('contact.title')}
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <h2 className={`text-2xl font-bold text-blue-900 mb-6 ${language === 'ar' ? 'font-arabic-bold text-right' : ''}`}>
              {t('contact.sendMessage')}
            </h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className={`text-2xl font-bold text-blue-900 mb-6 ${language === 'ar' ? 'font-arabic-bold text-right' : ''}`}>
                {t('contact.info')}
              </h2>
              <div className="space-y-6">
                <div className={`flex items-center group hover:scale-105 transition-transform ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'
                  }`}>
                  <Mail className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <p className={`font-semibold text-blue-900 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                      {t('contact.email')}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      hello@eshark.com
                    </p>
                  </div>
                </div>
                <div className={`flex items-center group hover:scale-105 transition-transform ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'
                  }`}>
                  <Phone className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <p className={`font-semibold text-blue-900 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                      {t('contact.phone')}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                <div className={`flex items-center group hover:scale-105 transition-transform ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'
                  }`}>
                  <MapPin className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <p className={`font-semibold text-blue-900 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                      {t('contact.address')}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      123 Education Street<br />Tech City, TC 12345
                    </p>
                  </div>
                </div>
                <div className={`flex items-center group hover:scale-105 transition-transform ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'
                  }`}>
                  <Clock className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <p className={`font-semibold text-blue-900 ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
                      {t('contact.hours')}
                    </p>
                    <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {t('contact.hoursValue')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className={`text-xl font-bold text-blue-900 mb-4 ${language === 'ar' ? 'font-arabic-bold text-right' : ''}`}>
                {t('contact.quickSupport')}
              </h3>
              <p className={`text-gray-600 mb-4 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                {t('contact.quickSupportDesc')}
              </p>
              <div className="space-y-3">
                <button className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg ${language === 'ar' ? 'font-arabic' : ''
                  }`}>
                  {t('contact.scheduleDemo')}
                </button>
                <button className={`w-full border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${language === 'ar' ? 'font-arabic' : ''
                  }`}>
                  {t('contact.helpCenter')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ContactPage() {
  return <ContactContent />
}
