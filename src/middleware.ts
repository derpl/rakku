import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("rakku_session")?.value;
  const { pathname } = request.nextUrl;

  // Public paths
  const publicPaths = ["/login", "/api/auth"];
  const isPublic = publicPaths.some((path) => pathname.startsWith(path));

  // Admin paths (require auth)
  const adminPaths = ["/admin", "/dashboard"];
  const isAdmin = adminPaths.some((path) => pathname.startsWith(path));

  // If trying to access admin without auth, redirect to login
  if (isAdmin && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If already logged in and trying to access login, redirect to home
  if (isPublic && session) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
