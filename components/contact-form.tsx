'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { useTranslations } from 'next-intl'

type FormData = {
  name: string
  email: string
  role: string
  phone_number: number
  company: string
  inquiry: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>()
  const t = useTranslations('contact');
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form submitted:', data)

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    reset()
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" >
            {t('form.name')} *
          </Label>
          <Input
            id="name"
            {...register('name', { required: t('form.nameRequired') })}
            placeholder={t('form.name')}


          />
          {errors.name && (
            <p className={`text-sm text-red-600  `}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" >
            {t('form.email')} *
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
            placeholder={t('form.email')}

          />
          {errors.email && (
            <p className={`text-sm text-red-600  `}>
              {errors.email.message}
            </p>
          )}
        </div>
      </div>



      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="company"  >
            {t('form.company')}
          </Label>
          <Input
            id="company"
            {...register('company')}
            placeholder={t('form.company')}

          />
          {errors.company && (
            <p className={`text-sm text-red-600  `}>
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="name" >
            {t('form.role')} *
          </Label>
          <Input
            id="name"
            {...register('role', { required: t('form.nameRequired') })}
            placeholder={t('form.role')}


          />
          {errors.role && (
            <p className={`text-sm text-red-600  `}>
              {errors.role.message}
            </p>
          )}
        </div>

      </div>

      <div className="space-y-2">
        <Label htmlFor="company"  >
          {t('form.phone_number')}
        </Label>
        <Input
          id="phone_number"
          type='number'
          {...register('phone_number', {
            required: 'Phone number is required',
            pattern: { value: /^\d{11}$/i, message: 'Invalid phone number' }
          })}
          placeholder={"01229254999"}

        />
        {errors.phone_number && (
          <p className={`text-sm text-red-600  `}>
            {errors.phone_number.message}
          </p>
        )}
      </div>

      <div className="space-y-2 ">
        <Label htmlFor="inquiry"  >
          {t('form.inquiry.title')} *
        </Label>
        <Select onValueChange={(value) => setValue('inquiry', value)}>
          <SelectTrigger className='flex rtl:flex-row-reverse'>
            <SelectValue placeholder={t('form.inquiry.title')} />
          </SelectTrigger>
          <SelectContent className='rtl:flex-row-reverse'>
            <SelectItem value="sales"  >

              {t('form.inquiry.sales')}
            </SelectItem>
            <SelectItem value="support"  >

              {t('form.inquiry.support')}
            </SelectItem>
            <SelectItem value="partnership"  >

              {t('form.inquiry.partnership')}
            </SelectItem>
            <SelectItem value="demo"  >

              {t('form.inquiry.demo')}
            </SelectItem>
            <SelectItem value="other"  >

              {t('form.inquiry.other')}
            </SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" {...register('inquiry', { required: 'Please select an inquiry type' })} />
        {errors.inquiry && (
          <p className={`text-sm text-red-600  `}>
            {errors.inquiry.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message"  >
          {t('form.message')} *
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder={t('form.message')}
          rows={5}

        />
        {errors.message && (
          <p className={`text-sm text-red-600 `}>
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className={`w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300  
          }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? t('form.sending') : t('form.send')}
      </Button>
    </form>
  )
}
