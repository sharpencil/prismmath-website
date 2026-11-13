'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "ALG-201A/B", level: "Algebra 1 (Honors)", grade: "7th-8th Grade", principles: "Algebraic Systems, Linear Architecture." },
    { code: "GEO-301A/B", level: "Geometry (Honors)", grade: "8th-9th Grade", principles: "Deductive Proofs, Visual Logic." },
];

const resources = [
    {
        title: "Glencoe Algebra 1",
        author: "McGraw Hill / Glencoe (Primary Textbook)",
        description: "The primary Algebra 1 curriculum framework adopted by local schools, providing thorough coverage of linear, quadratic, and exponential systems for classroom and Credit-by-Exam (CBE) mastery.",
        image: "/images/textbooks/glencoe_algebra1.jpg"
    },
    {
        title: "Elementary Algebra",
        author: "Harold R. Jacobs (Supplementary)",
        description: "Used as a supplementary text for deep conceptual intuition—celebrated for its clear, conversational style and focus on first-principle algebraic discovery.",
        image: "/images/textbooks/jacobs_algebra.jpg"
    },
    {
        title: "Glencoe Geometry",
        author: "McGraw Hill / Glencoe (Primary Textbook)",
        description: "The core Geometry textbook used across local middle and high schools, covering congruence, similarity, transformations, trigonometry, and coordinate geometry.",
        image: "/images/textbooks/glencoe_geometry.jpg"
    },
    {
        title: "Geometry: Seeing, Doing, Understanding",
        author: "Harold R. Jacobs (Supplementary)",
        description: "Our supplementary deductive geometry text—treating geometry as a rigorous system of Euclidean logic and visual proof rather than rote shape-naming.",
        image: "/images/textbooks/jacobs-geometry.jpg"
    }
];

export default function Structural() {
    return (
        <CourseTrackLayout
            seriesTitle="Structural Series"
            targetProfile="Grades 7-9 | University-Track Core"
            description="The core of the university track. These courses use Glencoe Algebra 1 and Glencoe Geometry as primary texts to ensure complete alignment with local school curricula, paired with the Harold R. Jacobs Series as supplementary texts for visual clarity, pedagogical depth, and deductive proof."
            courses={courses}
            resources={resources}
            resourceBlurb="We align directly with the Glencoe Algebra 1 and Geometry frameworks used in top local schools while elevating conceptual depth with Harold R. Jacobs—installing the 'University Operating System' early and ensuring both school GPA and Credit-by-Exam (CBE) dominance."
            color="from-green-400 to-green-600"
            prevSeries={{ name: "The Bridge Series", href: "/programs/bridge" }}
            nextSeries={{ name: "Advanced Analysis", href: "/programs/advanced-analysis" }}
        />
    );
}
