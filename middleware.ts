import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { fallbackLng, languages } from './app/i18n/settings'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查支持的语言
  const pathnameIsMissingLocale = languages.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // 重定向到默认语言
  if (pathnameIsMissingLocale) {
    const locale = fallbackLng

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // 跳过所有内部路径 (_next)
    '/((?!_next|api|.*\\..*).*)',
  ],
}