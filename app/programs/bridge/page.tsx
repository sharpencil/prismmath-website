'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "PRE-101A", level: "Honors Pre-Algebra A", grade: "6th Grade", principles: "Negative Integers, Fraction/Decimal Logic." },
    { code: "PRE-101B", level: "Honors Pre-Algebra B", grade: "6th Grade", principles: "Ratios, Rates, and Algebraic Syntax." },
];

const resources = [
    {
        title: "Dimensions Math 6A & 6B",
        author: "Singapore Math Inc.",
        description: "A rigorous bridge text that solidifies arithmetic mastery while introducing formal algebraic notation.",
        image: "/images/textbooks/dimensions-math-6a-6b.jpg"
    },
    {
        title: "Pre-Algebra",
        author: "Art of Problem Solving",
        description: "Selected chapters for advanced number theory and counting principles.",
        image: "/images/textbooks/aops-prealgebra.jpg"
    }
];

export default function Bridge() {
    return (
        <CourseTrackLayout
            seriesTitle="The Bridge Series"
            targetProfile="Grade 6 | Pre-Algebra Readiness"
            description="The critical transition. This series closes the gap between concrete arithmetic and abstract algebra, ensuring no cracks in the foundation before high school math."
            courses={courses}
            resources={resources}
            resourceBlurb="Most students struggle in Algebra because they never truly mastered the behavior of numbers. The Bridge Series treats arithmetic as an architectural discipline."
            color="from-orange-400 to-orange-600"
            prevSeries={{ name: "Junior Lab Series", href: "/programs/junior-lab" }}
            nextSeries={{ name: "Structural Series", href: "/programs/structural" }}
        />
    );
}
