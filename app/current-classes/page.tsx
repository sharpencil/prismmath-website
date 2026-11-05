import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Users, UserCheck, Clock, Calendar, MoveRight, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
    title: "Current Classes & Schedule | PrismMath Academy",
    description: "View active small-group Logic Labs and 1-on-1 private mentorship classes at PrismMath Academy in Northwest Austin.",
};

const representedSchools = [
    "Spicewood Elementary",
    "Canyon Vista Middle",
    "Pearson Ranch Middle",
    "Cedar Valley Middle",
    "Westwood High",
    "McNeil High",
];

// Easy-to-edit schedule configuration
const activeGroupLabs = [
    {
        name: "AMC 10",
        track: "Competitive Logic & Strategy",
        grades: "Grades 8–10",
        duration: "90 Min / Week",
        schedule: "Saturdays, 3:00 PM",
        status: "Open / Enrolling",
        description: "Advanced algebraic identities, number theory, counting & probability, and synthetic geometry for AMC 10 & AIME qualification.",
    },
    {
        name: "AMC 8",
        track: "Competitive Logic Fast-Track",
        grades: "Grades 5–8",
        duration: "75 Min / Week",
        schedule: "Fridays, 7:00 PM",
        status: "Open / Enrolling",
        description: "High-impact 75-minute olympiad logic lab building problem-solving heuristics for AMC 8 & Mathcounts distinction.",
    },
    {
        name: "Algebra 1",
        track: "Structural Series",
        grades: "Grades 6–8",
        duration: "75 Min / Week",
        schedule: "Tuesdays, 4:10 PM",
        status: "Open / Enrolling",
        description: "University-track foundational algebra (Jacobs Elementary Algebra) emphasizing proof-based derivation over rote memorization.",
    },
    {
        name: "Algebra 1 CBE Prep",
        track: "Accelerated Credit-by-Exam",
        grades: "Grades 6–8",
        duration: "75 Min / Week",
        schedule: "Wednesdays, 4:10 PM",
        status: "Open / Enrolling",
        description: "Targeted mastery and test-readiness for students preparing to place out of Algebra 1 via district Credit-by-Exam (CBE) with a 90%+ score.",
    },
    {
        name: "Prealgebra",
        track: "The Bridge Series",
        grades: "Grades 5–7",
        duration: "75 Min / Week",
        schedule: "Thursdays, 4:10 PM",
        status: "Open / Enrolling",
        description: "Transitional mastery from arithmetic architecture to abstract algebraic reasoning (Dimensions Math 6 / AoPS Prealgebra).",
    },
    {
        name: "Junior Lab 4",
        track: "Junior Math Lab Series",
        grades: "Grade 4",
        duration: "75 Min / Week",
        schedule: "Wednesdays, 5:45 PM",
        status: "Open / Enrolling",
        description: "Building visual model-drawing, multi-step number sense, and joyful logical discovery through Singapore Math Dimensions.",
    },
];

const privateMentorshipRoster = [
    {
        course: "AP Calculus AB",
        grades: "Grade 11",
        school: "Westwood High",
        track: "1:1 Private Research Track",
        schedule: "Saturdays, 7:30 PM",
        duration: "90 Min / Week",
        focus: "Finney AP Calculus · Differential & Integral Analysis · AP Exam 5 Mastery",
    },
    {
        course: "AP Calculus AB",
        grades: "Grade 12",
        school: "Westwood High",
        track: "1:1 Private Research Track",
        schedule: "Sundays, 7:30 PM",
        duration: "90 Min / Week",
        focus: "Finney AP Calculus · Differential & Integral Analysis · AP Exam 5 Mastery",
    },
    {
        course: "Precalculus",
        grades: "Grade 10",
        school: "Westwood High",
        track: "1:1 Private Research Track",
        schedule: "Sundays, 10:00 AM",
        duration: "90 Min / Week",
        focus: "Foerster Precalculus · Trigonometric Identities, Vectors & Analytical Modeling",
    },
    {
        course: "Precalculus",
        grades: "Grade 10",
        school: "Westwood High",
        track: "1:1 Private Research Track",
        schedule: "Mondays, 5:30 PM",
        duration: "90 Min / Week",
        focus: "Foerster Precalculus · Trigonometric Identities, Vectors & Analytical Modeling",
    },
    {
        course: "Algebra 2",
        grades: "Grade 9",
        school: "Vandegrift High",
        track: "1:1 Private Research Track",
        schedule: "Tuesdays, 8:00 PM",
        duration: "90 Min / Week",
        focus: "Glencoe & Foerster Algebra 2 · Polynomial, Logarithmic & Complex Systems",
    },
];

