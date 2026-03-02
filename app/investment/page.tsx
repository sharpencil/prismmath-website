import { metadata } from '../layout';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MoveRight, ShieldCheck, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function InvestmentPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-accent/30 selection:text-primary pt-24">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-24 px-6 z-10">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-blue-900 font-medium text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Founding Cohort Open
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 tracking-tight leading-tight">
                        An Investment in <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-accent">STEM Excellence.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-4">
                        University-standard instruction engineered for the ambitious student.
                    </p>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Flexible enrollment based on your student’s unique academic roadmap.
                    </p>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            </section>

            {/* Why Prism? Section */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">The PRISM<span className="font-normal">Math</span> Standard</h2>
                        <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">PhD-Led Pedagogy</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Direct instruction from Dr. Ryu, an expert in engineering logic and university-level statistics.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">The 90-Minute Logic Lab</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                We provide 50% more time per session than standard centers, allowing for deep-dive mathematical derivation.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">University Textbooks</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                No generic worksheets. We utilize Larson, Stewart, and Singapore Math Dimensions for rigorous foundational building.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-6 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Tuition Investment</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Transparent pricing designed to deliver unmatched academic value and continuous progression.
                        </p>
                    </div>

                    {/* How It Works - Defining The Track */}
                    <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-12 shadow-sm text-center">
                        <h3 className="text-xl font-bold text-blue-900 mb-3">Defining 'The Track'</h3>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            A <strong className="text-slate-900">Track</strong> consists of one 1.5-hour weekly Logic Lab (6 hours of PhD-led instruction per month).
                            Students may enroll in a single track (e.g., Algebra 1) or multiple tracks (e.g., Geometry + Competitive Logic) depending on their goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-stretch justify-center max-w-4xl mx-auto">

                        {/* Anchor Pricing (Standard) */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between relative mt-8 opacity-80 scale-95 md:transform md:translate-x-4 z-0">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Standard Academic Rate</h3>
                                <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">Future official tuition rate</p>

                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-primary">$200</span>
                                    <span className="text-slate-500 font-medium"> / Month per track</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">1.5-hour weekly sessions</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">University-standard curriculum</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">Small group environment</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Featured Pricing (Founding Offer) */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-accent shadow-2xl flex flex-col justify-between relative z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary font-bold px-6 py-2 rounded-full text-sm shadow-md whitespace-nowrap inline-flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Special Founding Offer
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Founding Member Cohort</h3>
                                <p className="text-blue-600 text-sm font-medium mb-6 pb-6 border-b border-slate-100">
                                    Available for the next 3 students to join our launch cohort.
                                </p>

                                <div className="mb-8">
                                    <div className="flex items-end gap-2 mb-3">
                                        <span className="text-5xl font-bold text-primary">$150</span>
                                        <span className="text-slate-500 font-medium mb-1.5"> / Month per track</span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-md mb-2 w-full">
                                        <ShieldCheck className="w-4 h-4 shrink-0" />
                                        <span>Lifetime rate lock for founding families.</span>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                                        Enroll in any track now at the founding rate and maintain this pricing for the duration of your student's journey at PrismMath.
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm">1.5-hour weekly sessions (6 hrs/mo)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm">PhD-Led direct instruction</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium text-sm">University-grade logical derivation</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Value Comparison Callout */}
                            <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            <strong>Unmatched Value:</strong> At the $150 rate, you receive 6 total hours of specialized instruction per month. This equates to effectively <strong>$25/hr</strong> for PhD-led education—significantly higher value and time-on-task than local generic tutoring chains.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Multi-Track Advantage */}
                    <div className="mt-16 max-w-3xl mx-auto border-t border-slate-200 pt-12">
                        <h4 className="text-lg font-bold text-primary mb-3 text-center md:text-left">The 'Multi-Track' Advantage</h4>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base text-center md:text-left">
                            For ambitious students seeking both vertical rigor (GPA Mastery) and lateral depth (Competitive Logic), enrolling in dual tracks provides a comprehensive university-track foundation.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary relative px-6">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Secure Your Academic Advantage</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        Join our founding cohort to lock in premium academic instruction at our introductory rate. Spaces are strictly limited to ensure uncompromising educational quality.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300 group"
                    >
                        Request Consultation to Secure Founding Pricing
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            <Footer />
        </main >
    );
}
