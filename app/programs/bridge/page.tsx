'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "PRE-101A", level: "Honors Pre-Algebra A", grade: "6th Grade", principles: "Negative Integers, Fraction/Decimal Logic." },
    { code: "PRE-101B", level: "Honors Pre-Algebra B", grade: "6th Grade", principles: "Ratios, Rates, and Algebraic Syntax." },
    { code: "PRE-102A", level: "AMC 8 Fast-Track Probability (4-Session Seminar)", grade: "6th / 7th Grade", principles: "Combinatorics, Sample Spaces, Compound Events, Casework, and Complements." },
    { code: "PRE-102B", level: "AMC 8 Fast-Track Geometry (4-Session Seminar)", grade: "6th / 7th Grade", principles: "Angle Equations, Similar Triangles, Complex 2D Area/Circles, and 3D Volume." },
];

const resources = [
    {
        title: "Dimensions Math 6A & 6B",
        author: "Singapore Math Inc.",
        description: "A rigorous bridge text that solidifies arithmetic mastery while introducing formal algebraic notation.",
        image: "/images/textbooks/dimensions-math-6a-6b.jpg"
    },
    {
        title: "Mastering AMC 8 (OmegaLearn)",
        author: "Sohil Rathi",
        description: "An advanced resource designed to transition students to competitive problem-solving heuristics and structural logic.",
        image: "/images/textbooks/CoverFinal_MasteringAmc8.avif"
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
            underTableContent={
                <div className="w-full p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm text-slate-600 text-left leading-relaxed">
                    <p className="text-base md:text-lg">
                        <strong className="text-primary font-bold">About the Bridge Series:</strong> Our Pre-Algebra A and B classes are full-length core courses designed to build a deep mathematical foundation. To ensure students are 100% prepared for the leap into Algebra 1 and High School Geometry, we also offer our <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">PRE-102 Fast-Track Seminars</span>. These are highly focused, 4-session intensive workshops designed to cover essential middle school Data and Geometry standards while introducing elite AMC 8 competition strategies.
                    </p>
                </div>
            }
        />
    );
}
