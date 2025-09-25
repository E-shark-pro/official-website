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

export const metadata: Metadata = {
	title: {
		default: "E Shark - LMS Platform for Educators",
		template: "%s | E Shark",
	},
	description:
		"Transform your teaching into a profitable business with E Shark LMS. Create, sell, and manage online courses with AI-powered tools, student management, and more.",
	keywords:
		"LMS platform, online course creation, sell courses online, educator tools, student management, AI teaching tools, e-learning platform, course marketplace",
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
			{ rel: "android-chrome", url: "/android-icon-48x48.png", sizes: "48x48" },
			{ rel: "android-chrome", url: "/android-icon-72x72.png", sizes: "72x72" },
			{ rel: "android-chrome", url: "/android-icon-96x96.png", sizes: "96x96" },
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
		url: "https://eshark.com",
		siteName: "E Shark",
		title: "E Shark - LMS Platform for Educators",
		description:
			"Transform your teaching into a profitable business with E Shark LMS",
		images: [
			{
				url: "/apple-icon-180x180.png",
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
};

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
