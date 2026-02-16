'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "ALG-201A/B", level: "Algebra 1 (Honors)", grade: "7th-8th Grade", principles: "Algebraic Systems, Linear Architecture." },
    { code: "GEO-301A/B", level: "Geometry (Honors)", grade: "8th-9th Grade", principles: "Deductive Proofs, Visual Logic." },
];

const resources = [
    {
        title: "Elementary Algebra",
        author: "Ron Larson",
        description: "A university-standard text known for its clarity and rigor. we use the same text used by college freshman.",
        image: "/images/textbooks/larson-elementary-algebra.jpg"
    },
    {
        title: "Geometry: Seeing, Doing, Understanding",
        author: "Harold Jacobs",
        description: "The single best text for deductive geometry. It treats the subject as a system of logic, not just shape-naming.",
        image: "/images/textbooks/jacobs-geometry.jpg"
    }
];

export default function Structural() {
    return (
        <CourseTrackLayout
            seriesTitle="Structural Series"
            targetProfile="Grades 7-9 | University-Track Core"
            description="The core of the university track. These courses utilize the Larson Collegiate Series (Algebra) and Jacobs Series (Geometry). These are chosen for their visual clarity and focus on mathematical modeling and deductive proof."
            courses={courses}
            resources={resources}
            resourceBlurb="We reject 'high school' textbooks that water down content. We use the same texts (Larson, Jacobs) found in elite universities to ensure the 'University Operating System' is installed early."
            color="from-green-400 to-green-600"
            prevSeries={{ name: "The Bridge Series", href: "/programs/bridge" }}
            nextSeries={{ name: "Advanced Analysis", href: "/programs/advanced-analysis" }}
        />
    );
}
