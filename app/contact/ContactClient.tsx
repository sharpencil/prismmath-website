'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle, Wrench, ChevronDown, CheckCircle } from "lucide-react";

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
                        {/* Service Area Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden h-full flex flex-col"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Service Area</h3>

                            <div className="flex-grow w-full rounded-xl overflow-hidden border border-gray-200 min-h-[400px] relative">
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

                            <div className="mt-6 space-y-2">
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
                        </motion.div>

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
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name</label>
                                            <input required name="parentName" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Student Grade Level</label>
                                            <input required name="studentGradeLevel" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="e.g. 8th Grade" />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject Area of Interest</label>
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
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Aspirations</label>
                                            <textarea required name="academicAspirations" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Tell us where your student is now and where they want to go. (e.g., &quot;Currently in 7th grade, looking for a challenge beyond the school curriculum&quot; or &quot;Aiming for a top score on the Digital SAT.&quot;)"></textarea>
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
