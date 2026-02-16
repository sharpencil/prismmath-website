'use client';

import CourseTrackLayout from "@/components/CourseTrackLayout";

const courses = [
    { code: "STAT-501A/B", level: "AP Statistics", grade: "11th-12th Grade", principles: "Probabilistic Systems & Inference (AP+)." },
    { code: "CSM-501A/B", level: "Contest Mastery", grade: "9th-12th Grade", principles: "Advanced Competitive Systems (AIME Prep)." },
    { code: "DSAT-800", level: "Digital SAT", grade: "10th-12th Grade", principles: "DSAT Interface & Path Optimization." },
];

const resources = [
    {
        title: "The Practice of Statistics",
        author: "Starnes & Tabor",
        description: "The gold standard for AP Statistics, focusing on predictive modeling and inference.",
        image: "/images/textbooks/practice-of-statistics.jpg"
    },
    {
        title: "AoPS Vol 2: Beyond the Basics",
        author: "Lehoczky & Rusczyk",
        description: "Advanced problem-solving strategies for the AIME and USAMO competitions.",
        image: "/images/textbooks/aops-vol2.jpg"
    },
    {
        title: "1600.io SAT Math Orange Book",
        author: "George Rimakis & J. Sestak",
        description: "The definitive guide to the Digital SAT math section, known for its exhaustive explanations.",
        image: "/images/textbooks/1600io-sat-math.jpg"
    },
    {
        title: "PWN the SAT: Math Guide",
        author: "Mike McClenathan",
        description: "Data-driven strategies for the Digital SAT interface and path optimization.",
        image: "/images/textbooks/pwn-sat.jpg"
    }
];

export default function ProfessionalElite() {
    return (
        <CourseTrackLayout
            seriesTitle="Professional Elite"
            targetProfile="Grades 9-12 | High-Performance Outcomes"
            description={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 text-left">
                    {/* Left Column */}
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">01</div>
                            <h4 className="font-bold text-lg text-primary">Performance Optimization</h4>
                        </div>
                        <p className="text-sm font-semibold text-purple-600 mb-2 uppercase tracking-wider">Path Optimization & Digital SAT</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Treat the Digital SAT as a system to be decoded. Leveraging Dr. Ryu’s expertise in Human Factors Engineering, we focus on error reduction and path optimization. By mastering the 1600.io and PWN SAT frameworks, students turn high-stakes testing into a repeatable, scientific process.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">02</div>
                            <h4 className="font-bold text-lg text-primary">Competitive Logic & Applied Stats</h4>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">Strategic Distinction (AP Stats + Competitive Logic)</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            For students aiming for Ivy+ admissions, distinction is found in the &apos;unfamiliar.&apos; We use AIME-level problems and AP Statistics to teach heuristic discovery and predictive modeling. Students learn the cognitive mental models used in elite research labs to solve complex problems from first principles.
                        </p>
                    </div>
                </div>
            }
            courses={courses}
            resources={resources}
            resourceBlurb="Standardized tests aren't just exams—they are systems of logic and speed. While others memorize shortcuts, our students use Path Optimization to master the Digital SAT and high-stakes AP exams. We use elite-level resources to ensure your student doesn’t just take the test, but dominates it."
            color="from-purple-400 to-purple-600"
            prevSeries={{ name: "Advanced Analysis", href: "/programs/advanced-analysis" }}
        />
    );
}
