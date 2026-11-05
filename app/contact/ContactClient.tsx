'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle, Wrench, ChevronDown, CheckCircle, Users, UserCheck, Calendar, ArrowRight } from "lucide-react";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("Form submission started");

        const myForm = e.currentTarget;
        const formData = new FormData(myForm);
        const data = new URLSearchParams();

        // Manually append fields to ensure control
        data.append("form-name", "contact");
        data.append("subject", "New Inquiry from PRISMMath Website");

        // Append other fields from FormData
        for (const pair of formData.entries()) {
            // Skip the hidden fields we just manually added to avoid duplicates if they exist
            if (pair[0] !== "form-name" && pair[0] !== "subject") {
                data.append(pair[0], pair[1] as string);
            }
        }

        const payload = data.toString();
        console.log("Submitting payload:", payload);

        // Submit to the static forms file to ensure it hits the Netlify Edge handler
        // instead of the Next.js server function.
        fetch("/_forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: payload,
        })
            .then((response) => {
                console.log("Response status:", response.status);
                if (response.ok) {
                    setIsSubmitted(true);
                } else {
                    alert(`Form submission failed with status: ${response.status}. Please try again.`);
                }
            })
            .catch((error) => {
                console.error("Submission error:", error);
                alert(`Error: ${error}`);
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <section className="pt-40 pb-12 px-6 bg-primary text-white">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact & Enroll</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Start your journey to university-track excellence. We are currently accepting new students for the Fall 2026 cohort.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Column: Current Classes Summary + Service Area Card */}
                        <div className="space-y-8 flex flex-col">
                            {/* Current Classes & Open Spots Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-accent"></div>
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                                    <div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full mb-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                                            Live Availability
                                        </span>
                                        <h3 className="text-2xl font-serif font-bold text-primary">Current Classes &amp; Openings</h3>
                                    </div>
                                    <Link
                                        href="/current-classes"
                                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-primary transition-colors"
                                    >
                                        Full Schedule
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                                {/* Active Group Labs */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                                        <Users className="w-4 h-4 text-blue-600" />
                                        <span>Active Group Labs (Small Cohorts of 3–6)</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        {[
                                            { name: "AMC 10", detail: "90 Min/Wk · Grades 8–10", schedule: "Sat, 3:00 PM" },
                                            { name: "AMC 8", detail: "75 Min/Wk · Grades 5–8", schedule: "Fri, 7:00 PM" },
                                            { name: "Algebra 1", detail: "75 Min/Wk · Grades 6–8", schedule: "Tue, 4:10 PM" },
                                            { name: "Algebra 1 CBE Prep", detail: "75 Min/Wk · Grades 6–8", schedule: "Wed, 4:10 PM" },
                                            { name: "Prealgebra", detail: "75 Min/Wk · Grades 5–7", schedule: "Thu, 4:10 PM" },
                                            { name: "Junior Lab 4", detail: "75 Min/Wk · Grade 4", schedule: "Wed, 5:45 PM" },
                                        ].map((lab, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-wrap items-center justify-between gap-2 bg-blue-50 px-3.5 py-2.5 rounded-xl border border-blue-100 text-sm"
                                            >
                                                <div>
                                                    <span className="font-bold text-primary">{lab.name}</span>
                                                    <span className="text-xs text-gray-600 ml-2">{lab.detail}</span>
                                                </div>
                                                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-white px-2.5 py-1 rounded-md border border-blue-100">
                                                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                                    <span>{lab.schedule}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Cohort Schools:</span>
                                        {[
                                            "Spicewood Elem",
                                            "Canyon Vista MS",
                                            "Pearson Ranch MS",
                                            "Cedar Valley MS",
                                            "Westwood HS",
                                            "McNeil HS",
                                        ].map((school, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] font-semibold text-primary bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full"
                                            >
                                                {school}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Private 1:1 Mentorship Roster */}
                                <div className="pt-5 border-t border-slate-100">
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-3">
                                        <UserCheck className="w-4 h-4 text-purple-600" />
                                        <span>Private 1:1 Mentorship (Current Roster)</span>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5">
                                        {[
                                            { course: "AP Calculus AB", grade: "G11", school: "Westwood HS", schedule: "Sat, 7:30 PM" },
                                            { course: "AP Calculus AB", grade: "G12", school: "Westwood HS", schedule: "Sun, 7:30 PM" },
                                            { course: "Precalculus", grade: "G10", school: "Westwood HS", schedule: "Sun, 10:00 AM" },
                                            { course: "Precalculus", grade: "G10", school: "Westwood HS", schedule: "Mon, 5:30 PM" },
                                            { course: "Algebra 2", grade: "G9", school: "Vandegrift HS", schedule: "Tue, 8:00 PM" },
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between gap-2 text-xs font-semibold text-gray-600 bg-purple-50 border border-purple-100 px-3 py-2 rounded-lg"
                                            >
                                                <div>
                                                    <span className="font-bold text-primary">{item.course}</span>
                                                    <span className="text-[11px] text-gray-600 ml-1.5">({item.grade} · {item.school})</span>
                                                </div>
                                                <span className="text-purple-600 bg-white border border-purple-100 px-2 py-0.5 rounded font-bold shrink-0">{item.schedule}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 mb-2.5">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">1:1 High School GPA Focus:</span>
                                        {["Westwood High", "McNeil High", "Vandegrift High"].map((school, idx) => (
                                            <span
                                                key={idx}
                                                className="text-[11px] font-semibold text-primary bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full"
                                            >
                                                {school}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 italic">
                                        Submit the form to join an active group cohort or schedule a new custom 1-on-1 mentorship time slot with Dr. Ryu.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Service Area Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Service Area</h3>

                                <div className="mb-6 space-y-2">
                                    <div className="flex items-start gap-3 text-gray-600">
                                        <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                                        <div>
                                            <p className="font-medium text-primary">Private Learning Lab</p>
                                            <p className="text-sm">Northwest Austin (Spicewood Springs/Anderson Mill/Avery Ranch/Cedar Park)</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 italic pl-8">
                                        ~20 mile radius service area
                                    </p>
                                </div>

                                <div className="flex-grow w-full rounded-xl overflow-hidden border border-gray-200 min-h-[320px] relative">
                                    <iframe
                                        src="https://maps.google.com/maps?ll=30.450375,-97.795853&z=13&t=m&hl=en-US&gl=US&mapclient=embed&output=embed"
                                        width="100%"
                                        height="100%"
                                        className="absolute inset-0 border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16 px-6"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} className="text-green-600" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-primary mb-4">Request Received</h3>
                                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8"></div>
                                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                                        Thank you for reaching out to PRISMMath Academy. Dr. Ryu or a member of our academic team will review your inquiry and contact you within 24 hours to discuss the next steps for your student&apos;s mathematical journey.
                                    </p>
                                    <button
                                        onClick={() => window.location.href = '/'}
                                        className="mt-10 px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        Return Home
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2">Start the Conversation: Consult with Dr. Ryu</h3>
                                    <p className="text-gray-500 mb-8">Whether you are ready to book an evaluation or simply have questions about our University-Track curriculum, we are here to help. We usually respond within 24 hours.</p>

                                    <form
                                        className="space-y-6"
                                        name="contact"
                                        method="POST"
                                        onSubmit={handleSubmit}
                                    >
                                        <input type="hidden" name="form-name" value="contact" />
                                        <input type="hidden" name="subject" value="New Inquiry from PRISMMath Website" />

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name <span className="text-red-500">*</span></label>
                                            <input required name="parentName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Parent Email <span className="text-red-500">*</span></label>
                                                <input required name="parentEmail" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                                                <input name="phoneNumber" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Student Grade Level <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select name="studentGradeLevel" defaultValue="5th Grade" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer">
                                                    <option value="" disabled>Select an option</option>
                                                    {Array.from({ length: 11 }, (_, i) => i + 2).map((grade) => (
                                                        <option key={grade} value={`${grade}th Grade`}>{grade}th Grade</option>
                                                    ))}
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                    <ChevronDown size={20} />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Current School <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                                            <input name="currentSchool" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="e.g., Canyon Vista MS or Home School" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject Area of Interest <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select name="subjectArea" defaultValue="Pre-Algebra" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer">
                                                    <option>Elementary School Mathematics</option>
                                                    <option>Pre-Algebra</option>
                                                    <option>Algebra I</option>
                                                    <option>Algebra II</option>
                                                    <option>Geometry</option>
                                                    <option>Pre-Calculus</option>
                                                    <option>AP Calculus AB/BC</option>
                                                    <option>AP Statistics</option>
                                                    <option>Digital SAT Prep</option>
                                                    <option>Competition Math (AMC 8/10/12)</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                    <ChevronDown size={20} />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">How did you find us? <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select name="referralSource" defaultValue="" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer">
                                                    <option value="" disabled>Select an option</option>
                                                    <option value="Referral">Referral</option>
                                                    <option value="Social Media">Social Media</option>
                                                    <option value="Search Engine">Search Engine</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                                    <ChevronDown size={20} />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Aspirations <span className="text-gray-400 text-xs font-normal">(Optional)</span></label>
                                            <textarea name="academicAspirations" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Tell us where your student is now and where they want to go. (e.g., &quot;Currently in 7th grade, looking for a challenge beyond the school curriculum&quot; or &quot;Aiming for a top score on the Digital SAT.&quot;)"></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? "Submitting Inquiry..." : "Submit Inquiry"}
                                        </button>
                                    </form>                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
