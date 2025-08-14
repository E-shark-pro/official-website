import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches
    defaultLocale: 'en',

    // pathnames: {
    //     "/": {
    //         en: "/",
    //         ar: "/"
    //     },
    //     "/about": {
    //         en: "/about",
    //         ar: "/حولنا"
    //     },
    //     "/contact": {
    //         en: "/contact",
    //         ar: "/تواصل-معنا"
    //     },
    // }
    pathnames: {
        "/": {
            en: "/",
            ar: "/"
        },
        "/about": {
            en: "/about",
            ar: "/about"
        },
        "/contact": {
            en: "/contact",
            ar: "/contact"
        },
    }
});