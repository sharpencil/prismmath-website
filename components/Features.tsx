'use client';

import { motion } from 'framer-motion';
import { Atom, BookOpen, Cpu } from 'lucide-react';

const features = [
    {
        title: "Principle-First Learning",
        description: "We don't teach students to memorize formulas. We teach them to derive the source code of mathematics so they can solve any problem.",
        icon: Atom,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "University-Grade Curriculum",
        description: "Standard tutors use public school workbooks. We use the elite texts used by top-tier universities and engineering programs (Larson, Stewart, AoPS).",
        icon: BookOpen,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "The Engineering Edge",
        description: "Led by a former Professor of Industrial Engineering, we teach students to optimize logic, build mental models, and see the architecture behind the numbers.",
        icon: Cpu,
        color: "bg-emerald-100 text-emerald-600"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-white relative z-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The PRISM<span className="font-normal">Math</span> Difference</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
