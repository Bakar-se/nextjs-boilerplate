import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ✅ Define public (unprotected) routes
const publicRoutes = ["/", "/auth/sign-in", "/auth/register", "/about", "/contact"];

// ✅ Protected routes with role-based access control
const protectedRoutes = [
  {
    path: "/dashboard",
    roles: ["ADMIN", "USER"],
  },
];

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = (req as any).nextauth?.token; // 👈 Fix TypeScript here

    // 🛡️ Check if route has specific role requirements
    const protectedRoute = protectedRoutes.find((route) =>
      pathname.startsWith(route.path)
    );

    if (protectedRoute) {
      console.log(`🛡️ Route has role requirements:`, protectedRoute.roles);
      if (!protectedRoute.roles.includes(token?.role)) {

        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // 🟢 Allow all public routes
        if (publicRoutes.some((route) => pathname.startsWith(route))) {
          console.log(`✅ Public route allowed: ${pathname}`);
          return true;
        }

        // 🔐 All other routes require authentication
        console.log(`🔑 Checking auth for: ${pathname}, token:`, !!token);
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals & static assets
    '/((?!_next|api|_static|_vercel|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
};
