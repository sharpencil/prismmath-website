'use client';

import { motion } from 'framer-motion';

export default function ResourcePreview() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                            Peek into the Portal
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            No more messy binders. Our proprietary student portal tracks mastery in real-time. Students get instant feedback on digital worksheets that adapt to their skill level.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                "Real-time mastery tracking",
                                "Adaptive problem sets",
                                "Instant feedback loops",
                                "Parent dashboard access"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-primary font-medium">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        {/* Abstract Mockup Container */}
                        <div className="relative rounded-2xl bg-white p-2 shadow-2xl border border-gray-200 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video relative group">
                                {/* Mock UI Header */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>

                                {/* Mock UI Content */}
                                <div className="pt-14 p-8 grid grid-cols-12 gap-4 h-full">
                                    {/* Sidebar */}
                                    <div className="col-span-3 space-y-3">
                                        <div className="h-2 w-20 bg-gray-300 rounded mb-6"></div>
                                        <div className="h-8 w-full bg-primary/10 rounded-lg"></div>
                                        <div className="h-8 w-full bg-white rounded-lg border border-gray-200"></div>
                                        <div className="h-8 w-full bg-white rounded-lg border border-gray-200"></div>
                                    </div>
                                    {/* Main Content */}
                                    <div className="col-span-9 bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
                                        <div className="flex justify-between items-center">
                                            <div className="h-6 w-32 bg-gray-200 rounded"></div>
                                            <div className="h-8 w-24 bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center rounded-full">98% Mastery</div>
                                        </div>
                                        <div className="h-32 w-full bg-gray-50 rounded-lg border border-dashed border-gray-300 flex items-center justify-center">
                                            <span className="text-gray-400 text-sm">Calculus Problem #42 Visualization</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-4 w-full bg-gray-100 rounded"></div>
                                            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                                            <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                                    <button className="px-6 py-3 bg-accent text-primary font-bold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        View Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
