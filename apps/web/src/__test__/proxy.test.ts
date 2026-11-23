import { describe, expect, it } from "vitest"
import { NextRequest } from "next/server"
import { ACCESS_TOKEN_COOKIE, proxy } from "./proxy"

function createRequest(path: string, token?: string) {
    const request = new NextRequest(new URL(path, "http://localhost:3000"))
    if (token) {
        request.cookies.set(ACCESS_TOKEN_COOKIE, token)
    }
    return request
}

describe("proxy", () => {
    it("redirects guests from protected routes to login keeping the callback", () => {
        const response = proxy(createRequest("/home/garage?car=revuelto"))
        const location = new URL(response.headers.get("location") ?? "")

        expect(response.status).toBe(307)
        expect(location.pathname).toBe("/login")
        expect(location.searchParams.get("callbackUrl")).toBe("/home/garage?car=revuelto")
    })

    it("redirects authenticated users from login to the customer area", () => {
        const response = proxy(createRequest("/login", "token"))
        const location = new URL(response.headers.get("location") ?? "")

        expect(location.pathname).toBe("/home")
        expect(location.search).toBe("")
    })

    it("lets requests continue when no redirect is needed", () => {
        const response = proxy(createRequest("/models"))

        expect(response.headers.get("location")).toBeNull()
        expect(response.headers.get("x-middleware-next")).toBe("1")
    })
})