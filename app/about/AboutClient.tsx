'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Founder from "@/components/Founder";
import { motion } from "framer-motion";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Mission Section */}
            <section className="pt-40 pb-20 px-6 bg-white">
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h5 className="text-accent-text font-bold tracking-widest uppercase mb-6 text-sm">Our Mission</h5>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-8">
                            Principle-First Learning. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">
                                University-Track Excellence.
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* PRISM Method Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Card: Structural Intuition */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] w-full max-w-md mx-auto bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col items-center justify-center p-8 group"
                        >
                            {/* Blueprint Grid Background */}
                            <div className="absolute inset-0 z-0 opacity-[0.05] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* 3D Prism Image */}
                            <div className="relative z-10 w-64 h-64 mb-8">
                                <motion.div
                                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                                    className="w-full h-full relative"
                                >
                                    {/* Note: Using Image component as per Next.js best practices, assuming hero-prism.png exists in public */}
                                    <img
                                        src="/hero-prism.png"
                                        alt="Prism Structure"
                                        className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply rounded-3xl"
                                    />
                                </motion.div>
                            </div>

                            <h3 className="relative z-10 text-3xl font-bold text-slate-800 tracking-tight">Structural Intuition</h3>
                        </motion.div>

                        {/* Right Content: The Method */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-3">The PRISM Method</h2>
                                <p className="text-sm font-medium tracking-widest text-accent-text uppercase">
                                    <span className="font-bold">P</span>rinciples • <span className="font-bold">R</span>igor • <span className="font-bold">I</span>nsight • <span className="font-bold">S</span>ystems • <span className="font-bold">M</span>astery
                                </p>
                            </div>

                            <div className="w-20 h-1 bg-accent rounded-full"></div>

                            <blockquote className="text-2xl md:text-3xl font-light leading-snug text-slate-700 border-l-4 border-accent pl-6 py-2">
                                "100% Derivation, <br />
                                <span className="font-bold text-primary">Zero Rote Memorization.</span>"
                            </blockquote>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                We treat mathematics as a logical architecture. By teaching students to derive fundamental principles rather than memorizing rules, we build the cognitive modeling skills necessary for success in elite engineering and advanced sciences. This is the &quot;University Operating System&quot; for the ambitious mind.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section (Reused) */}
            <Founder />

            <Footer />
        </main>
    );
}
