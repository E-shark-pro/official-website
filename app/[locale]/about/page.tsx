import { Metadata } from "next";

import AboutContent from "./components/AboutContent";
import { createPageMetadata } from "@/lib/seo-metadata";

type Locale = "en" | "ar";

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	if (params.locale === "en") {
		return createPageMetadata("en", {
			slug: "about",
			title: "About E Shark - LMS for Teachers & Educators",
			description:
				"Learn more about E Shark LMS, the platform built for teachers, instructors, and schools to create and sell online courses.",
			keywords: "about E Shark, LMS for teachers, e-learning platform",
		});
	} else {
		return createPageMetadata("ar", {
			slug: "about",
			title: "عن E Shark - منصة LMS للمعلمين والمدارس",
			description:
				"تعرف على المزيد عن منصة E Shark LMS المصممة لمساعدة المعلمين والمدارس على إنشاء وبيع الدورات التعليمية عبر الإنترنت.",
			keywords: "عن E Shark, LMS للمعلمين, منصة التعليم الإلكتروني",
		});
	}
}

export default function AboutPage() {
	return <AboutContent />;
}
