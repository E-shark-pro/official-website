'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe, ChevronDown, Moon, Sun } from 'lucide-react'
import { useLanguage } from './language-provider'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function EnhancedNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, theme, toggleTheme, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ]

  const isRTL = language === 'ar'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled
      ? 'bg-white/85 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-gray-200/60 dark:border-slate-700/60'
      : 'bg-white/15 dark:bg-slate-900/20 backdrop-blur-xl'
      }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-transparent to-orange-500/8 dark:from-blue-400/6 dark:to-orange-400/6"></div>

      <div className={`container mx-auto px-4 relative ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'
          }`}>

          {/* Logo */}
          <div className={`${isRTL ? 'order-3' : 'order-1'}`}>
            <Link href="/" className={`flex items-center group ${isRTL ? 'flex-row-reverse' : ''} space-x-3`}>
              {/* <div className={`bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-500 dark:to-orange-400 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-xl ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                }`}>
                <span className="text-white font-bold text-xl animate-pulse">🦈</span>
              </div> */}
              <span className={`font-bold text-blue-900 dark:text-blue-100 transition-all duration-500 group-hover:text-blue-700 dark:group-hover:text-blue-300 ${isScrolled ? 'text-2xl' : 'text-3xl'
                } ${isRTL ? 'font-arabic-bold mr-3' : 'font-english ml-3'}`}>
                E Shark
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center flex-1 ${isRTL ? 'order-2' : 'order-2'}`}>
            {/* Navigation Links */}
            <div className={`flex items-center ${isRTL
              ? 'flex-row-reverse mr-8 ltr'
              : 'ml-8'
              }`}>
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group py-2 font-medium ${isRTL ? 'font-arabic ml-8' : 'font-english mr-8'
                    } ${index === navItems.length - 1 ? (isRTL ? 'ml-0' : 'mr-0') : ''}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 dark:from-blue-400 dark:to-orange-400 transition-all duration-300 group-hover:w-full`}></span>
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className={`flex items-center ${isRTL
              ? 'flex-row-reverse mr-auto ltr'
              : 'ml-auto'
              }`}>
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className={`hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/60 hover:border-gray-300/80 dark:hover:border-slate-600/80 rounded-xl ${isRTL ? 'ml-4' : 'mr-4'}`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-500" />
                )}
              </Button>

              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`flex items-center hover:bg-gray-100/80 dark:hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/60 hover:border-gray-300/80 dark:hover:border-slate-600/80 rounded-xl ${isRTL ? 'flex-row-reverse ml-4' : 'mr-4'
                    }`}>
                    <Globe className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    <span className={`uppercase font-medium text-gray-700 dark:text-gray-300 ${isRTL ? 'font-arabic ml-2' : 'font-english mr-2'}`}>
                      {language}
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-slate-700/60 shadow-2xl rounded-xl">
                  <DropdownMenuItem
                    onClick={() => setLanguage('en')}
                    className="hover:bg-blue-50/80 dark:hover:bg-blue-900/30 cursor-pointer font-english rounded-lg"
                  >
                    🇺🇸 English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage('ar')}
                    className="hover:bg-blue-50/80 dark:hover:bg-blue-900/30 cursor-pointer font-arabic rounded-lg"
                  >
                    🇸🇦 العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                className={`border-blue-600/60 dark:border-blue-400/60 text-blue-600 dark:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 hover:scale-105 transition-all duration-300 hover:shadow-lg backdrop-blur-sm border-2 hover:border-blue-600/80 dark:hover:border-blue-400/80 rounded-xl ${isRTL ? 'font-arabic ml-4' : 'font-english mr-4'
                  }`}
              >
                {t('nav.login')}
              </Button>
              <Button className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-xl shadow-lg rounded-xl ${isRTL ? 'font-arabic' : 'font-english'
                }`}>
                {t('nav.trial')}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className={`lg:hidden flex items-center ${isRTL ? 'order-1 flex-row-reverse' : 'order-3'}`}>
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className={`hover:bg-gray-100/80 dark:hover:bg-slate-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/60 rounded-xl p-2 ${isRTL ? 'ml-3' : 'mr-3'}`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-gray-600" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-500" />
              )}
            </Button>

            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={`flex items-center backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/60 hover:border-gray-300/80 dark:hover:border-slate-600/80 hover:bg-gray-100/80 dark:hover:bg-slate-800/80 rounded-xl p-2 ${isRTL ? 'flex-row-reverse ml-3' : 'mr-3'
                  }`}>
                  <Globe className={`w-4 h-4 text-gray-600 dark:text-gray-400 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                  <span className={`uppercase text-xs text-gray-700 dark:text-gray-300 ${isRTL ? 'font-arabic' : 'font-english'}`}>
                    {language}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200/60 dark:border-slate-700/60 rounded-xl">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="font-english rounded-lg">
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')} className="font-arabic rounded-lg">
                  🇸🇦 العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              className="p-2 hover:bg-gray-100/80 dark:hover:bg-slate-800/80 rounded-xl transition-all duration-300 backdrop-blur-sm border border-gray-200/60 dark:border-slate-700/60 hover:border-gray-300/80 dark:hover:border-slate-600/80"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden py-6 border-t border-gray-200/60 dark:border-slate-700/60 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-b-2xl mt-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex flex-col space-y-4 ${isRTL ? 'items-end' : 'items-start'}`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 px-4 rounded-lg font-medium w-full ${isRTL ? 'font-arabic text-right' : 'font-english text-left'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className={`flex flex-col space-y-3 pt-4 border-t border-gray-200/60 dark:border-slate-700/60 w-full ${isRTL ? 'items-end' : 'items-start'
                }`}>
                <Button
                  variant="outline"
                  className={`border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 w-full rounded-xl ${isRTL ? 'font-arabic' : 'font-english'
                    }`}
                >
                  {t('nav.login')}
                </Button>
                <Button className={`bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white w-full rounded-xl ${isRTL ? 'font-arabic' : 'font-english'
                  }`}>
                  {t('nav.trial')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}