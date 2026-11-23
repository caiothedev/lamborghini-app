import type { Metadata } from "next"

export const metadata: Metadata = {
    robots: {
        index: false,
        googleBot: {
            index: false,
        },
    },
}

export default function HomeLayout({ children }: LayoutProps<"/">) {
    return (
        {children}
    )
}