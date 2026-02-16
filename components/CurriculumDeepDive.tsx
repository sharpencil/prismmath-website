'use client';

import { motion } from 'framer-motion';
import { Eye, Brain, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        title: "Visualize",
        description: "Draw the problem. We use bar models and engineering diagrams to turn abstract numbers into concrete reality.",
        icon: Eye,
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Analyze",
        description: "Deconstruct the components. Identify variables, constraints, and relationships before attempting a solution.",
        icon: Brain,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Solve",
        description: "Execute the logic. Apply derived principles to reach the correct solution with zero guesswork.",
        icon: CheckCircle2,
        color: "bg-emerald-100 text-emerald-600"
    }
];

export default function CurriculumDeepDive() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">The PRISM Method</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our proprietary 3-step engineering process for solving any mathematical problem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl"
                        >
                            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${step.color} shadow-lg ring-8 ring-white`}>
                                <step.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
