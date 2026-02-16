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



            <FAQ />
            <Footer />
        </main>
    );
}
