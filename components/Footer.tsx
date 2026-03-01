// Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand Identity */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10">
                                {/* Logo image - exact match to navbar */}
                                <img src="/logo.png" alt="PRISMMath Logo" className="object-contain w-full h-full" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif text-white tracking-tight leading-none">
                                    <span className="font-bold">PRISM</span>
                                    <span className="font-normal">Math</span>
                                </span>
                                <span className="text-[0.6rem] uppercase tracking-[1.23em] text-slate-500 font-sans font-medium pl-0.5">
                                    Academy
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Architecting the next generation of mathematical thinkers in Austin.
                        </p>
                        <p className="text-xs text-slate-500 italic font-medium">
                            Curated by Dr. Young Ryu, PhD
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-slate-400 hover:text-accent transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/programs" className="text-slate-400 hover:text-accent transition-colors">Programs</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-slate-400 hover:text-accent transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/investment" className="text-slate-400 hover:text-accent transition-colors">Investment</Link>
                            </li>
                            <li>
                                <Link href="/korean" className="text-slate-400 hover:text-accent transition-colors">한국어</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-accent font-bold hover:text-white transition-colors">Get Started</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: The Tracks */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">The Tracks</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/programs/junior-lab" className="text-slate-400 hover:text-accent transition-colors">Junior Lab Series (2-5)</Link>
                            </li>
                            <li>
                                <Link href="/programs/bridge" className="text-slate-400 hover:text-accent transition-colors">Bridge Series (Grade 6)</Link>
                            </li>
                            <li>
                                <Link href="/programs/structural" className="text-slate-400 hover:text-accent transition-colors">Structural Series (7-9)</Link>
                            </li>
                            <li>
                                <Link href="/programs/advanced-analysis" className="text-slate-400 hover:text-accent transition-colors">Advanced Analysis (9-12)</Link>
                            </li>
                            <li>
                                <Link href="/programs/professional-elite" className="text-slate-400 hover:text-accent transition-colors">Professional Elite (SAT/AP)</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Location & Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Location & Contact</h4>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div>
                                <p className="font-bold text-white text-xs uppercase tracking-wide mb-1">Private Lab</p>
                                <p>Northwest Austin</p>
                            </div>
                            <div>
                                <p className="font-bold text-white text-xs uppercase tracking-wide mb-1">Serving</p>
                                <p className="leading-relaxed">Spicewood Springs/Anderson Mill/Avery Ranch/Cedar Park area</p>
                            </div>
                            <div className="pt-2">
                                <a href="mailto:dr@prismmath.com" className="text-white hover:text-accent font-medium transition-colors block">
                                    dr@prismmath.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} PRISMMath Academy. All rights reserved. Built in Austin, TX.</p>
                </div>
            </div>
        </footer>
    );
}
