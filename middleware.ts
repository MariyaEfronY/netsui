import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "netsui_secret_corridor_2026",
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("adminToken")?.value;

  // 1. Define Authentication Paths (Public)
  const isAuthPage =
    pathname === "/admin/login" || pathname === "/admin/register";
  const isAdminPath = pathname.startsWith("/admin");

  // 2. PROTECTION LOGIC
  // If user is trying to access any admin page BUT is not on login/register
  if (isAdminPath && !isAuthPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Verify token integrity
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (err) {
      // Token is expired or invalid - clear it and force login
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("adminToken");
      return response;
    }
  }

  // 3. LOGGED-IN REDIRECT
  // If user is already logged in, don't let them see login/register pages
  if (isAuthPage && token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.redirect(new URL("/admin", request.url));
    } catch (err) {
      // Token bad, allow them to stay on login page to re-authenticate
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

// 4. MATCHER CONFIG
export const config = {
  matcher: ["/admin/:path*"],
};
