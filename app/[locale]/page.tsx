import { Metadata } from "next";
import HeroSection from "@/app/[locale]/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CTASection from "@/components/cta-section";
import TestimonialsSection from "@/components/testimonials-section";
import StatsSection from "@/components/stats-section";
import AboutUs from "./components/AboutUs";
import Partners from "./components/partners";
import Features from "./components/Features";
import Testimonals from "./components/Testimonials";
import { createPageMetadata } from "@/lib/seo-metadata";

type Locale = "en" | "ar";

// const homeMetaConfig: Record<Locale, Metadata> = {
// 	en: {
// 		title: "E Shark - LMS Platform for Educators | Sell Online Courses",
// 		description:
// 			"E Shark LMS helps teachers, instructors, and schools create, manage, and sell online courses. AI-powered tools, student assessments, and full course management.",
// 		keywords:
// 			"LMS for teachers, online teaching platform, sell courses online, best LMS 2025, e-learning for educators, student management system, course creation tools",
// 		openGraph: {
// 			type: "website",
// 			locale: "en_US",
// 			url: "https://eshark.com/en",
// 			siteName: "E Shark",
// 			title: "E Shark - Teaching Platform for Educators",
// 			description:
// 				"Create and sell online courses with E Shark LMS. Student management, AI tools, and easy monetization.",
// 			images: [
// 				{
// 					url: `/images/og-eshark-3.jpeg`,
// 					width: 1200,
// 					height: 630,
// 					alt: "E Shark LMS Platform",
// 				},
// 			],
// 		},
// 	},

// 	ar: {
// 		title: "E Shark - منصة تعليمية للمعلمين | بيع الدورات عبر الإنترنت",
// 		description:
// 			"منصة E Shark LMS تساعد المعلمين والمدربين والمدارس على إنشاء وإدارة وبيع الدورات التعليمية عبر الإنترنت. أدوات مدعومة بالذكاء الاصطناعي، اختبارات الطلاب، وإدارة شاملة.",
// 		keywords:
// 			"منصة LMS للمعلمين, إنشاء الدورات التعليمية, بيع الدورات عبر الإنترنت, أفضل LMS 2025, التعليم الإلكتروني, نظام إدارة الطلاب, أدوات إنشاء الدورات",
// 		openGraph: {
// 			type: "website",
// 			locale: "ar_AR",
// 			url: "https://eshark.com/ar",
// 			siteName: "E Shark",
// 			title: "E Shark - منصة تعليمية للمعلمين",
// 			description:
// 				"قم بإنشاء وبيع الدورات التعليمية عبر الإنترنت باستخدام منصة E Shark LMS. إدارة الطلاب، أدوات الذكاء الاصطناعي، وتحقيق الأرباح بسهولة.",
// 			images: [
// 				{
// 					url: `/images/og-eshark-3.jpeg`,
// 					width: 1200,
// 					height: 630,
// 					alt: "منصة E Shark LMS",
// 				},
// 			],
// 		},
// 	},
// };

// // Generate localized metadata based on route params
// export function generateMetadata({
// 	params,
// }: {
// 	params: { locale: Locale };
// }): Metadata {
// 	return homeMetaConfig[params.locale] || homeMetaConfig.en;
// }
export async function generateMetadata({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	if (params.locale === "en") {
		return createPageMetadata("en", {
			slug: "",
			title: "E Shark - LMS Platform for Educators | Sell Online Courses",
			description:
				"E Shark LMS helps teachers, instructors, and schools create, manage, and sell online courses. AI-powered tools, student assessments, and full course management.",
			keywords:
				"LMS for teachers, online teaching platform, sell courses online, best LMS 2025, e-learning for educators, student management system, course creation tools",
		});
	} else {
		return createPageMetadata("ar", {
			slug: "",
			title: "E Shark - منصة تعليمية للمعلمين | بيع الكورسات عبر الإنترنت",
			description:
				"منصة E Shark LMS تساعد المعلمين والمدربين والمدارس على إنشاء وإدارة وبيع الدورات التعليمية عبر الإنترنت. أدوات مدعومة بالذكاء الاصطناعي، اختبارات الطلاب، وإدارة شاملة.",
			keywords:
				"منصة LMS للمعلمين, إنشاء الدورات التعليمية, بيع الكورسات عبر الإنترنت, أفضل LMS 2025, التعليم الإلكتروني, نظام إدارة الطلاب, أدوات إنشاء الدورات",
		});
	}
}
export default function HomePage() {
	return (
		<main className="min-h-screen">
			<HeroSection />
			{/* <StatsSection /> */}
			<Features />
			<AboutUs />
			{/* <FeaturesSection /> */}
			{/* <TestimonialsSection /> */}
			<Testimonals />
			<CTASection />
		</main>
	);
}
