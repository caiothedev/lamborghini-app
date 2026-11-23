import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import ErrorPage from "@/app/error"
import NotFound from "@/app/not-found"
import { t } from "@/_lib/i18n"

describe("NotFound", () => {
    it("explains the error and links back to the home page", () => {
        render(<NotFound />)

        expect(screen.getByRole("heading", { level: 1, name: t("errors.notFound.title") })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: t("common.backHome") })).toHaveAttribute("href", "/")
    })
})

describe("ErrorPage", () => {
    it("calls reset when the user retries", async () => {
        const user = userEvent.setup()
        const reset = vi.fn()
        render(<ErrorPage error={new Error("boom")} reset={reset} />)

        await user.click(screen.getByRole("button", { name: t("errors.unexpected.retry") }))

        expect(reset).toHaveBeenCalledTimes(1)
    })
})