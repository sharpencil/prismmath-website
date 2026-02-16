'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "ALG-401A/B", level: "Algebra 2 / Trig", grade: "9th-10th Grade", principles: "Complex Systems, Series, Optimization." },
    { code: "PRC-501A/B", level: "Pre-Calculus", grade: "10th-11th Grade", principles: "Vector Analysis, Trig Identities." },
    { code: "CAL-601A/B", level: "Calculus (AP BC+)", grade: "11th-12th Grade", principles: "Differential & Integral Calculus (Univ. Std)." },
];

const resources = [
    {
        title: "Intermediate Algebra",
        author: "Ron Larson",
        description: "Focus on complex algebraic structures and functions.",
        image: "/images/textbooks/larson-intermediate-algebra.jpg"
    },
    {
        title: "Precalculus with Limits",
        author: "Ron Larson",
        description: "Comprehensive preparation for Calculus with a focus on analytic geometry.",
        image: "/images/textbooks/larson-precalculus.jpg"
    },
    {
        title: "Calculus: Early Transcendentals",
        author: "James Stewart",
        description: "The global standard for engineering calculus. Virtually every top university engineering program uses this text.",
        image: "/images/textbooks/stewart-calculus.jpg"
    }
];

export default function AdvancedAnalysis() {
    return (
        <CourseTrackLayout
            seriesTitle="Advanced Analysis"
            targetProfile="Grades 9-12 | High-Honors GPA & University Readiness"
            description="Targeting High-Honors GPA and University readiness. These courses use university-standard textbooks to prepare students for top-tier Engineering, Physics, and Data Science programs."
            courses={courses}
            resources={resources}
            resourceBlurb="At this level, we stop pretending. We use James Stewart's Calculus—the exact same book used at UT Austin, Texas A&M, and Stanford. Your child will walk into college calculus and feel effectively bored."
            color="from-blue-400 to-blue-600"
            prevSeries={{ name: "Structural Series", href: "/programs/structural" }}
            nextSeries={{ name: "Professional Elite", href: "/programs/professional-elite" }}
        />
    );
}
