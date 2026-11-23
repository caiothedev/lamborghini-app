// Rotas acessíveis apenas para visitantes, usuários logados são enviados para a área do cliente
export const AUTH_ROUTES = ["/login", "/register", "/forgot-password"]

// Rotas que exigem autenticação
export const PROTECTED_ROUTES = ["/home"]

export const LOGIN_ROUTE = "/login"
export const AUTHENTICATED_HOME_ROUTE = "/home"
export const CALLBACK_PARAM = "callbackUrl"

export function matchesRoute(pathname: string, routes: readonly string[]) {
    return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

export type RouteDecision = { type: "next" } | { type: "redirect"; pathname: string; callbackUrl?: string }

// Decide o destino de uma requisição de acordo com o estado de autenticação
export function resolveRouteAccess(pathname: string, isAuthenticated: boolean): RouteDecision {
    if (!isAuthenticated && matchesRoute(pathname, PROTECTED_ROUTES)) {
        return { type: "redirect", pathname: LOGIN_ROUTE, callbackUrl: pathname }
    }

    if (isAuthenticated && matchesRoute(pathname, AUTH_ROUTES)) {
        return { type: "redirect", pathname: AUTHENTICATED_HOME_ROUTE }
    }

    return { type: "next" }
}

// Garante que o callback aponte para uma rota interna e evita open redirect
export function sanitizeCallbackUrl(value: string | null | undefined, fallback = AUTHENTICATED_HOME_ROUTE) {
    if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) {
        return fallback
    }
    return value
}