import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, BookOpen, CheckCircle } from "lucide-react";

interface Course {
    code: string;
    level: string;
    grade: string;
    principles: string;
}

interface Resource {
    title: string;
    author: string;
    description: string;
    image?: string;
}

interface CourseTrackLayoutProps {
    seriesTitle: string;
    targetProfile: string;
    description: string | ReactNode;
    courses: Course[];
    resources: Resource[];
    resourceBlurb: string;
    color: string;
    prevSeries?: { name: string; href: string };
    nextSeries?: { name: string; href: string };
}

export default function CourseTrackLayout({
    seriesTitle,
    targetProfile,
    description,
    courses,
    resources,
    resourceBlurb,
    color,
    prevSeries,
    nextSeries
}: CourseTrackLayoutProps) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <section className={`pt-40 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white`}>
                <div className="container mx-auto text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h5 className={`font-bold tracking-widest uppercase mb-6 text-sm text-accent-text`}>{targetProfile}</h5>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight mb-6">
                            {seriesTitle}
                        </h1>
                        {typeof description === 'string' ? (
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                                {description}
                            </p>
                        ) : (
                            <div className="w-full mx-auto mt-8">
                                {description}
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Course Table */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                        <div className={`h-2 w-full bg-gradient-to-r ${color}`}></div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="p-6 font-bold text-primary">Course No.</th>
                                        <th className="p-6 font-bold text-primary">Level Name</th>
                                        <th className="p-6 font-bold text-primary">Grade</th>
                                        <th className="p-6 font-bold text-primary">Core Principles</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {courses.map((course, index) => (
                                        <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-6 font-mono text-sm text-accent-text font-bold">{course.code}</td>
                                            <td className="p-6 font-bold text-gray-800">{course.level}</td>
                                            <td className="p-6 text-gray-600">{course.grade}</td>
                                            <td className="p-6 text-gray-600 text-sm">{course.principles}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resource Stack */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Blurb */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/3"
                        >
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                                <BookOpen className="text-accent-text" /> Primary Resources
                            </h3>
                            <div className="prose text-gray-600">
                                <p className="italic border-l-4 border-accent-text pl-6 pr-6 py-4 bg-white rounded-r-lg shadow-sm leading-relaxed">
                                    "{resourceBlurb}"
                                </p>
                            </div>
                        </motion.div>

                        {/* Textbooks List */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {resources.map((resource, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-16 bg-gray-200 rounded shadow-inner flex-shrink-0 overflow-hidden relative">
                                            {resource.image ? (
                                                <img
                                                    src={resource.image}
                                                    alt={resource.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200" />
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-lg leading-tight mb-1">{resource.title}</h4>
                                            <p className="text-sm text-accent-text font-medium mb-3">by {resource.author}</p>
                                            <p className="text-sm text-gray-500 leading-snug">{resource.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Navigation Footer */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center">
                    {prevSeries ? (
                        <Link href={prevSeries.href} className="group flex items-center gap-3 text-gray-500 hover:text-primary transition-colors">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <div>
                                <span className="block text-xs uppercase tracking-wider font-bold text-gray-300">Previous</span>
                                <span className="font-bold">{prevSeries.name}</span>
                            </div>
                        </Link>
                    ) : (
                        <div></div>
                    )}

                    <Link href="/programs" className="font-bold text-primary hover:text-accent-text transition-colors flex items-center gap-2">
                        Programs Hub
                    </Link>

                    {nextSeries ? (
                        <Link href={nextSeries.href} className="group flex items-center gap-3 text-gray-500 hover:text-primary transition-colors text-right">
                            <div>
                                <span className="block text-xs uppercase tracking-wider font-bold text-gray-300">Next Series</span>
                                <span className="font-bold">{nextSeries.name}</span>
                            </div>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div></div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
