import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose'; // Use 'jose' because standard 'jsonwebtoken' doesn't work in Edge Middleware

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "netsui_secret_corridor_2026"
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Get the token from the cookies
  const token = request.cookies.get('adminToken')?.value;

  // 2. Define which routes are protected
  const isAdminRoute = pathname.startsWith('/admin');
  const isAuthPage = pathname.startsWith('/admin/auth');

  // 3. Logic: If trying to access admin pages without a token, redirect to login
  if (isAdminRoute && !isAuthPage) {
    if (!token) {
      return NextResponse.redirect(new URL('/admin/auth', request.url));
    }

    try {
      // Verify if the token is actually valid
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      // If token is expired or fake, kick them back to login
      return NextResponse.redirect(new URL('/admin/auth', request.url));
    }
  }

  // 4. Logic: If already logged in, don't let them go back to the login page
  if (isAuthPage && token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.redirect(new URL('/admin/view-registrations', request.url));
    } catch (err) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

// 5. Tell Next.js which paths this middleware should run on
export const config = {
  matcher: ['/admin/:path*'],
};