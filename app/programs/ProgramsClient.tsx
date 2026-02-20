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
                            For students who have mastered the standard curriculum and seek higher-order challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Middle School */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-2">Middle School (Grades 6-8)</h3>
                            <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>
                            <p className="text-slate-600 mb-6 font-medium">Focus on the AMC 8 and AMC 10 competitions.</p>
                            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-900 mb-2">Core Competencies:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed"><strong className="text-slate-900">Heuristic Discovery:</strong> Developing intuitive problem-solving strategies outside standard algorithms.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed"><strong className="text-slate-900">Number Theory:</strong> Mastering concepts routinely excluded from traditional state and school curricula.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* High School */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-2">High School (Grades 9-12)</h3>
                            <div className="w-12 h-1 bg-accent rounded-full mb-6"></div>
                            <p className="text-slate-600 mb-6 font-medium">Focus on the AMC 10/12 and AIME readiness.</p>
                            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                                <h4 className="font-bold text-slate-800 mb-2">The Methodology:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed">Utilization of elite <strong className="text-slate-900">Art of Problem Solving (AoPS)</strong> resources.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed">Cultivating <strong className="text-slate-900">'Lateral Depth'</strong>—the ability to connect dispararate mathematical concepts to solve novel problems.</span>
                                    </li>
                                </ul>
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
