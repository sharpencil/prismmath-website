'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramRoadmap from "@/components/ProgramRoadmap";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";

export default function Programs() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 bg-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h5 className="text-accent-text font-bold tracking-widest uppercase mb-6 text-sm">The University-Track Curriculum</h5>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-8">
                            A Principle-First Roadmap <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">
                                From 2nd Grade to University Calculus.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                            Designed by Dr. Young Ryu, PhD, to provide a seamless ascent to elite engineering and scientific mastery.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 5-Series Framework */}
            <ProgramRoadmap />

            {/* Competitive Logic & AMC Prep Section */}
            <section className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-6 uppercase tracking-wider">
                            Advanced Track
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Competitive Logic & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">AMC Prep</span></h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                            To ensure maximal readiness, PRISMMath has moved away from 'subject-based' long-tail courses to a highly compact, <strong className="text-slate-900">18-week contest-based structure.</strong>
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12 items-stretch">
                        {/* COMP-800 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <span className="inline-block text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded mb-2">COMP-800</span>
                                <h3 className="text-2xl font-bold text-primary">AMC 8 Fast-Track</h3>
                            </div>
                            <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
                            
                            <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                                An elite program transitioning high-performing students to competitive problem-solving heuritsics. Master <strong className="text-blue-600">Structural Logic</strong> to decompose complex problems and build a foundation for future STEM success.
                            </p>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">18 Weeks</span>
                            </div>

                            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 flex-grow mb-6">
                                <h4 className="font-bold text-blue-900 mb-2">Target Goal:</h4>
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    High Distinction on AMC 8 / Mathcounts
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-20 shrink-0 bg-gray-200 rounded-md shadow-inner overflow-hidden relative">
                                        <img src="/images/textbooks/CoverFinal_MasteringAmc8.avif" alt="Mastering AMC 8" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-1">Primary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">Mastering AMC 8 (OmegaLearn)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                    <div className="flex gap-2 shrink-0">
                                        <div className="w-10 h-14 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/aops-counting.jpg" alt="AoPS Counting" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-10 h-14 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/aops-intro-number-theory.gif" alt="AoPS Number Theory" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Secondary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">AoPS Introduction to Counting & Probability and Introduction to Number Theory</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMP-1000 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <span className="inline-block text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded mb-2">COMP-1000</span>
                                <h3 className="text-2xl font-bold text-primary">AMC 10/12 Strategy</h3>
                            </div>
                            <div className="w-12 h-1 bg-indigo-500 rounded-full mb-4"></div>

                            <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                                A "Portfolio Closer" for top 2.5% competitors aiming for the <strong className="text-slate-900">AIME</strong>. Focuses on <strong className="text-indigo-600">Computational Dominance</strong>—mastering advanced algebraic identities, recursive probability, and synthetic geometry for Tier-1 university distinction.
                            </p>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">18 Weeks</span>
                            </div>

                            <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100 flex-grow mb-6">
                                <h4 className="font-bold text-indigo-900 mb-2">Target Goal:</h4>
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    AIME Qualification
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-20 shrink-0 bg-gray-200 rounded-md shadow-inner overflow-hidden relative">
                                        <img src="/images/textbooks/CoverFinal_MasteringAmc1012.avif" alt="Mastering AMC 10/12" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-1">Primary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">Mastering AMC 10/12 (OmegaLearn)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                    <div className="flex gap-2 shrink-0">
                                        <div className="w-10 h-14 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/aops-vol1.jpeg" alt="AoPS Volume 1" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-10 h-14 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/aops-vol2.jpg" alt="AoPS Volume 2" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Secondary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">The Art of Problem Solving (AoPS) Vol. 1 & 2</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMP-AIME */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
                        >
                            <div className="mb-4">
                                <span className="inline-block text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded mb-2">COMP-AIME</span>
                                <h3 className="text-2xl font-bold text-primary">The Invitational Lab</h3>
                            </div>
                            <div className="w-12 h-1 bg-accent rounded-full mb-4"></div>

                            <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                                The pinnacle of our logic sequence. This intellectual proving ground shifts focus to <strong className="text-accent">Extreme Heuristics</strong>—inventing new pathways for problems with no standard solutions, elevating AIME qualifiers to USAMO contenders.
                            </p>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-1 rounded-md">12-18 Weeks</span>
                            </div>

                            <div className="bg-orange-50/50 p-5 rounded-2xl border border-orange-100 flex-grow mb-6">
                                <h4 className="font-bold text-orange-900 mb-2">Target Goal:</h4>
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    AIME Mastery / USAMO Path
                                </p>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-2 shrink-0">
                                        <div className="w-12 h-16 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/aops-vol2.jpg" alt="AoPS Volume 2" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Primary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">AoPS Vol 2 / AIME Past Papers</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                    <div className="flex gap-2 shrink-0">
                                        <div className="w-10 h-14 bg-gray-200 rounded shadow-inner overflow-hidden relative">
                                            <img src="/images/textbooks/CoverFinal_MasteringAmc1012.avif" alt="Mastering AMC 10/12" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Secondary Resource</h4>
                                        <p className="text-sm text-slate-700 font-medium leading-snug">Mastering AMC 10/12 (OmegaLearn) For Formula Verification.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Why Prism Callout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-primary text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8 shadow-xl"
                    >
                        {/* Abstract background shape */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full opacity-10 blur-3xl translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>

                        <div className="md:w-1/3 shrink-0">
                            <h3 className="text-2xl font-serif font-bold mb-2">Why PrismMath?</h3>
                            <div className="w-12 h-1 bg-accent rounded-full"></div>
                        </div>
                        <div className="md:w-2/3 border-l-2 border-slate-700 pl-6 md:pl-8">
                            <p className="text-lg text-slate-200 leading-relaxed">
                                Dr. Ryu applies <strong className="text-white">PhD-level systems thinking</strong> to help students decompose complex competition problems from <span className="text-accent font-medium">first principles</span>, rather than relying on rote shortcuts. This builds true mathematical resilience.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <FAQ />
            <Footer />
        </main>
    );
}
