"use client"

import { t } from "@/_lib/i18n"

interface ErrorPageProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-col gap-2">
                <h1 className="title-text text-5xl">{t("errors.unexpected.title")}</h1>
                <p>{t("errors.unexpected.description")}</p>
            </div>
        </main>
    )
}