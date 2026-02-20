"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/residential-position-determination", label: "Residential" },
    { href: "/strategic-evaluation", label: "Strategic" },
    { href: "/process", label: "Method" },
    { href: "/#engage", label: "Engage" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-[#e2e8f0]">
            <div className="max-w-[1100px] mx-auto px-8 py-2">
                <div className="flex justify-between items-center h-16">

                    {/* Logo — text-based per instructions, no decorative image */}
                    <Link href="/" className="flex flex-col leading-tight no-underline">
                        <Image src="/logo.jpeg" width={250} height={320} alt="DecisionWorks Logo" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-1">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`nav-link font-sans text-[16px] tracking-[0.03em] px-4 py-2 transition-colors duration-200 ${pathname === l.href
                                        ? "text-[#0f1f38] active"
                                        : "text-[#4a5568] hover:text-[#0f1f38]"
                                    }`}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 bg-transparent border-0 cursor-pointer p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="block w-full h-[1.5px] bg-[#0f1f38] transition-all duration-300"
                                style={{
                                    transform: menuOpen
                                        ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                                            : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                                                : "scaleX(0)"
                                        : "none",
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }}
                            />
                        ))}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#e2e8f0] bg-white ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="flex flex-col divide-y divide-[#e2e8f0]">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-sans text-[13px] tracking-[0.04em] uppercase px-8 py-5 transition-colors duration-200 ${pathname === l.href
                                    ? "text-[#0f1f38] bg-[#f7f8fa]"
                                    : "text-[#4a5568] hover:text-[#0f1f38] hover:bg-[#f7f8fa]"
                                }`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}