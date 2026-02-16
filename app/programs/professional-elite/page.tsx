import type { Metadata } from "next";
import ProfessionalEliteClient from "./ProfessionalEliteClient";

export const metadata: Metadata = {
    title: "Digital SAT & AP Statistics Prep | Competition Math Austin",
    description: "High-performance coaching for the Digital SAT (Path Optimization) and AP Statistics. Strategic preparation for Ivy+ admissions and AIME competitions.",
};

export default function ProfessionalElite() {
    return <ProfessionalEliteClient />;
}
