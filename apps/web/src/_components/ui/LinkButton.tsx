import Link from "next/link"
import type { ReactNode } from "react"

interface LinkButtonProps {
    href: string
    children: ReactNode
    className?: string
}

export default function LinkButton({ href, children, className = "" }: LinkButtonProps) {
    return (
        <Link href={href} className="">
            Link
        </Link>
    )
}