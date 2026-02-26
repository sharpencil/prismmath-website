'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Founder() {
    return (
        <section id="founder" className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Headshot Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                            <Image
                                src="/founder.png"
                                alt="Dr. Young Ryu"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            {/* Face concealment overlay - significant dark opacity from Top Left */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/95 via-35% to-transparent/5"></div>
                            <div className="absolute bottom-4 left-4">
                                <p className="font-bold text-lg">Dr. Young Ryu</p>
                                <p className="text-accent text-sm">Founder & Head Instructor</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Text */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif font-bold mb-2"
                        >
                            Meet the Founder
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="w-20 h-1 bg-accent rounded-full"
                        ></motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 text-lg leading-relaxed max-w-3xl"
                        >
                            Dr. Young Ryu is a former Professor of Industrial and Systems Engineering. Having taught university-level Probability and Statistics for seven years, he understands the exact cognitive leap students must make to succeed in top-tier STEM environments. When his own children entered the Austin school system, he realized that even in premier schools, the focus remained on rote arithmetic rather than the structural logic used at universities. What began as a personal curriculum developed for his own children and their peers has evolved into PRISMMath Academy—a specialized lab where students master the 'University Operating System' of mathematics.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 text-lg leading-relaxed max-w-3xl"
                        >
                            He doesn&apos;t employ college students; <span className="text-accent font-bold">he teaches every master lecture himself.</span>
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