const CALENDAR_START_HOUR = 10; // 10:00 AM
const CALENDAR_END_HOUR = 22;   // 10:00 PM (12 hours total)
const HOUR_HEIGHT = 72;         // 72px per hour (75 min = 90px, 90 min = 108px)
const calendarHours = Array.from(
    { length: CALENDAR_END_HOUR - CALENDAR_START_HOUR },
    (_, i) => CALENDAR_START_HOUR + i
);

function formatHourLabel(hour24: number) {
    if (hour24 === 12) return "12 PM";
    return hour24 > 12 ? `${hour24 - 12} PM` : `${hour24} AM`;
}

const weeklyCalendar = [
    {
        dayShort: "SUN",
        dayFull: "Sunday",
        sessions: [
            {
                startHour: 10,
                startMin: 0,
                durationMin: 90,
                time: "10:00 – 11:30 AM",
                title: "Precalculus",
                type: "private" as const,
                meta: "1:1 · G10 · Westwood HS",
            },
            {
                startHour: 19,
                startMin: 30,
                durationMin: 90,
                time: "7:30 – 9:00 PM",
                title: "AP Calculus AB",
                type: "private" as const,
                meta: "1:1 · G12 · Westwood HS",
            },
        ],
    },
    {
        dayShort: "MON",
        dayFull: "Monday",
        sessions: [
            {
                startHour: 17,
                startMin: 30,
                durationMin: 90,
                time: "5:30 – 7:00 PM",
                title: "Precalculus",
                type: "private" as const,
                meta: "1:1 · G10 · Westwood HS",
            },
        ],
    },
    {
        dayShort: "TUE",
        dayFull: "Tuesday",
        sessions: [
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Algebra 1",
                type: "group" as const,
                meta: "Group Lab · Grades 6–8",
            },
            {
                startHour: 20,
                startMin: 0,
                durationMin: 90,
                time: "8:00 – 9:30 PM",
                title: "Algebra 2",
                type: "private" as const,
                meta: "1:1 · G9 · Vandegrift HS",
            },
        ],
    },
    {
        dayShort: "WED",
        dayFull: "Wednesday",
        sessions: [
            {
                startHour: 14,
                startMin: 45,
                durationMin: 60,
                time: "2:45 – 3:45 PM",
                title: "Math Olympiad Club",
                type: "school" as const,
                meta: "Spicewood Elementary",
            },
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Algebra 1 CBE Prep",
                type: "group" as const,
                meta: "Group Lab · Grades 6–8",
            },
            {
                startHour: 17,
                startMin: 45,
                durationMin: 75,
                time: "5:45 – 7:00 PM",
                title: "Junior Lab 4",
                type: "group" as const,
                meta: "Group Lab · Grade 4",
            },
        ],
    },
    {
        dayShort: "THU",
        dayFull: "Thursday",
        sessions: [
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Prealgebra",
                type: "group" as const,
                meta: "Group Lab · Grades 5–7",
            },
        ],
    },
    {
        dayShort: "FRI",
        dayFull: "Friday",
        sessions: [
            {
                startHour: 19,
                startMin: 0,
                durationMin: 75,
                time: "7:00 – 8:15 PM",
                title: "AMC 8",
                type: "group" as const,
                meta: "Group Lab · Grades 5–8",
            },
        ],
    },
    {
        dayShort: "SAT",
        dayFull: "Saturday",
        sessions: [
            {
                startHour: 15,
                startMin: 0,
                durationMin: 90,
                time: "3:00 – 4:30 PM",
                title: "AMC 10",
                type: "group" as const,
                meta: "Group Lab · Grades 8–10",
            },
            {
                startHour: 19,
                startMin: 30,
                durationMin: 90,
                time: "7:30 – 9:00 PM",
                title: "AP Calculus AB",
                type: "private" as const,
                meta: "1:1 · G11 · Westwood HS",
            },
        ],
    },
];

