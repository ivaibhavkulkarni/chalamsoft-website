import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdminLoggedIn = request.cookies.get("adminLoggedIn")?.value === "true";

  if (request.nextUrl.pathname.startsWith("/admin") && !isAdminLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};