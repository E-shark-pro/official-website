import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import EnhancedNavigation from "@/components/enhanced-navigation";
import Footer from "@/components/footer";
import ChatSupport from "@/components/chat-support";
import { Toaster } from "@/components/ui/toaster";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLocale, getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const cairo = Cairo({
	subsets: ["arabic"],
	variable: "--font-cairo",
	display: "swap",
	weight: ["400", "600", "700"],
});

// export const metadata: Metadata = {
// 	title: "E Shark - LMS Platform for Educators | Sell Online Courses",
// 	description:
// 		"E Shark LMS helps teachers, instructors, and schools create, manage, and sell online courses. AI-powered tools, student assessments, and full course management.",
// 	keywords:
// 		"LMS for teachers, online teaching platform, sell courses online, best LMS 2025, e-learning for educators, student management system, course creation tools",
// 	authors: [{ name: "E Shark Team" }],
// 	creator: "E Shark",
// 	publisher: "E Shark",
// 	robots: "index, follow",
// 	icons: {
// 		icon: [
// 			{ url: "/favicon.ico" },
// 			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
// 			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
// 			{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
// 		],
// 		apple: [
// 			{ url: "/apple-icon.png" },
// 			{ url: "/apple-icon-57x57.png", sizes: "57x57" },
// 			{ url: "/apple-icon-60x60.png", sizes: "60x60" },
// 			{ url: "/apple-icon-72x72.png", sizes: "72x72" },
// 			{ url: "/apple-icon-76x76.png", sizes: "76x76" },
// 			{ url: "/apple-icon-114x114.png", sizes: "114x114" },
// 			{ url: "/apple-icon-120x120.png", sizes: "120x120" },
// 			{ url: "/apple-icon-144x144.png", sizes: "144x144" },
// 			{ url: "/apple-icon-152x152.png", sizes: "152x152" },
// 			{ url: "/apple-icon-180x180.png", sizes: "180x180" },
// 		],
// 		other: [
// 			{
// 				rel: "android-chrome",
// 				url: "/android-icon-36x36.png",
// 				sizes: "36x36",
// 			},
// 			{ rel: "android-chrome", url: "/android-icon-48x48.png", sizes: "48x48" },
// 			{ rel: "android-chrome", url: "/android-icon-72x72.png", sizes: "72x72" },
// 			{ rel: "android-chrome", url: "/android-icon-96x96.png", sizes: "96x96" },
// 			{
// 				rel: "android-chrome",
// 				url: "/android-icon-144x144.png",
// 				sizes: "144x144",
// 			},
// 			{
// 				rel: "android-chrome",
// 				url: "/android-icon-192x192.png",
// 				sizes: "192x192",
// 			},
// 		],
// 	},
// 	manifest: "/manifest.json",
// 	openGraph: {
// 		type: "website",
// 		locale: "en_US",
// 		url: "https://eshark.com",
// 		siteName: "E Shark",
// 		title: "E Shark - LMS Platform for Educators",
// 		description:
// 			"Create and sell online courses with E Shark LMS. Student management, AI tools, and easy monetization.",
// 		images: [
// 			{
// 				// url: `/api/og?title=${encodeURIComponent("E Shark LMS")}`,
// 				url: `/images/og-eshark-3.jpeg`,
// 				width: 1200,
// 				height: 630,
// 				alt: "E Shark LMS Platform",
// 			},
// 		],
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "E Shark - LMS Platform for Educators",
// 		description:
// 			"Transform your teaching into a profitable business with E Shark LMS",
// 		creator: "@eshark",
// 		images: ["/og-image.jpg"],
// 	},
// 	generator: "Youssef Elaraby",
// };

type Locale = "en" | "ar";

