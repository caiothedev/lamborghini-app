import { MetadataRoute } from "next"

// Revalida o sitemap a cada 1h para evitar disparar as queries pesadas
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://lamborghini.com"

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl,                lastModified: new Date(), changeFrequency: "daily",   priority: 0.8 },
        { url: `${baseUrl}/support`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ]

    return [
        ...staticRoutes
    ]
}