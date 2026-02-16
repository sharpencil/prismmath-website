import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
    title: "University-Track Math Curriculum | Grades 2-12 | PrismMath",
    description: "From Singapore Math (Junior Lab) to Multivariable Calculus (Structural). A 10-year academic roadmap designed to produce elite engineering & science candidates.",
};

export default function Programs() {
    return <ProgramsClient />;
}
