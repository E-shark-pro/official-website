'use client';
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from './language-provider'

function FooterContent() {
  const { t, language } = useLanguage()

  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`}>
            <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-2' : 'space-x-2'}`}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦈</span>
              </div>
              <span className={`text-2xl font-bold ${language === 'ar' ? 'font-arabic-bold' : ''}`}>E Shark</span>
            </div>
            <p className={`text-blue-200 dark:text-gray-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.description')}
            </p>
            <div className={`flex ${language === 'ar' ? 'flex-row-reverse space-x-reverse space-x-4' : 'space-x-4'}`}>
              <Facebook className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`}>
            <h3 className={`text-lg font-semibold ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
              {t('footer.product')}
            </h3>
            <div className="space-y-2">
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.features')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.pricing')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.integrations')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.api')}
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`}>
            <h3 className={`text-lg font-semibold ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
              {t('footer.company')}
            </h3>
            <div className="space-y-2">
              <Link href="/about" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.about')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.blog')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.careers')}
              </Link>
              <Link href="/contact" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className={`space-y-4 ${language === 'ar' ? 'text-right' : ''}`}>
            <h3 className={`text-lg font-semibold ${language === 'ar' ? 'font-arabic-bold' : ''}`}>
              {t('footer.support')}
            </h3>
            <div className="space-y-2">
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.helpCenter')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.documentation')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.community')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('footer.status')}
              </Link>
            </div>
          </div>
        </div>

        <div className={`border-t border-blue-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center ${language === 'ar' ? 'md:flex-row-reverse' : ''
          }`}>
          <p className={`text-blue-200 dark:text-gray-300 text-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('footer.rights')}
          </p>
          <div className={`flex mt-4 md:mt-0 ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.privacy')}
            </Link>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.terms')}
            </Link>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return <FooterContent />
}
