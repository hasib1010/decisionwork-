"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function LogoMark() {
    return (
        <Image src="/logo.jpeg" width={240} height={240} alt="DecisionWorks logo" />
    );
}

const navLinks = [
    { href: "/",        label: "Overview"     },
    { href: "/process", label: "Process"      },
    { href: "/cases",   label: "Case Studies" },
    { href: "/#engage", label: "Engage"       },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-white py-2 backdrop-blur-md border-b  border-[#e8e8e8]">
            <div className="max-w-[1300px] mx-auto px-8 py-2">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4">
                        <LogoMark />
                    </Link>

                    {/* Desktop nav — unchanged */}
                    <nav className="hidden md:flex gap-1">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`nav-link font-mono text-[12px] tracking-[0.02em] px-4 py-2 transition-colors duration-200 ${
                                    pathname === l.href
                                        ? "text-[#1a1a1a] active"
                                        : "text-[#5a5a5a] hover:text-[#1a1a1a]"
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
                                className="block w-full h-[1.5px] bg-[#1a1a1a] transition-all duration-300"
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

            {/* Mobile nav — slides down below header */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#e8e8e8] bg-white ${
                    menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col divide-y divide-[#e8e8e8]">
                    {navLinks.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-mono text-[13px] tracking-[0.04em] uppercase px-8 py-5 transition-colors duration-200 ${
                                pathname === l.href
                                    ? "text-[#1a1a1a] bg-[#f3f3f3]"
                                    : "text-[#5a5a5a] hover:text-[#1a1a1a] hover:bg-[#f3f3f3]"
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