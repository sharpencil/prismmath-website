'use client';

import { motion } from 'framer-motion';
import { Ruler, BookOpen, BarChart3, Target } from 'lucide-react';

const tracks = [
    {
        grade: "Grades 2-5",
        title: "Junior Lab",
        description: "Building visual logic and model-drawing using the renowned Singapore Math method.",
        icon: Ruler,
        color: "from-blue-500 to-cyan-400",
        delay: 0
    },
    {
        grade: "Grades 6-9",
        title: "Structural Series",
        description: "Mastering the architecture of Algebra and Geometry using university-prep honors texts.",
        icon: BookOpen,
        color: "from-purple-500 to-indigo-500",
        delay: 0.1
    },
    {
        grade: "Grades 10-12",
        title: "Advanced Analysis",
        description: "Elite preparation for Pre-Calculus, AP Calculus BC+, and AP Statistics.",
        icon: BarChart3,
        color: "from-emerald-500 to-teal-400",
        delay: 0.2
    },
    {
        grade: "Test Prep",
        title: "The 800-Club",
        description: "Digital SAT Interface Optimization and AMC/AIME competitive systems mastery.",
        icon: Target,
        color: "from-orange-500 to-amber-500",
        delay: 0.3
    }
];

export default function Tracks() {
    return (
        <section id="tracks" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Academic Tracks</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive  pipeline from elementary school to university admission.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: track.delay }}
                            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Gradient Blob Background */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${track.color} opacity-10 rounded-bl-[100px] transition-all group-hover:scale-150 duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${track.color} text-white shadow-lg`}>
                                        <track.icon size={24} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
                                        {track.grade}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-600 transition-colors">
                                    {track.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {track.description}
                                </p>

                                <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-accent-text transition-colors mt-auto">
                                    View Curriculum
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
