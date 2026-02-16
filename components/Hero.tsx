'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
            {/* Background Grid Pattern - Very light, clean blueprint grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#001F3F_1px,transparent_1px),linear-gradient(to_bottom,#001F3F_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-text font-medium text-sm tracking-wide mb-4">
                        AUSTIN&apos;S PREMIER MATH ACADEMY
                    </div>

                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
                        Stop Drilling. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-accent">
                            Start Architecting.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        We replace the &quot;worksheet grind&quot; with Ph.D.-led engineering logic for grades 2 through 12.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer inline-block border-2 border-transparent"
                            >
                                Start Conversation
                            </motion.div>
                        </Link>

                        <Link href="/programs">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white border-2 border-primary/10 text-primary font-bold rounded-lg hover:bg-gray-50 transition-all shadow-sm cursor-pointer inline-block"
                            >
                                View Master Syllabus
                            </motion.div>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Column: 3D Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[500px] w-full flex items-center justify-center"
                >
                    {/* Hero Graphic */}
                    <div className="relative w-full max-w-lg">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <Image
                                src="/hero-prism-white.png"
                                alt="Prism Math Academy Hero Prism"
                                width={600}
                                height={600}
                                priority
                                className="w-full h-auto object-contain drop-shadow-2xl mix-blend-multiply rounded-xl"
                            />
                        </motion.div>

                        {/* Floating UI Elements */}

                        {/* Card 1: Top Right - University Track */}
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                            className="absolute top-0 -right-4 md:right-0 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 z-20 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold border border-green-100 shadow-sm">
                                    A+
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-tight">UNIVERSITY TRACK</div>
                                    <div className="font-bold text-primary text-sm">Calculus BC</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Bottom Left - Junior Lab */}
                        <motion.div
                            animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1.5 }}
                            className="absolute bottom-10 -left-4 md:left-0 bg-white/70 backdrop-blur-md p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 z-20 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100 shadow-sm">
                                    ∑
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-tight">JUNIOR LAB</div>
                                    <div className="font-bold text-primary text-sm">Logic & Proofs</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

