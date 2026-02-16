import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Request a PhD Consultation | Math Assessment Austin",
    description: "Book a diagnostic evaluation with Dr. Ryu. Located in Northwest Austin (Steiner Ranch / Avery Ranch). Start your student's journey to mathematical mastery today.",
};

export default function Contact() {
    return <ContactClient />;
}
