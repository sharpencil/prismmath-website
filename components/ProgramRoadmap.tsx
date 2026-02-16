'use client';

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Rocket, Trophy } from "lucide-react";
import Link from "next/link";

const series = [
    {
        title: "Junior Lab Series",
        subtitle: "Elementary Logic",
        grades: "Grades 2-5",
        icon: Sparkles,
        color: "from-red-400 to-red-600",
        description: "Building the foundation of logical reasoning and joyful discovery through Singapore Math principles.",
        href: "/programs/junior-lab"
    },
    {
        title: "The Bridge Series",
        subtitle: "Arithmetic Architecture",
        grades: "Grade 6",
        icon: Zap,
        color: "from-orange-400 to-orange-600",
        description: "Transitional mastery from arithmetic to abstract algebra, ensuring no gaps in fundamental understanding.",
        href: "/programs/bridge"
    },
    {
        title: "Structural Series",
        subtitle: "University-Track Core",
        grades: "Grades 7-9",
        icon: Brain,
        color: "from-green-400 to-green-600",
        description: "Rigorous Algebra I and Geometry sequences standardized to elite university requirements.",
        href: "/programs/structural"
    },
    {
        title: "Advanced Analysis",
        subtitle: "Honors & AP",
        grades: "Grades 9-12",
        icon: Rocket,
        color: "from-blue-400 to-blue-600",
        description: "Algebra II, Pre-Calculus, and AP Calculus AB/BC using Stewart's Calculus, the gold standard for engineering majors.",
        href: "/programs/advanced-analysis"
    },
    {
        title: "Professional Elite",
        subtitle: "High-Performance Outcomes",
        grades: "Grades 9-12",
        icon: Trophy,
        color: "from-purple-400 to-purple-600",
        description: "Decoding the Digital SAT as a system and mastering competitive logic for Ivy+ admissions distinction.",
        href: "/programs/professional-elite"
    }
];

export default function ProgramRoadmap() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The 5-Series Framework</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A structured progression ensuring mastery at every stage of development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {series.map((item, index) => (
                        <Link key={index} href={item.href} className="block h-full group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100 flex flex-col"
                            >
                                <div className={`h-2 w-full bg-gradient-to-r ${item.color}`}></div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{item.grades}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                                    <h4 className="text-sm font-medium text-accent-text mb-4">{item.subtitle}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-sm group-hover:text-accent-text transition-colors mt-auto">
                                        Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
