'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useLanguage } from './language-provider'

type FormData = {
  name: string
  email: string
  company: string
  inquiry: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()
  const { t, language } = useLanguage()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', data)
    
    toast({
      title: language === 'ar' ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!",
      description: language === 'ar' ? "سنعود إليك خلال 24 ساعة." : "We'll get back to you within 24 hours.",
    })
    
    reset()
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className={language === 'ar' ? 'font-arabic text-right block' : ''}>
            {t('contact.form.name')} *
          </Label>
          <Input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder={t('contact.form.name')}
            className={language === 'ar' ? 'text-right font-arabic' : ''}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          />
          {errors.name && (
            <p className={`text-sm text-red-600 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
              {errors.name.message}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className={language === 'ar' ? 'font-arabic text-right block' : ''}>
            {t('contact.form.email')} *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder={t('contact.form.email')}
            className={language === 'ar' ? 'text-right font-arabic' : ''}
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          />
          {errors.email && (
            <p className={`text-sm text-red-600 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className={language === 'ar' ? 'font-arabic text-right block' : ''}>
          {t('contact.form.company')}
        </Label>
        <Input
          id="company"
          {...register('company')}
          placeholder={t('contact.form.company')}
          className={language === 'ar' ? 'text-right font-arabic' : ''}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiry" className={language === 'ar' ? 'font-arabic text-right block' : ''}>
          {t('contact.form.inquiry')} *
        </Label>
        <Select onValueChange={(value) => setValue('inquiry', value)}>
          <SelectTrigger className={language === 'ar' ? 'text-right font-arabic' : ''}>
            <SelectValue placeholder={t('contact.form.inquiry')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 'استفسار مبيعات' : 'Sales Inquiry'}
            </SelectItem>
            <SelectItem value="support" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 'الدعم الفني' : 'Technical Support'}
            </SelectItem>
            <SelectItem value="partnership" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 'شراكة' : 'Partnership'}
            </SelectItem>
            <SelectItem value="demo" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo'}
            </SelectItem>
            <SelectItem value="other" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'ar' ? 'أخرى' : 'Other'}
            </SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register('inquiry', { required: 'Please select an inquiry type' })} />
        {errors.inquiry && (
          <p className={`text-sm text-red-600 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
            {errors.inquiry.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={language === 'ar' ? 'font-arabic text-right block' : ''}>
          {t('contact.form.message')} *
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder={t('contact.form.message')}
          rows={5}
          className={language === 'ar' ? 'text-right font-arabic' : ''}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
        {errors.message && (
          <p className={`text-sm text-red-600 ${language === 'ar' ? 'text-right font-arabic' : ''}`}>
            {errors.message.message}
          </p>
        )}
      </div>

      <Button 
        type="submit" 
        className={`w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 ${
          language === 'ar' ? 'font-arabic' : ''
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
      </Button>
    </form>
  )
}
