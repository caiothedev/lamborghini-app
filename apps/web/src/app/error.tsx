"use client"

import { t } from "@/_lib/i18n"

interface ErrorPageProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
    return (
        <main></main>
    )
}