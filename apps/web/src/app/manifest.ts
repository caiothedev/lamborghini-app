import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Lamborghini — ",
        short_name: "LAMBORGHINI",
        description: "",
        id: "/",
        start_url: "/home",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#101010",
        theme_color: "#D8A016",
        lang: "pt-BR",
        dir: "ltr",
        categories: ["automotive", "sports", "luxury"],
        icons: [
            {
                src: "/icons/icon.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "any",
            },
            {
                src: "/icons/apple-icon.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    }
}