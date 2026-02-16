'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Do you follow Common Core standards?",
        answer: "We utilize the world-renowned Singapore Math method for our Foundations track and university-grade textbooks (Cengage/Larson/Stewart) for our secondary courses. This ensures your child is not only 100% aligned with Texas Essential Knowledge and Skills (TEKS) but is also working with the exact materials used by elite university engineering programs. We don't just help students survive school math; we help them master the University Operating System."
    },
    {
        question: "How are student levels determined?",
        answer: "Every student begins with a comprehensive Ph.D.-led evaluation. We assess not just calculation speed, but logic mechanics and problem-solving architecture to place them in the optimal track."
    },
    {
        question: "Is this program suitable for students struggling with math?",
        answer: "Yes. Often, 'struggling' students are simply missing the visual frameworks to understand abstract concepts. Our Principle-First method rebuilds confidence by providing those missing mental models."
    },
    {
        question: "What is the class size?",
        answer: "We maintain strictly small cohorts (max 6-8 students) to ensure every student receives personal architectural review of their work."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Common Questions</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-primary pr-8">{faq.question}</span>
                                <span className="text-accent-text flex-shrink-0">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
