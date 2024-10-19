import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

import { PUBLIC_ROUTES, PROTECTED_SUB_ROUTES, LOGIN, ROOT } from "./lib/routes";

export async function middleware(request) {
  const { nextUrl } = request;
  const session = await auth();

  const isAuthenticated = !!session?.user;

  const isPublicRoute =
    PUBLIC_ROUTES.find(
      (route) => nextUrl.pathname.startsWith(route) || nextUrl.pathname === ROOT
    ) &&
    !PROTECTED_SUB_ROUTES.find((route) => nextUrl.pathname.includes(route));

  console.log(isAuthenticated, nextUrl.pathname);
  console.log("public route ? ", isPublicRoute);

  if (!isAuthenticated && !isPublicRoute) {
    return NextResponse.redirect(new URL(LOGIN, nextUrl));
  }
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
