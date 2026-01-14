"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink() {
    const pathname = usePathname()

    const navData = [
        { id: 1, title: "Overview", link: "/" },
        { id: 2, title: "Projects", link: "/projects" },
        { id: 3, title: "Contact", link: "/contacts" },
        { id: 4, title: "Blog", link: "/blog" },
    ]

    return (
        <nav className="flex gap-6">
            {navData.map((nav) => {
                const isActive = pathname === nav.link

                return (
                    <Link
                        key={nav.id}
                        href={nav.link}
                        className={`
              relative
              text-sm
              transition-colors duration-300
              ${isActive && "drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"}
              ${isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"}
            `}
                    >
                        {nav.title}

                        {/* Underline */}
                        <span
                            className={`
                absolute
                left-0
                -bottom-1
                h-px
                bg-zinc-100
                transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
                        />
                    </Link>
                )
            })}
        </nav>
    )
}
