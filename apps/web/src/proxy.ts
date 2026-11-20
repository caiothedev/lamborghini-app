import { NextRequest, NextResponse } from "next/server"

const PUBLIC_ROUTES = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
]

const PROTECTED_ROUTES = [
    "/home",
    "/dashboard",
    "/garage",
    "/profile",
]

function matchesRoute(pathname: string, routes: string[]) {
    return routes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    )
}

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    const accessToken = request.cookies.get("access_token")?.value

    const isPublicRoute = matchesRoute(pathname, PUBLIC_ROUTES)
    const isProtectedRoute = matchesRoute(pathname, PROTECTED_ROUTES)

    const isAuthenticated = Boolean(accessToken)
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
    ],
}