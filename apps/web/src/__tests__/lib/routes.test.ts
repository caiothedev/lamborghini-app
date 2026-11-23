import { describe, expect, it } from "vitest"
import { matchesRoute, resolveRouteAccess, sanitizeCallbackUrl } from "@/_lib/routes"

describe("matchesRoute", () => {
    const routes = ["/home", "/login"]

    it("matches exact routes", () => {
        expect(matchesRoute("/home", routes)).toBe(true)
    })

    it("matches nested routes", () => {
        expect(matchesRoute("/home/garage", routes)).toBe(true)
    })

    it("does not match routes that only share a prefix", () => {
        expect(matchesRoute("/homepage", routes)).toBe(false)
        expect(matchesRoute("/login-help", routes)).toBe(false)
    })
})

describe("resolveRouteAccess", () => {
    it("redirects guests from protected routes to login with a callback", () => {
        expect(resolveRouteAccess("/home/garage", false)).toEqual({
            type: "redirect",
            pathname: "/login",
            callbackUrl: "/home/garage",
        })
    })

    it("lets authenticated users access protected routes", () => {
        expect(resolveRouteAccess("/home/profile", true)).toEqual({ type: "next" })
    })

    it("redirects authenticated users away from auth routes", () => {
        expect(resolveRouteAccess("/login", true)).toEqual({ type: "redirect", pathname: "/home" })
        expect(resolveRouteAccess("/register", true)).toEqual({ type: "redirect", pathname: "/home" })
    })

    it("lets guests access auth routes and public pages", () => {
        expect(resolveRouteAccess("/login", false)).toEqual({ type: "next" })
        expect(resolveRouteAccess("/", false)).toEqual({ type: "next" })
        expect(resolveRouteAccess("/models", false)).toEqual({ type: "next" })
    })

    it("keeps public pages accessible for authenticated users", () => {
        expect(resolveRouteAccess("/", true)).toEqual({ type: "next" })
    })
})

describe("sanitizeCallbackUrl", () => {
    it("keeps internal paths", () => {
        expect(sanitizeCallbackUrl("/home/garage?tab=1")).toBe("/home/garage?tab=1")
    })

    it.each([null, undefined, "", "https://evil.com", "//evil.com", "/\\evil.com", "home"])(
        "falls back for unsafe value %s",
        (value) => {
            expect(sanitizeCallbackUrl(value)).toBe("/home")
        },
    )
})