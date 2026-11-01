import { metadata } from '../layout';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MoveRight, ShieldCheck, Check, Info, Users, Calendar, UserCheck } from 'lucide-react';
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
                        Cohort Admissions Open
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
                            <h3 className="text-xl font-bold text-primary mb-3">Right-Sized Logic Labs (75 &amp; 90 Min)</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Based on cognitive retention in intensive mathematics, Elementary &amp; Middle cohorts use a high-impact 75-minute format that eliminates end-of-class fatigue, while High School &amp; AMC 10+ cohorts run 90 minutes for extended proofs.
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
                                No generic worksheets. We utilize Jacobs, Foerster, Finney, and Singapore Math Dimensions for rigorous foundational building.
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
                    <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-16 shadow-sm text-center">
                        <h3 className="text-xl font-bold text-blue-900 mb-3">Defining &apos;The Track&apos;</h3>
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                            A <strong className="text-slate-900">Track</strong> consists of four weekly Logic Lab sessions per month: a high-impact <strong className="text-slate-900">75-minute format</strong> for Elementary &amp; Middle School tracks and a deep-dive <strong className="text-slate-900">90-minute format</strong> for High School &amp; AMC 10/12+ tracks. Families may choose between <strong className="text-slate-900">Small-Group Cohorts (3–6 students)</strong> for collaborative peer synergy or <strong className="text-slate-900">1-on-1 Private Mentorship</strong> for a fully customized pace and syllabus.
                        </p>
                    </div>

                    {/* Pathway 1: Small-Group Cohort Tracks */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-3">
                                    <Users className="w-3.5 h-3.5" />
                                    Small-Group Cohorts (3–6 Students)
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Standard Mastery Series</h3>
                            </div>
                            <p className="text-slate-600 text-sm md:text-base mt-2 md:mt-0 max-w-md md:text-right">
                                Collaborative problem-solving and spirited mock-competition teams capped at 6 students.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            {/* Card 1: Elementary & Middle Cohort ($240) */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-md">
                                            Grades 2–8 &amp; AMC 8
                                        </span>
                                        <span className="text-xs font-semibold text-slate-500">
                                            75 Min / Week
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-primary mb-2">Elementary &amp; Middle Cohort</h4>
                                    <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                                        Junior Math Lab, Bridge Series, Structural Algebra &amp; AMC 8 Foundations.
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl font-bold text-primary">$240</span>
                                            <span className="text-slate-500 font-medium">/ month per track</span>
                                        </div>
                                        <p className="text-xs text-blue-700 font-semibold mb-3">
                                            75-minute weekly session · 4 sessions/mo (5 hrs/mo)
                                        </p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                                            Engineered for cognitive retention in intensive mathematics—eliminating end-of-class fatigue while building deep conceptual foundations.
                                        </p>
                                    </div>

                                    <ul className="space-y-3.5 mb-8">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">
                                                <strong>High-Impact 75-Min Format:</strong> 10m warm-up &amp; review, 35m new theorem/proof, 25m whiteboard competition drill, 5m recap
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Focused cohort of 3–6 peers for collaborative problem-solving</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">PhD-led direct instruction by Dr. Young Ryu</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Rigorous homework review, grading &amp; all curriculum materials</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            <strong>Effective Rate: ~$48/hr</strong>. Includes 5 hours of specialized PhD-led cohort instruction per month.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: High School & AMC 10+ Cohort ($280) */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-md">
                                            Grades 9–12 &amp; AMC 10/12+
                                        </span>
                                        <span className="text-xs font-semibold text-slate-500">
                                            90 Min / Week
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-primary mb-2">High School &amp; Olympiad Cohort</h4>
                                    <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                                        Precalculus, Calculus, AP Statistics, Digital SAT, AMC 10/12 &amp; AIME.
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl font-bold text-primary">$280</span>
                                            <span className="text-slate-500 font-medium">/ month per track</span>
                                        </div>
                                        <p className="text-xs text-blue-700 font-semibold mb-3">
                                            90-minute weekly session · 4 sessions/mo (6 hrs/mo)
                                        </p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                                            Extended 90-minute sessions engineered for multi-step analytical derivations, university-level proofs, and olympiad problem sets.
                                        </p>
                                    </div>

                                    <ul className="space-y-3.5 mb-8">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">
                                                <strong>Deep-Dive 90-Min Format:</strong> Comprehensive theorem derivation, Foerster/Finney analysis &amp; AMC 10/12/AIME proofs
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Focused cohort of 3–6 ambitious peers for high-level discourse</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">PhD-led direct instruction by Dr. Young Ryu</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">University-standard grading, exam strategy &amp; all materials</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            <strong>Effective Rate: ~$47/hr</strong>. Includes 6 hours of advanced PhD-led cohort instruction per month.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pathway 2: 1-on-1 Private Research Tracks */}
                    <div className="max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
                            <div>
                                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
                                    <UserCheck className="w-3.5 h-3.5" />
                                    One-on-One (1:1 Instruction)
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary">Private Research &amp; Mentorship Series</h3>
                            </div>
                            <p className="text-slate-600 text-sm md:text-base mt-2 md:mt-0 max-w-md md:text-right">
                                100% bespoke syllabus, flexible pacing, and direct 1-on-1 mentorship with Dr. Ryu.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            {/* Card 3: 1-on-1 Focused Mentorship - 75 Min ($500) */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
                                            1:1 Custom Pacing
                                        </span>
                                        <span className="text-xs font-semibold text-slate-500">
                                            75 Min / Week
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-primary mb-2">1-on-1 Private Mentorship (75-Min)</h4>
                                    <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                                        Ideal for accelerated grade-skipping, targeted course mastery, or individualized AMC 8/10 prep.
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl font-bold text-primary">$500</span>
                                            <span className="text-slate-500 font-medium">/ month per track</span>
                                        </div>
                                        <p className="text-xs text-emerald-700 font-semibold mb-3">
                                            75-minute weekly 1:1 session · 4 sessions/mo (5 hrs/mo)
                                        </p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                                            Dedicated one-on-one instruction tailored to your student&apos;s exact learning velocity, diagnostic gaps, and competition goals.
                                        </p>
                                    </div>

                                    <ul className="space-y-3.5 mb-8">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Four 75-minute private 1-on-1 sessions per month (5 hrs/mo avg.)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">100% personalized Dr. Ryu mentorship &amp; diagnostic roadmap</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Custom pace for Credit-by-Exam (CBE), honors acceleration, or contest math</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Direct communication with parents on progress &amp; milestones</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            <strong>Effective Rate: $100/hr</strong>. Focused 75-minute 1-on-1 sessions maximizing retention and individual breakthrough.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: 1-on-1 Intensive Research - 90 Min ($600) */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
                                            1:1 Deep Derivation
                                        </span>
                                        <span className="text-xs font-semibold text-slate-500">
                                            90 Min / Week
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-primary mb-2">1-on-1 Private Research (90-Min)</h4>
                                    <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                                        Ideal for AP Calculus/Statistics, AMC 10/12 &amp; AIME mastery, Digital SAT 800 prep, or STEM research.
                                    </p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-5xl font-bold text-primary">$600</span>
                                            <span className="text-slate-500 font-medium">/ month per track</span>
                                        </div>
                                        <p className="text-xs text-emerald-700 font-semibold mb-3">
                                            90-minute weekly 1:1 session · 4 sessions/mo (6 hrs/mo)
                                        </p>
                                        <p className="text-xs text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-3">
                                            Extended one-on-one mentorship for high-schoolers and olympiad contenders tackling complex proofs, university-level calculus, or custom research.
                                        </p>
                                    </div>

                                    <ul className="space-y-3.5 mb-8">
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Four 90-minute private 1-on-1 sessions per month (6 hrs/mo avg.)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Bespoke syllabus for advanced Olympiad proofs (AMC 10/12 &amp; AIME)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">University-level Calculus, Linear Algebra, or Probability/Statistics modeling</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700 text-sm">Comprehensive exam strategy &amp; individualized problem-set curation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                                    <div className="flex items-start gap-3">
                                        <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                            <strong>Effective Rate: $100/hr</strong>. Six full hours per month of intensive 1-on-1 PhD mentorship and research guidance.
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
                        Join our upcoming cohort to secure premium academic instruction. Spaces are strictly limited to ensure uncompromising educational quality.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300 group"
                    >
                        Request Consultation to Secure Enrollment
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
