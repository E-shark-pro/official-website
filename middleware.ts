// import { NextRequest, NextResponse } from 'next/server'

// const PUBLIC_FILE = /\.(.*)$/

// export default async function middleware(req: NextRequest) {
//     if (
//         req.nextUrl.pathname.startsWith('/_next') ||
//         req.nextUrl.pathname.includes('/api/') ||
//         PUBLIC_FILE.test(req.nextUrl.pathname)
//     ) {
//         return
//     }

//     if (req.nextUrl.locale === 'default') {
//         const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'

//         return NextResponse.redirect(
//             new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//         )
//     }
// }
import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};