import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    // Pacotes internos do monorepo são publicados como TypeScript e precisam ser transpilados
    transpilePackages: ["@lamborghini/translations", "@lamborghini/validators"],
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    { key: "X-Frame-Options", value: "DENY" },
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                ],
            },
        ]
    },
}

export default nextConfig