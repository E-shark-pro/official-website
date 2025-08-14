'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send, User, Bot } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'


interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const locale = useLocale()
  const t = useTranslations('chat');

  const sendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: locale === 'ar'
          ? 'شكراً لتواصلك معنا! سيقوم أحد ممثلي خدمة العملاء بالرد عليك قريباً.'
          : 'Thank you for reaching out! One of our customer service representatives will get back to you shortly.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-24 right-3 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-180' : ''
            }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 z-40 w-96 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 right-6`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
            <div className={`flex items-center  `}>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className={` ml-3`}>
                <h3 className={`font-semibold `}>
                  {t('title')}
                </h3>
                <p className={`text-sm text-blue-100 `}>
                  {t('online')}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${message.sender === 'user'
                  ? locale === 'ar' ? 'flex-row-reverse space-x-reverse justify-start' : 'justify-end flex-row-reverse space-x-reverse'
                  : locale === 'ar' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
                  }`}>
                  {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`max-w-xs ${message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
                  } rounded-2xl px-4 py-2`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70 `}>
                    {message.timestamp.toLocaleTimeString(locale === 'ar' ? 'ar-SA' : 'en-US', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`flex items-start space-x-3  `}>
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className={`flex space-x-2  `}>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('placeholder')}
                className={`flex-1 `}

              />
              <Button
                onClick={sendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
