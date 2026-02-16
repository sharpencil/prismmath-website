'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "F-100A/B", level: "Foundations 1", grade: "2nd Grade", principles: "Mental Math, Bar Modeling, Place Value." },
    { code: "F-200A/B", level: "Foundations 2", grade: "3rd Grade", principles: "Multi-digit Mult/Div, Fractions, Logic." },
    { code: "A-300A/B", level: "Analytical 1", grade: "4th Grade", principles: "Decimals, Data Analysis, Area/Perimeter logic." },
    { code: "A-400A/B", level: "Analytical 2", grade: "5th Grade", principles: "Ratios, Percentages, 3D Geometry Foundations." },
];

const resources = [
    {
        title: "Dimensions Math (Singapore Math)",
        author: "Singapore Math Inc.",
        description: "The gold standard for building deep conceptual understanding through the Concrete-Pictorial-Abstract (CPA) approach.",
        image: "/images/textbooks/dimensions-math-ka-kb.jpg"
    },
    {
        title: "Beast Academy (Selected Guides)",
        author: "Art of Problem Solving",
        description: "Used for supplementary challenge problems that require unconventional critical thinking.",
        image: "/images/textbooks/beastacademy2a.jpg"
    }
];

export default function JuniorLab() {
    return (
        <CourseTrackLayout
            seriesTitle="Junior Lab Series"
            targetProfile="Grades 2-5 | Gifted & Talented"
            description="A laboratory for logical discovery. Powered by Dimensions Math (Singapore Math). These courses transition students from standard arithmetic to structural problem-solving. This series builds the visual 'model-drawing' muscle required for the Engineering Track."
            courses={courses}
            resources={resources}
            resourceBlurb="Rather than teaching repetitive algorithms, this series uses the world-renowned Singapore Math methodology to develop a student's ability to visualize logic through model-drawing."
            color="from-red-400 to-red-600"
            nextSeries={{ name: "The Bridge Series", href: "/programs/bridge" }}
        />
    );
}
