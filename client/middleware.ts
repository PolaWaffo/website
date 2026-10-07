// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
})

export function middleware(request: NextRequest) {
  console.log('Middleware path:', request.nextUrl.pathname)
  const { pathname } = request.nextUrl
  
  

  if (pathname === '/') {
    const url = request.nextUrl.clone()
    url.pathname = '/fr'
    return NextResponse.rewrite(url)
  }
  

  // Delegate all other paths to the i18n middleware
  return I18nMiddleware(request)
}

export const config = {
  

  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
