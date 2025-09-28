import { Metadata } from "next";
import ContactContent from "./components/ContactContent";
import { createPageMetadata } from "@/lib/seo-metadata";

type Locale = "en" | "ar";

export async function generateMetadata({
	params,
}: {
	params: { locale: Locale };
}): Promise<Metadata> {
	if (params.locale === "en") {
		return createPageMetadata("en", {
			slug: "contact",
			title: "Contact E Shark - Get Support & Inquiries",
			description:
				"Contact E Shark for support, partnership opportunities, or general inquiries. Our team is here to help educators and institutions succeed.",
			keywords:
				"contact E Shark, LMS support, educator support, LMS inquiries, e-learning platform help",
		});
	} else {
		return createPageMetadata("ar", {
			slug: "contact",
			title: "اتصل بـ E Shark - الدعم والاستفسارات",
			description:
				"تواصل مع فريق E Shark للحصول على الدعم، فرص الشراكة، أو الاستفسارات العامة. نحن هنا لمساعدة المعلمين والمؤسسات التعليمية على النجاح.",
			keywords:
				"اتصل بـ E Shark, دعم LMS, دعم المعلمين, استفسارات LMS, منصة التعليم الإلكتروني",
		});
	}
}
export default function ContactPage() {
	return <ContactContent />;
}
