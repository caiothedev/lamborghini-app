import Link from "next/link"

export default function LinkButton({ href }: { href: string }) {
    return (
        <Link href={href} className="">
            Link
        </Link>
    )
}