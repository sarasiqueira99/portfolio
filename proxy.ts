import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'portfolio2024'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow the login page and its API route through
  if (pathname === '/login' || pathname === '/api/login') {
    return NextResponse.next()
  }

  // Check for auth cookie
  const auth = request.cookies.get('auth')
  if (auth?.value === PASSWORD) {
    return NextResponse.next()
  }

  // Redirect to login
  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|public/).*)'],
}