const baseUrl = process.env.WEBSITE_URL;
const metadataConfig: Record<Locale, Metadata> = {
	en: {
		title: "E Shark - LMS Platform for Educators | Sell Online Courses",
		description:
			"E Shark LMS helps teachers, instructors, and schools create, manage, and sell online courses. AI-powered tools, student assessments, and full course management.",
		keywords:
			"LMS for teachers, online teaching platform, sell courses online, best LMS 2025, e-learning for educators, student management system, course creation tools",
		authors: [{ name: "E Shark Team" }],
		creator: "E Shark",
		publisher: "E Shark",
		robots: "index, follow",
		icons: {
			icon: [
				{ url: "/favicon.ico" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
				{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			],
			apple: [
				{ url: "/apple-icon.png" },
				{ url: "/apple-icon-57x57.png", sizes: "57x57" },
				{ url: "/apple-icon-60x60.png", sizes: "60x60" },
				{ url: "/apple-icon-72x72.png", sizes: "72x72" },
				{ url: "/apple-icon-76x76.png", sizes: "76x76" },
				{ url: "/apple-icon-114x114.png", sizes: "114x114" },
				{ url: "/apple-icon-120x120.png", sizes: "120x120" },
				{ url: "/apple-icon-144x144.png", sizes: "144x144" },
				{ url: "/apple-icon-152x152.png", sizes: "152x152" },
				{ url: "/apple-icon-180x180.png", sizes: "180x180" },
			],
			other: [
				{
					rel: "android-chrome",
					url: "/android-icon-36x36.png",
					sizes: "36x36",
				},
				{
					rel: "android-chrome",
					url: "/android-icon-48x48.png",
					sizes: "48x48",
				},
				{
					rel: "android-chrome",
					url: "/android-icon-72x72.png",
					sizes: "72x72",
				},
				{
					rel: "android-chrome",
					url: "/android-icon-96x96.png",
					sizes: "96x96",
				},
				{
					rel: "android-chrome",
					url: "/android-icon-144x144.png",
					sizes: "144x144",
				},
				{
					rel: "android-chrome",
					url: "/android-icon-192x192.png",
					sizes: "192x192",
				},
			],
		},
		manifest: "/manifest.json",
		openGraph: {
			type: "website",
			locale: "en_US",
			url: "https://eshark.com/en",
			siteName: "E Shark",
			title: "E Shark - LMS Platform for Educators",
			description:
				"Create and sell online courses with E Shark LMS. Student management, AI tools, and easy monetization.",
			images: [
				{
					url: `/images/og-eshark-3.jpeg`,
					width: 1200,
					height: 630,
					alt: "E Shark LMS Platform",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "E Shark - LMS Platform for Educators",
			description:
				"Transform your teaching into a profitable business with E Shark LMS",
			creator: "@eshark",
			images: ["/og-image.jpg"],
		},
		generator: "Youssef Elaraby",
	},

	ar: {
		title: "E Shark - منصة تعليمية للمعلمين | بيع الدورات عبر الإنترنت",
		description:
			"منصة E Shark LMS تساعد المعلمين والمدربين والمدارس على إنشاء وإدارة وبيع الدورات التعليمية عبر الإنترنت. أدوات مدعومة بالذكاء الاصطناعي، اختبارات الطلاب، وإدارة شاملة.",
		keywords:
			"منصة LMS للمعلمين, إنشاء الدورات التعليمية, بيع الدورات عبر الإنترنت, أفضل LMS 2025, التعليم الإلكتروني, نظام إدارة الطلاب, أدوات إنشاء الدورات",
		authors: [{ name: "فريق E Shark" }],
		creator: "E Shark",
		publisher: "E Shark",
		robots: "index, follow",
		icons: {
			icon: [{ url: "/favicon.ico" }],
		},
		manifest: "/manifest.json",
		openGraph: {
			type: "website",
			locale: "ar_AR",
			url: "https://eshark.com/ar",
			siteName: "E Shark",
			title: "E Shark - منصة تعليمية للمعلمين",
			description:
				"قم بإنشاء وبيع الدورات التعليمية عبر الإنترنت باستخدام منصة E Shark LMS. إدارة الطلاب، أدوات الذكاء الاصطناعي، وتحقيق الأرباح بسهولة.",
			images: [
				{
					url: `/images/og-eshark-3.jpeg`,
					width: 1200,
					height: 630,
					alt: "منصة E Shark LMS",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: "E Shark - منصة تعليمية للمعلمين",
			description: "حوّل التعليم إلى عمل مربح باستخدام E Shark LMS",
			creator: "@eshark",
			images: ["/og-image.jpg"],
		},
		generator: "يوسف العربي",
	},
};
export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const locale = params.locale as "en" | "ar";

	return {
		...metadataConfig[locale],
		alternates: {
			canonical: `${baseUrl}/${locale}`,
			languages: {
				en: `${baseUrl}/en`,
				ar: `${baseUrl}/ar`,
				"x-default": baseUrl,
			},
		},
	};
}
export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	let messages;
	try {
		messages = (await import(`@/messages/${locale}.json`)).default;
	} catch {
		notFound();
	}
	const direction = getLangDir(locale);
	const messages1 = await getMessages();
	console.log(messages1, "messages1");
	console.log(messages, "messages");

	return (
		<html
			lang={locale}
			dir={direction}
			className={`${inter.variable} ${cairo.variable}`}
			suppressHydrationWarning>
			<body className={`${inter.className} antialiased `}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<main
							className={`lg:pt-20 ${
								locale === "ar" ? "font-arabic" : "font-english"
							}`}>
							<EnhancedNavigation />
							{children}
						</main>
						<Footer />
						<ChatSupport />
						<Toaster />
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
