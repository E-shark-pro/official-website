'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Home, Info, Phone, LogIn, Play } from 'lucide-react'
import LangSwitcher from '@/components/lang-switcher'
import { useLocale, useTranslations } from 'next-intl'
import { ModeToggle } from "@/components/theme-toggle"
export default function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations('nav')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('about'), icon: Info },
    { href: '/contact', label: t('contact'), icon: Phone },
  ]

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className={`md:block fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled
        ? 'bg-white/85 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-gray-200/60 dark:border-slate-700/60'
        : 'bg-white/15 dark:bg-slate-900/20 backdrop-blur-xl'
        }`}>
        <div className="container mx-auto px-4 relative">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link href="/" className="font-bold text-blue-900 dark:text-blue-100 text-2xl">
              E Shark
            </Link>

            {/* Links */}
            <div className="flex items-center md:gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hidden md:block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="hidden md:flex bg-blue-600 text-white py-6" size={"lg"}>{t('trial')}</Button>
              <div className="flex items-center gap-1">
                <LangSwitcher />
                {/* <Button variant="outline">{t('login')}</Button> */}
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Floating Nav */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 dark:border-slate-700/50 z-50">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
          {/* <button className="flex flex-col items-center gap-1 text-sm text-blue-600">
            <LogIn className="w-5 h-5" />
            {t('login')}
          </button> */}

          {/* <ModeToggle /> */}
          <button className="flex flex-col items-center gap-1 text-sm text-white bg-blue-600 px-3 py-2 rounded-lg">
            <Play className="w-4 h-4" />
            {t('trial')}
          </button>
        </div>
      </div>
    </>
  )
}
