import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Header from "@/_components/Header"
import Footer from "@/_components/Footer"
import "./globals.css"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    display: "swap",
})

const siteUrl = "https://lamborghini.com"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Lamborghini | Desde que tornamos isso possível!",
        template: "%s | Lamborghini",
    },
    description: "Encontre modelos da Lamborghini, novos lançamentos, as últimas notícias, eventos e concessionárias ao redor do mundo.",
    applicationName: "Lamborghini",
    authors: [{ name: "Caio Oliveira" }],
    creator: "Caio Oliveira",
    publisher: "Lamborghini",
    category: "automotive",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "/",
        siteName: "Lamborghini",
        title: "Lamborghini | Desde que tornamos isso possível!",
        description: "Descubra os superesportivos Lamborghini, conheça os lançamentos, explore novidades e encontre concessionárias.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Lamborghini — Superesportivos",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Lamborghini | Superesportivos",
        description: "Encontre modelos da Lamborghini, novos lançamentos, as últimas notícias, eventos e concessionárias ao redor do mundo.",
        images: ["/images/og-image.jpg"],
    },
    alternates: {
        canonical: "/",
        languages: {
            "pt-BR": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="pt-BR" className={`${roboto.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
