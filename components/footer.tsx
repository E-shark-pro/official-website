'use client';
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useTranslations } from 'next-intl';

function FooterContent() {


  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={`space-y-4  `}>
            <div className={`flex items-center space-x-2`}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦈</span>
              </div>
              <span className={`text-2xl font-bold `}>E Shark</span>
            </div>
            <p className={`text-blue-200 dark:text-gray-300 `}>
              {t('description')}
            </p>
            <div className={`flex space-x-4`}>
              <Facebook className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-blue-200 dark:text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className={`space-y-4 `}>
            <h3 className={`text-lg font-semibold `}>
              {t('product')}
            </h3>
            <div className="space-y-2">
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('features')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('pricing')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('integrations')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('api')}
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className={`space-y-4 `}>
            <h3 className={`text-lg font-semibold `}>
              {t('company')}
            </h3>
            <div className="space-y-2">
              <Link href="/about" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {tNav('about')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('blog')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('careers')}
              </Link>
              <Link href="/contact" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {tNav('contact')}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className={`space-y-4 `}>
            <h3 className={`text-lg font-semibold `}>
              {t('support')}
            </h3>
            <div className="space-y-2">
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('helpCenter')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('documentation')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('community')}
              </Link>
              <Link href="#" className={`block text-blue-200 dark:text-gray-300 hover:text-white transition-colors `}>
                {t('status')}
              </Link>
            </div>
          </div>
        </div>

        <div className={`border-t border-blue-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`text-blue-200 dark:text-gray-300 text-sm `}>
            {t('rights')}
          </p>
          <div className={`flex mt-4 md:mt-0 space-x-6`}>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors `}>
              {t('privacy')}
            </Link>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors `}>
              {t('terms')}
            </Link>
            <Link href="#" className={`text-blue-200 dark:text-gray-300 hover:text-white text-sm transition-colors `}>
              {t('cookies')}
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
