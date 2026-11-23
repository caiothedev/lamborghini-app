"use client"

import Link from "next/link"
import Logo from "./ui/Logo"
import ProfileAvatar from "./ui/ProfileAvatar"
import { useState } from "react"
import { t } from "@/_lib/i18n"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex flex-row items-center justify-center">
            <nav className="w-full flex flex-row items-center gap-3 md:gap-5 lg:gap-6">
                <div className="w-[33%] flex flex-row items-center justify-start">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        id="menu-button"
                        className="p-2 flex flex-row items-center justify-center gap-2 rounded-lg hover:bg-middleground transition-fast"
                    >
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="var(--white-text)">
                            <path
                                d={isMenuOpen ? "M5 5L19 19" : "M2 5H22"}
                                stroke="var(--white-text)"
                                strokeWidth="1.5"
                            />
                            <path
                                d={isMenuOpen ? "M12 12L12 12" : "M2 12H22"}
                                stroke="var(--white-text)"
                                strokeWidth="1.5"
                            />
                            <path
                                d={isMenuOpen ? "M19 5L5 19" : "M2 19H22"}
                                stroke="var(--white-text)"
                                strokeWidth="1.5"
                            />
                        </svg>
                        MENU
                        <div className={`absolute modal-overlay ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
                            <div className="p-4">
                                
                            </div>
                        </div>
                    </button>
                </div>
                <div className="w-[33%] flex items-center justify-center">
                    <Link href="/" className="size-18 p-2 flex items-center justify-center hover:scale-105 active:scale-98 transition-fast">
                        <Logo />
                    </Link>
                </div>
                <div className="w-[33%] flex items-center justify-end gap-3 md:gap-5">
                    <Link href="/search" id="search-button">
                        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="var(--white-text)">
                            <path d="M14 2C9.58905 2 6.00005 5.589 6.00005 10C6.00005 12.043 6.77005 13.91 8.03605 15.325L2.14905 21.145L2.85205 21.855L8.74705 16.028C10.2009 17.3007 12.0678 18.0015 14 18C18.411 18 22 14.411 22 10C22 5.589 18.411 2 14 2ZM14 17C10.14 17 7.00005 13.86 7.00005 10C7.00005 6.14 10.14 3 14 3C17.86 3 21 6.14 21 10C21 13.86 17.86 17 14 17Z" />
                        </svg>
                    </Link>
                    <button id="auth-button">
                        <ProfileAvatar size={30} />
                    </button>
                </div>
            </nav>
        </header>
    )
}