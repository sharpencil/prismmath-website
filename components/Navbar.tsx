'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Programs', href: '/programs' },
        { name: 'About', href: '/about' },
        { name: 'Investment', href: '/investment' },
    ];

    return (
        <motion.nav
            className={twMerge(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        {/* Placeholder for the user's logo. User needs to add 'logo.png' to public folder or update src */}
                        <img src="/logo.png" alt="PRISMMath Logo" className="object-contain w-full h-full" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-serif text-primary tracking-tight leading-none">
                            <span className="font-bold">PRISM</span>
                            <span className="font-normal">Math</span>
                        </span>
                        <span className="text-[0.6rem] uppercase tracking-[1.23em] text-primary/60 font-sans font-medium pl-0.5">
                            Academy
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-primary/80 hover:text-accent-text transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full shadow-[0_4px_14px_0_rgba(0,229,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,229,255,0.23)] hover:scale-105 transition-all duration-200"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100"
                >
                    <div className="px-6 py-4 flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-primary font-medium py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="w-full text-center px-6 py-3 bg-accent text-primary font-bold rounded-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
