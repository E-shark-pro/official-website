'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'en' | 'ar'
type Theme = 'light' | 'dark'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.trial': 'Start Free Trial',
    'nav.darkMode': 'Dark Mode',
    'nav.lightMode': 'Light Mode',
    
    // Hero Section
    'hero.badge': '🚀 Transform Your Teaching Into Profit',
    'hero.title': 'Dive Deep Into',
    'hero.titleHighlight': 'Online Education',
    'hero.description': 'E Shark empowers teachers and educators to create, sell, and manage online courses with AI-powered tools, comprehensive student management, and everything you need to build a thriving educational business.',
    'hero.startTrial': 'Start Free Trial',
    'hero.watchDemo': 'Watch Demo',
    'hero.educators': 'Active Educators',
    'hero.students': 'Students Enrolled',
    'hero.revenue': 'Revenue Generated',
    
    // Stats
    'stats.educators': 'Active Educators',
    'stats.courses': 'Courses Created',
    'stats.students': 'Students Enrolled',
    'stats.revenue': 'Revenue Generated',
    
    // Features
    'features.title': 'Everything You Need to Succeed',
    'features.description': 'From course creation to student management, E Shark provides all the tools educators need to build and scale their online teaching business.',
    'features.courseCreation': 'Course Creation Studio',
    'features.courseCreationDesc': 'Build engaging courses with our intuitive drag-and-drop editor, multimedia support, and interactive elements.',
    'features.studentManagement': 'Student Management',
    'features.studentManagementDesc': 'Track progress, manage enrollments, and communicate with students through our comprehensive dashboard.',
    'features.aiAssistant': 'AI Teaching Assistant',
    'features.aiAssistantDesc': 'Leverage AI to create quizzes, generate content suggestions, and provide personalized learning paths.',
    'features.revenue': 'Revenue Optimization',
    'features.revenueDesc': 'Maximize earnings with flexible pricing models, discount codes, and automated marketing tools.',
    'features.analytics': 'Analytics & Insights',
    'features.analyticsDesc': 'Make data-driven decisions with detailed analytics on student engagement and course performance.',
    'features.security': 'Secure & Reliable',
    'features.securityDesc': 'Enterprise-grade security with 99.9% uptime guarantee and automatic backups.',
    
    // Testimonials
    'testimonials.title': 'Loved by Educators Worldwide',
    'testimonials.description': 'Join thousands of successful educators who have transformed their teaching into thriving online businesses with E Shark.',
    'testimonials.sarah.name': 'Sarah Johnson',
    'testimonials.sarah.role': 'Math Teacher',
    'testimonials.sarah.content': 'E Shark transformed my teaching career. I went from struggling to make ends meet to earning $5,000/month from my online courses!',
    'testimonials.michael.name': 'Michael Chen',
    'testimonials.michael.role': 'Programming Instructor',
    'testimonials.michael.content': 'The AI tools are incredible. They help me create quizzes and content in minutes instead of hours. My students love the interactive features.',
    'testimonials.emily.name': 'Emily Rodriguez',
    'testimonials.emily.role': 'Language Coach',
    'testimonials.emily.content': 'Student management has never been easier. I can track progress, send personalized feedback, and manage hundreds of students effortlessly.',
    
    // About Page
    'about.title': 'About E Shark',
    'about.subtitle': 'Empowering Educators Worldwide',
    'about.description': 'We\'re on a mission to empower educators worldwide by providing them with the tools they need to transform their knowledge into profitable online businesses.',
    'about.mission': 'Our Mission',
    'about.missionDesc': 'To democratize education by giving every teacher and educator the power to create, sell, and manage online courses with cutting-edge AI technology and comprehensive student management tools.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'A world where quality education is accessible to everyone, and passionate educators can build sustainable businesses around their expertise while making a meaningful impact on learners globally.',
    'about.values': 'Our Values',
    'about.educatorFirst': 'Educator-First',
    'about.educatorFirstDesc': 'Every feature we build is designed with educators in mind, ensuring they have the best tools to succeed.',
    'about.quality': 'Quality Excellence',
    'about.qualityDesc': 'We maintain the highest standards in our platform to ensure exceptional learning experiences.',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'We continuously innovate with AI and modern technology to stay ahead of educational trends.',
    'about.team': 'Built by Educators, for Educators',
    'about.teamDesc': 'Our team combines decades of educational experience with cutting-edge technology expertise to create the most comprehensive LMS platform for modern educators.',
    
    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to transform your teaching into a thriving online business? We\'re here to help you get started with E Shark.',
    'contact.sendMessage': 'Send us a Message',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.hours': 'Business Hours',
    'contact.hoursValue': 'Mon - Fri: 9:00 AM - 6:00 PM EST',
    'contact.quickSupport': 'Quick Support',
    'contact.quickSupportDesc': 'Need immediate assistance? Check out our help center or schedule a demo.',
    'contact.scheduleDemo': 'Schedule a Demo',
    'contact.helpCenter': 'Visit Help Center',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company/Organization',
    'contact.form.inquiry': 'Inquiry Type',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.nameRequired': 'Name is required',
    'contact.form.emailRequired': 'Email is required',
    'contact.form.emailInvalid': 'Invalid email address',
    'contact.form.inquiryRequired': 'Please select an inquiry type',
    'contact.form.messageRequired': 'Message is required',
    'contact.form.success': 'Message sent successfully!',
    'contact.form.successDesc': 'We\'ll get back to you within 24 hours.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Teaching?',
    'cta.description': 'Join thousands of educators who are already building successful online businesses with E Shark. Start your journey today!',
    'cta.trial': '14-day free trial',
    'cta.noFees': 'No setup fees',
    'cta.cancel': 'Cancel anytime',
    'cta.support': '24/7 support',
    'cta.startTrial': 'Start Free Trial',
    'cta.scheduleDemo': 'Schedule Demo',
    
    // Footer
    'footer.company': 'Company',
    'footer.product': 'Product',
    'footer.support': 'Support',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.integrations': 'Integrations',
    'footer.api': 'API',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.helpCenter': 'Help Center',
    'footer.documentation': 'Documentation',
    'footer.community': 'Community',
    'footer.status': 'Status',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.rights': '© 2024 E Shark. All rights reserved.',
    'footer.description': 'Empowering educators worldwide to transform their teaching into profitable online businesses.',
    
    // Chat Support
    'chat.title': 'Chat Support',
    'chat.subtitle': 'How can we help you today?',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.online': 'We\'re online',
    'chat.offline': 'We\'ll get back to you soon',
    'chat.welcome': 'Hello! How can I help you today?',
    'chat.response': 'Thank you for reaching out! One of our customer service representatives will get back to you shortly.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.login': 'تسجيل الدخول',
    'nav.trial': 'ابدأ التجربة المجانية',
    'nav.darkMode': 'الوضع المظلم',
    'nav.lightMode': 'الوضع المضيء',
    
    // Hero Section
    'hero.badge': '🚀 حول تدريسك إلى ربح',
    'hero.title': 'اغوص عميقاً في',
    'hero.titleHighlight': 'التعليم الإلكتروني',
    'hero.description': 'إي شارك تمكن المعلمين والمربين من إنشاء وبيع وإدارة الدورات التدريبية عبر الإنترنت باستخدام أدوات مدعومة بالذكاء الاصطناعي وإدارة شاملة للطلاب وكل ما تحتاجه لبناء عمل تعليمي مزدهر.',
    'hero.startTrial': 'ابدأ التجربة المجانية',
    'hero.watchDemo': 'شاهد العرض التوضيحي',
    'hero.educators': 'معلم نشط',
    'hero.students': 'طالب مسجل',
    'hero.revenue': 'إيرادات محققة',
    
    // Stats
    'stats.educators': 'معلم نشط',
    'stats.courses': 'دورة تم إنشاؤها',
    'stats.students': 'طالب مسجل',
    'stats.revenue': 'إيرادات محققة',
    
    // Features
    'features.title': 'كل ما تحتاجه للنجاح',
    'features.description': 'من إنشاء الدورات إلى إدارة الطلاب، يوفر إي شارك جميع الأدوات التي يحتاجها المعلمون لبناء وتوسيع أعمالهم التعليمية عبر الإنترنت.',
    'features.courseCreation': 'استوديو إنشاء الدورات',
    'features.courseCreationDesc': 'ابني دورات جذابة باستخدام محرر السحب والإفلات البديهي ودعم الوسائط المتعددة والعناصر التفاعلية.',
    'features.studentManagement': 'إدارة الطلاب',
    'features.studentManagementDesc': 'تتبع التقدم وإدارة التسجيلات والتواصل مع الطلاب من خلال لوحة التحكم الشاملة.',
    'features.aiAssistant': 'مساعد التدريس بالذكاء الاصطناعي',
    'features.aiAssistantDesc': 'استفد من الذكاء الاصطناعي لإنشاء الاختبارات وتوليد اقتراحات المحتوى وتوفير مسارات تعلم مخصصة.',
    'features.revenue': 'تحسين الإيرادات',
    'features.revenueDesc': 'زيادة الأرباح مع نماذج التسعير المرنة وأكواد الخصم وأدوات التسويق الآلية.',
    'features.analytics': 'التحليلات والرؤى',
    'features.analyticsDesc': 'اتخذ قرارات مدروسة بتحليلات مفصلة حول مشاركة الطلاب وأداء الدورات.',
    'features.security': 'آمن وموثوق',
    'features.securityDesc': 'أمان على مستوى المؤسسات مع ضمان وقت تشغيل 99.9% ونسخ احتياطية تلقائية.',
    
    // Testimonials
    'testimonials.title': 'محبوب من قبل المعلمين في جميع أنحاء العالم',
    'testimonials.description': 'انضم إلى آلاف المعلمين الناجحين الذين حولوا تدريسهم إلى أعمال مزدهرة عبر الإنترنت مع إي شارك.',
    'testimonials.sarah.name': 'سارة جونسون',
    'testimonials.sarah.role': 'معلمة رياضيات',
    'testimonials.sarah.content': 'إي شارك غيرت مسيرتي التعليمية. انتقلت من الكفاح لتغطية نفقاتي إلى كسب 5000 دولار شهرياً من دوراتي عبر الإنترنت!',
    'testimonials.michael.name': 'مايكل تشين',
    'testimonials.michael.role': 'مدرب برمجة',
    'testimonials.michael.content': 'أدوات الذكاء الاصطناعي رائعة. تساعدني في إنشاء الاختبارات والمحتوى في دقائق بدلاً من ساعات. طلابي يحبون الميزات التفاعلية.',
    'testimonials.emily.name': 'إيميلي رودريغيز',
    'testimonials.emily.role': 'مدربة لغات',
    'testimonials.emily.content': 'إدارة الطلاب لم تكن أسهل من ذلك. يمكنني تتبع التقدم وإرسال ملاحظات مخصصة وإدارة مئات الطلاب بسهولة.',
    
    // About Page
    'about.title': 'حول إي شارك',
    'about.subtitle': 'تمكين المعلمين في جميع أنحاء العالم',
    'about.description': 'نحن في مهمة لتمكين المعلمين في جميع أنحاء العالم من خلال تزويدهم بالأدوات التي يحتاجونها لتحويل معرفتهم إلى أعمال مربحة عبر الإنترنت.',
    'about.mission': 'مهمتنا',
    'about.missionDesc': 'إضفاء الطابع الديمقراطي على التعليم من خلال منح كل معلم ومربي القدرة على إنشاء وبيع وإدارة الدورات التدريبية عبر الإنترنت باستخدام تقنية الذكاء الاصطناعي المتطورة وأدوات إدارة الطلاب الشاملة.',
    'about.vision': 'رؤيتنا',
    'about.visionDesc': 'عالم يكون فيه التعليم الجيد متاحاً للجميع، ويمكن للمعلمين المتحمسين بناء أعمال مستدامة حول خبراتهم مع إحداث تأثير مفيد على المتعلمين عالمياً.',
    'about.values': 'قيمنا',
    'about.educatorFirst': 'المعلم أولاً',
    'about.educatorFirstDesc': 'كل ميزة نبنيها مصممة مع وضع المعلمين في الاعتبار، مما يضمن حصولهم على أفضل الأدوات للنجاح.',
    'about.quality': 'التميز في الجودة',
    'about.qualityDesc': 'نحافظ على أعلى المعايير في منصتنا لضمان تجارب تعلم استثنائية.',
    'about.innovation': 'الابتكار',
    'about.innovationDesc': 'نبتكر باستمرار بالذكاء الاصطناعي والتكنولوجيا الحديثة للبقاء في المقدمة في الاتجاهات التعليمية.',
    'about.team': 'بناه المعلمون، للمعلمين',
    'about.teamDesc': 'يجمع فريقنا بين عقود من الخبرة التعليمية وخبرة التكنولوجيا المتطورة لإنشاء أشمل منصة نظام إدارة التعلم للمعلمين المعاصرين.',
    
    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لتحويل تدريسك إلى عمل مزدهر عبر الإنترنت؟ نحن هنا لمساعدتك في البدء مع إي شارك.',
    'contact.sendMessage': 'أرسل لنا رسالة',
    'contact.info': 'معلومات الاتصال',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.hours': 'ساعات العمل',
    'contact.hoursValue': 'الإثنين - الجمعة: 9:00 ص - 6:00 م بتوقيت شرق أمريكا',
    'contact.quickSupport': 'الدعم السريع',
    'contact.quickSupportDesc': 'تحتاج مساعدة فورية؟ تحقق من مركز المساعدة أو جدول عرضاً توضيحياً.',
    'contact.scheduleDemo': 'جدولة عرض توضيحي',
    'contact.helpCenter': 'زيارة مركز المساعدة',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.company': 'الشركة/المؤسسة',
    'contact.form.inquiry': 'نوع الاستفسار',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.sending': 'جاري الإرسال...',
    'contact.form.nameRequired': 'الاسم مطلوب',
    'contact.form.emailRequired': 'البريد الإلكتروني مطلوب',
    'contact.form.emailInvalid': 'عنوان بريد إلكتروني غير صالح',
    'contact.form.inquiryRequired': 'يرجى اختيار نوع الاستفسار',
    'contact.form.messageRequired': 'الرسالة مطلوبة',
    'contact.form.success': 'تم إرسال الرسالة بنجاح!',
    'contact.form.successDesc': 'سنعود إليك خلال 24 ساعة.',
    
    // CTA
    'cta.title': 'هل أنت مستعد لتحويل تدريسك؟',
    'cta.description': 'انضم إلى آلاف المعلمين الذين يبنون بالفعل أعمالاً ناجحة عبر الإنترنت مع إي شارك. ابدأ رحلتك اليوم!',
    'cta.trial': 'تجربة مجانية لمدة 14 يوماً',
    'cta.noFees': 'بدون رسوم إعداد',
    'cta.cancel': 'إلغاء في أي وقت',
    'cta.support': 'دعم على مدار الساعة',
    'cta.startTrial': 'ابدأ التجربة المجانية',
    'cta.scheduleDemo': 'جدولة عرض توضيحي',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.product': 'المنتج',
    'footer.support': 'الدعم',
    'footer.features': 'الميزات',
    'footer.pricing': 'التسعير',
    'footer.integrations': 'التكاملات',
    'footer.api': 'واجهة برمجة التطبيقات',
    'footer.blog': 'المدونة',
    'footer.careers': 'الوظائف',
    'footer.helpCenter': 'مركز المساعدة',
    'footer.documentation': 'التوثيق',
    'footer.community': 'المجتمع',
    'footer.status': 'الحالة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.rights': '© 2024 إي شارك. جميع الحقوق محفوظة.',
    'footer.description': 'تمكين المعلمين في جميع أنحاء العالم لتحويل تدريسهم إلى أعمال مربحة عبر الإنترنت.',
    
    // Chat Support
    'chat.title': 'دعم الدردشة',
    'chat.subtitle': 'كيف يمكننا مساعدتك اليوم؟',
    'chat.placeholder': 'اكتب رسالتك...',
    'chat.send': 'إرسال',
    'chat.online': 'نحن متصلون',
    'chat.offline': 'سنعود إليك قريباً',
    'chat.welcome': 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
    'chat.response': 'شكراً لتواصلك معنا! سيقوم أحد ممثلي خدمة العملاء بالرد عليك قريباً.',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Load saved preferences
    const savedLanguage = localStorage.getItem('language') as Language
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedLanguage) setLanguage(savedLanguage)
    if (savedTheme) setTheme(savedTheme)
    
    // Apply theme to document
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  useEffect(() => {
    localStorage.setItem('language', language)
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [language, theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, setTheme, toggleTheme, t }}>
      <div 
        className={`${language === 'ar' ? 'rtl font-arabic' : 'ltr font-english'} transition-all duration-300`} 
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
