// lib/seo-metadata.ts
import type { Metadata } from "next";

type Locale = "en" | "ar";

const baseUrl = "https://eshark.com";

export function createPageMetadata(
	locale: Locale,
	page: {
		slug: string; // e.g. "about", "contact", "" for home
		title: string;
		description: string;
		keywords: string;
		image?: string;
	}
): Metadata {
	const url = page.slug
		? `${baseUrl}/${locale}/${page.slug}`
		: `${baseUrl}/${locale}`;
	const image = page.image || "/images/og-eshark-3.jpeg";

	return {
		title: page.title,
		description: page.description,
		keywords: page.keywords,
		alternates: {
			canonical: url,
			languages: {
				en: page.slug ? `${baseUrl}/en/${page.slug}` : `${baseUrl}/en`,
				ar: page.slug ? `${baseUrl}/ar/${page.slug}` : `${baseUrl}/ar`,
				"x-default": baseUrl,
			},
		},
		openGraph: {
			type: "website",
			locale: locale === "en" ? "en_US" : "ar_AR",
			url,
			siteName: "E Shark",
			title: page.title,
			description: page.description,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: "E Shark LMS",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: page.title,
			description: page.description,
			images: [image],
		},
	};
}