export default function CurrentClassesPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-accent/30 selection:text-primary pt-24">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 md:py-24 px-6 z-10">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-blue-900 font-medium text-sm mb-8">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Live Cohort &amp; Mentorship Schedule
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight leading-tight">
                        Current Classes &amp; <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-accent">Weekly Schedule.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Every PRISMMath session is taught directly by Dr. Young Ryu in our Northwest Austin private lab. Explore our active small-group Logic Labs and current 1-on-1 mentorship classes below.
                    </p>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            </section>

            {/* Weekly Schedule At-a-Glance (Linear Time-Grid Calendar View) */}
            <section className="py-14 px-6 bg-slate-50 border-t border-slate-200/80">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
                        <div>
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-white border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-2xs">
                                <Calendar className="w-3.5 h-3.5 text-accent-text" />
                                Weekly Lab Calendar (Sun – Sat)
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Weekly Schedule Overview</h2>
                            <p className="text-sm text-slate-600 mt-1.5">
                                Open time slots on the calendar are available to launch a new group cohort or schedule a 1-on-1 mentorship class.
                            </p>
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded-lg shadow-2xs">
                                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                Group Lab (Open Seats)
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 border border-purple-100 px-3 py-1.5 rounded-lg shadow-2xs">
                                <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                                1:1 Private Mentorship
                            </span>
                            <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1.5 rounded-lg shadow-2xs">
                                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                                School Math Olympiad Club
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white text-slate-600 border border-dashed border-slate-300 px-3 py-1.5 rounded-lg shadow-2xs">
                                <span className="w-2.5 h-2.5 rounded-xs border border-dashed border-slate-400 bg-slate-50"></span>
                                Empty Slots: Open for New Group or 1:1
                            </span>
                        </div>
                    </div>

                    {/* Google-Calendar Style Linear Time Grid */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <div className="min-w-[920px]">
                                {/* Top Header Row: Time Gutter + 7 Days */}
                                <div className="grid grid-cols-[68px_repeat(7,minmax(0,1fr))] bg-primary text-white border-b border-slate-200">
                                    <div className="py-3.5 px-2 text-center text-[11px] font-semibold text-slate-400 border-r border-white/10 flex items-center justify-center">
                                        CST
                                    </div>
                                    {weeklyCalendar.map((day, idx) => (
                                        <div
                                            key={idx}
                                            className="py-3 px-2 text-center border-r border-white/10 last:border-r-0"
                                        >
                                            <div className="text-xs font-bold tracking-widest uppercase text-accent">{day.dayShort}</div>
                                            <div className="text-xs font-medium text-slate-300">{day.dayFull}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Linear Timeline Body */}
                                <div
                                    className="relative grid grid-cols-[68px_repeat(7,minmax(0,1fr))]"
                                    style={{ height: `${calendarHours.length * HOUR_HEIGHT}px` }}
                                >
                                    {/* Left Time Labels Column */}
                                    <div className="relative border-r border-slate-200 bg-slate-50/70 select-none">
                                        {calendarHours.map((hour, hIdx) => (
                                            <div
                                                key={hour}
                                                className="border-b border-slate-100 pr-2.5 pt-1 text-right text-[11px] font-semibold text-slate-400"
                                                style={{ height: `${HOUR_HEIGHT}px` }}
                                            >
                                                {hIdx === 0 ? formatHourLabel(hour) : formatHourLabel(hour)}
                                            </div>
                                        ))}
                                    </div>

                                    {/* 7 Day Columns with Linear Hour Grid Lines & Positioned Session Blocks */}
                                    {weeklyCalendar.map((day, dIdx) => (
                                        <div
                                            key={dIdx}
                                            className="relative border-r border-slate-200/80 last:border-r-0"
                                        >
                                            {/* Background Hour & Half-Hour Grid Lines */}
                                            {calendarHours.map((hour) => (
                                                <div
                                                    key={hour}
                                                    className="border-b border-slate-200/70 relative"
                                                    style={{ height: `${HOUR_HEIGHT}px` }}
                                                >
                                                    <div className="absolute inset-x-0 top-1/2 border-b border-dashed border-slate-100 pointer-events-none" />
                                                </div>
                                            ))}

                                            {/* Positioned Session Blocks */}
                                            {day.sessions.map((session, sIdx) => {
                                                const minutesFromStart =
                                                    (session.startHour - CALENDAR_START_HOUR) * 60 + session.startMin;
                                                const topPx = (minutesFromStart / 60) * HOUR_HEIGHT;
                                                const heightPx = (session.durationMin / 60) * HOUR_HEIGHT;

                                                return session.type === "group" ? (
                                                    <div
                                                        key={sIdx}
                                                        style={{ top: `${topPx + 1}px`, height: `${heightPx - 2}px` }}
                                                        className="absolute inset-x-1.5 rounded-xl bg-blue-50 text-primary px-2.5 py-2 shadow-2xs border border-blue-100 border-l-4 border-l-blue-600 flex flex-col justify-between overflow-hidden hover:z-20 hover:shadow-md transition-shadow"
                                                    >
                                                        <div>
                                                            <div className="flex items-center justify-between gap-1">
                                                                <span className="text-[10px] font-bold text-blue-600 leading-none">
                                                                    {session.time}
                                                                </span>
                                                                <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded leading-none shrink-0">
                                                                    Group
                                                                </span>
                                                            </div>
                                                            <div className="font-bold text-xs md:text-sm leading-tight text-primary mt-1">
                                                                {session.title}
                                                            </div>
                                                        </div>
                                                        <div className="text-[10px] text-gray-600 font-medium truncate">
                                                            {session.meta}
                                                        </div>
                                                    </div>
                                                ) : session.type === "school" ? (
                                                    <div
                                                        key={sIdx}
                                                        style={{ top: `${topPx + 1}px`, height: `${heightPx - 2}px` }}
                                                        className="absolute inset-x-1.5 rounded-xl bg-emerald-50 text-primary px-2.5 py-1.5 shadow-2xs border border-emerald-100 border-l-4 border-l-emerald-600 flex flex-col justify-between overflow-hidden hover:z-20 hover:shadow-md transition-shadow"
                                                    >
                                                        <div>
                                                            <div className="flex items-center justify-between gap-1">
                                                                <span className="text-[10px] font-bold text-emerald-700 leading-none">
                                                                    {session.time}
                                                                </span>
                                                                <span className="text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded leading-none shrink-0">
                                                                    School
                                                                </span>
                                                            </div>
                                                            <div className="font-bold text-xs leading-tight text-primary mt-0.5">
                                                                {session.title}
                                                            </div>
                                                        </div>
                                                        <div className="text-[10px] text-gray-600 font-medium truncate">
                                                            {session.meta}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        key={sIdx}
                                                        style={{ top: `${topPx + 1}px`, height: `${heightPx - 2}px` }}
                                                        className="absolute inset-x-1.5 rounded-xl bg-purple-50 text-primary px-2.5 py-2 shadow-2xs border border-purple-100 border-l-4 border-l-purple-600 flex flex-col justify-between overflow-hidden hover:z-20 hover:shadow-md transition-shadow"
                                                    >
                                                        <div>
                                                            <div className="flex items-center justify-between gap-1">
                                                                <span className="text-[10px] font-bold text-purple-600 leading-none">
                                                                    {session.time}
                                                                </span>
                                                                <span className="text-[9px] font-bold uppercase tracking-wider bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded leading-none shrink-0">
                                                                    1:1
                                                                </span>
                                                            </div>
                                                            <div className="font-bold text-xs md:text-sm leading-tight text-primary mt-1">
                                                                {session.title}
                                                            </div>
                                                        </div>
                                                        <div className="text-[10px] text-gray-600 font-medium truncate">
                                                            {session.meta}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Active Group Labs */}
            <section className="py-16 px-6 bg-white border-y border-slate-100">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-8 pb-4 border-b border-slate-200">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-3">
                            <Users className="w-3.5 h-3.5" />
                            Small-Group Cohorts (3–6 Students)
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Active Group Labs</h2>
                    </div>

                    {/* Represented Schools Banner */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2.5 shrink-0">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center shadow-2xs">
                                <GraduationCap className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                                Current Cohort Students Attend:
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {representedSchools.map((school, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-semibold text-primary bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs"
                                >
                                    {school}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeGroupLabs.map((lab, idx) => (
                            <div
                                key={idx}
                                className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">
                                            {lab.grades}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-100 px-2.5 py-0.5 rounded-full">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                            {lab.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-primary mb-1">{lab.name}</h3>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">{lab.track}</p>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                        {lab.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-blue-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                                    <div className="inline-flex items-center gap-1.5 text-primary bg-white px-3 py-1.5 rounded-lg border border-blue-100 shadow-2xs">
                                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                        <strong className="text-blue-600">{lab.schedule}</strong>
                                    </div>
                                    <div className="inline-flex items-center gap-1 text-gray-600">
                                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{lab.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Private 1:1 Mentorship (Current Roster) */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-8 pb-4 border-b border-slate-200">
                        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-3">
                            <UserCheck className="w-3.5 h-3.5 text-purple-600" />
                            One-on-One Research &amp; Mentorship
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Private 1:1 Mentorship (Current Roster)</h2>
                    </div>

                    {/* High School GPA & AP Mastery Callout Banner */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex items-start sm:items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center shadow-2xs shrink-0 mt-0.5 sm:mt-0">
                                <GraduationCap className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                                    School-Aligned Honors &amp; AP GPA Mastery
                                </span>
                                <p className="text-xs text-slate-600 mt-0.5">
                                    1-on-1 private classes are custom-tailored to the exact curriculum, test rigor, and pacing of local high school math tracks:
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 shrink-0">
                            {["Westwood High", "McNeil High", "Vandegrift High"].map((school, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-semibold text-primary bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs"
                                >
                                    {school}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {privateMentorshipRoster.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">
                                            {item.grades}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-white border border-purple-100 px-3 py-1 rounded-full">
                                            <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                            {item.school}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-primary mb-1">{item.course}</h3>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4">{item.track}</p>

                                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                        {item.focus}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-purple-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                                    <div className="inline-flex items-center gap-1.5 text-primary bg-white px-3 py-1.5 rounded-lg border border-purple-100 shadow-2xs">
                                        <Calendar className="w-3.5 h-3.5 text-purple-600" />
                                        <strong className="text-purple-600">{item.schedule}</strong>
                                    </div>
                                    <div className="inline-flex items-center gap-1 text-gray-600">
                                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                                        <span>{item.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Featured 1:1 Parent Feedback Quote Card */}
                    <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 border border-purple-100 border-l-4 border-l-purple-600 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                                First-Lesson Parent Feedback
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                                AP Calculus 1:1 Mentorship · Westwood High
                            </span>
                        </div>
                        <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-4">
                            &ldquo;My student loved the very first Calculus lesson today—I have never seen them talk this excitedly after a math class. They told me they had no idea how important foundational concepts were until today. <strong className="text-primary not-italic font-semibold">The moment they heard Dr. Ryu&apos;s explanation, everything clicked in their head, and they finally understood why the problems they couldn&apos;t solve before hadn&apos;t been working.</strong> They said they finally found the mentor they truly needed.&rdquo;
                        </blockquote>
                        <div className="text-xs font-bold text-primary">
                            — Parent of a Westwood High AP Calculus 1:1 Student <span className="font-normal text-slate-500">(Translated from Korean)</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="py-24 bg-primary relative px-6">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        Reserve Your Seat
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Ready to Join a Cohort or Start 1:1 Mentorship?
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                        Whether your student thrives in a collaborative small-group Logic Lab or a bespoke 1-on-1 mentorship track, reach out today to schedule an evaluation with Dr. Ryu.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 transition-all duration-300 group"
                    >
                        Claim a Spot or Join a Waitlist
                        <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </section>

            <Footer />
        </main>
    );
}
