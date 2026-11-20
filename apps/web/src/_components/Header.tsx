import Link from "next/link"
import Logo from "./ui/Logo"

export default function Header() {
    return (
        <header className="w-full flex flex-row items-center justify-center">
            <nav className="flex flex-row items-center gap-3 md:gap-5 lg:gap-6">
                <div className="w-[33%] flex flex-row items-center justify-start">
                    <button id="menu-button">
                        
                    </button>
                </div>
                <div className="w-[33%] flex items-center justify-center">
                    <Link href="/" className="size-18 p-2 flex items-center justify-center hover:scale-105 active:scale-98 transition-fast">
                        <Logo />
                    </Link>
                </div>
                <div className="w-[33%] flex items-center justify-end gap-3">
                    <button id="search-button">

                    </button>
                    <button id="auth-button">

                    </button>
                </div>
            </nav>
        </header>
    )
}