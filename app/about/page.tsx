import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
    title: "Our Philosophy | Dr. Ryu & The PRISM Method",
    description: "Meet Dr. Young Ryu, former engineering professor. Discover the PRISM Method: teaching mathematical intuition and structural derivation over simple answer-getting.",
};

export default function About() {
    return <AboutClient />;
}
