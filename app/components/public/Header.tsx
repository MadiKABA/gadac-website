"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full shadow-md bg-white dark:bg-gray-900 fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo/gadac-logo.png"
                        alt="GADAC Logo"
                        width={70}
                        height={70}
                        className="rounded"
                    />
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        Accueil
                    </Link>
                    <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        À propos
                    </Link>
                    <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        Services
                    </Link>
                    <Link href="/references" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        Références
                    </Link>
                    <Link href="/blog" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]">
                        Contact
                    </Link>
                </nav>

                {/* Bouton devis */}
                <div className="hidden md:flex items-center">
                    <Button className="bg-blue-900 text-white font-semibold rounded-2xl px-4 py-2 hover:bg-[#E6C200]">
                        Demander un devis
                    </Button>
                </div>

                {/* Menu Mobile Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X className="h-6 w-6 text-gray-700 dark:text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Drawer Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-gray-900 shadow-lg flex flex-col gap-6 p-6 z-50"
                    >
                        {/* Close Button inside Drawer */}
                        <button
                            className="self-end"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="h-6 w-6 text-gray-700 dark:text-white" />
                        </button>

                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            À propos
                        </Link>
                        <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            Services
                        </Link>
                        <Link
                            href="/references"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            Références
                        </Link>
                        <Link
                            href="/blog"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-200 hover:text-[#1D3557]"
                        >
                            Contact
                        </Link>

                        <Button className="bg-blue-900 text-white font-semibold rounded-2xl px-4 py-2 hover:bg-[#E6C200]">
                            Demander un devis
                        </Button>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
