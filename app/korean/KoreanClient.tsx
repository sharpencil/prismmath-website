'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, MapPin, Users, BookOpen, UserCheck, Calendar, Clock, AlertCircle } from 'lucide-react';

// 요일/시간 수정용 배열
const koreanGroupLabs = [
    {
        name: "AMC 10",
        subtitle: "고등 경시 & AIME 진출 대비반",
        grades: "8–10학년",
        duration: "주 1회 90분",
        schedule: "토요일 오후 3:00 (Sat 3:00 PM)",
        status: "모집 중",
        description: "AIME 합격을 목표로 대수·정수론·기하·조합론의 고난도 추론과 계산 지배력(Computational Dominance)을 훈련합니다.",
    },
    {
        name: "AMC 8",
        subtitle: "중등 경시 & Mathcounts 핵심반",
        grades: "5–8학년",
        duration: "주 1회 75분",
        schedule: "금요일 오후 7:00 (Fri 7:00 PM)",
        status: "모집 중",
        description: "고밀도 75분 수업 포맷으로 AMC 8 고득점 및 상위권 경시 수학의 핵심 문제해결 직관을 완성합니다.",
    },
    {
        name: "Algebra 1",
        subtitle: "Structural Series · 대수 1 심화",
        grades: "6–8학년",
        duration: "주 1회 75분",
        schedule: "화요일 오후 4:10 (Tue 4:10 PM)",
        status: "모집 중",
        description: "Jacobs 교재를 기반으로 단순 문제풀이가 아닌 대학 수준의 대수적 원리 도출과 증명 사고력을 구축합니다.",
    },
    {
        name: "Algebra 1 CBE Prep",
        subtitle: "Credit-by-Exam 월반 시험 완벽 대비",
        grades: "6–8학년",
        duration: "주 1회 75분",
        schedule: "수요일 오후 4:10 (Wed 4:10 PM)",
        status: "모집 중",
        description: "교육청 Credit-by-Exam(CBE) 90점 이상 통과 및 성공적인 수학 월반을 위한 핵심 개념·실전 문제풀이 집중 과정입니다.",
    },
    {
        name: "Prealgebra",
        subtitle: "The Bridge Series · 중등 대수 코어",
        grades: "5–7학년",
        duration: "주 1회 75분",
        schedule: "목요일 오후 4:10 (Thu 4:10 PM)",
        status: "모집 중",
        description: "초등 연산에서 추상적인 중등 대수(Algebra)로 넘어가는 가장 중요한 시기에 빈틈없는 개념 체계를 완성합니다.",
    },
    {
        name: "Junior Lab 4",
        subtitle: "Junior Math Lab · 초등 심화 4",
        grades: "4학년",
        duration: "주 1회 75분",
        schedule: "수요일 오후 5:45 (Wed 5:45 PM)",
        status: "모집 중",
        description: "싱가포르 수학(Dimensions Math)의 시각적 모델링과 다단계 논리 추론을 통해 탄탄한 수리 사고력을 기릅니다.",
    },
];

const koreanPrivateRoster = [
    {
        course: "AP Calculus AB",
        grades: "11학년",
        school: "Westwood High",
        subtitle: "1:1 고교 내신(GPA) & AP 집중 과정",
        duration: "주 1회 90분",
        schedule: "토요일 오후 7:30 (Sat 7:30 PM)",
        focus: "Westwood 고교 내신 수학 및 AP Calculus 만점(5점) 완벽 대비 · Finney 교재 기반 심화 증명",
    },
    {
        course: "AP Calculus AB",
        grades: "12학년",
        school: "Westwood High",
        subtitle: "1:1 고교 내신(GPA) & AP 집중 과정",
        duration: "주 1회 90분",
        schedule: "일요일 오후 7:30 (Sun 7:30 PM)",
        focus: "Westwood 고교 내신 수학 및 AP Calculus 만점(5점) 완벽 대비 · Finney 교재 기반 심화 증명",
    },
    {
        course: "Precalculus",
        grades: "10학년",
        school: "Westwood High",
        subtitle: "1:1 고교 내신(GPA) & 심화 과정",
        duration: "주 1회 90분",
        schedule: "일요일 오전 10:00 (Sun 10:00 AM)",
        focus: "Westwood 고교 Precalculus 내신 완벽 대비 · Foerster 교재 기반 삼각함수·벡터·함수 모델링",
    },
    {
        course: "Precalculus",
        grades: "10학년",
        school: "Westwood High",
        subtitle: "1:1 고교 내신(GPA) & 심화 과정",
        duration: "주 1회 90분",
        schedule: "월요일 오후 5:30 (Mon 5:30 PM)",
        focus: "Westwood 고교 Precalculus 내신 완벽 대비 · Foerster 교재 기반 삼각함수·벡터·함수 모델링",
    },
    {
        course: "Algebra 2",
        grades: "9학년",
        school: "Vandegrift High",
        subtitle: "1:1 고교 내신(GPA) & 심화 과정",
        duration: "주 1회 90분",
        schedule: "화요일 오후 8:00 (Tue 8:00 PM)",
        focus: "Vandegrift 고교 Algebra 2 내신 완벽 대비 · Glencoe & Foerster 교재 기반 심화 응용",
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

const koreanWeeklyCalendar = [
    {
        dayShort: "SUN",
        dayKor: "일요일",
        sessions: [
            {
                startHour: 10,
                startMin: 0,
                durationMin: 90,
                time: "10:00 – 11:30 AM",
                title: "Precalculus",
                type: "private" as const,
                meta: "1:1 · 10학년 · Westwood HS",
            },
            {
                startHour: 19,
                startMin: 30,
                durationMin: 90,
                time: "7:30 – 9:00 PM",
                title: "AP Calculus AB",
                type: "private" as const,
                meta: "1:1 · 12학년 · Westwood HS",
            },
        ],
    },
    {
        dayShort: "MON",
        dayKor: "월요일",
        sessions: [
            {
                startHour: 17,
                startMin: 30,
                durationMin: 90,
                time: "5:30 – 7:00 PM",
                title: "Precalculus",
                type: "private" as const,
                meta: "1:1 · 10학년 · Westwood HS",
            },
        ],
    },
    {
        dayShort: "TUE",
        dayKor: "화요일",
        sessions: [
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Algebra 1",
                type: "group" as const,
                meta: "그룹 랩 · 6–8학년",
            },
            {
                startHour: 20,
                startMin: 0,
                durationMin: 90,
                time: "8:00 – 9:30 PM",
                title: "Algebra 2",
                type: "private" as const,
                meta: "1:1 · 9학년 · Vandegrift HS",
            },
        ],
    },
    {
        dayShort: "WED",
        dayKor: "수요일",
        sessions: [
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Algebra 1 CBE Prep",
                type: "group" as const,
                meta: "그룹 랩 · 6–8학년",
            },
            {
                startHour: 17,
                startMin: 45,
                durationMin: 75,
                time: "5:45 – 7:00 PM",
                title: "Junior Lab 4",
                type: "group" as const,
                meta: "그룹 랩 · 4학년",
            },
        ],
    },
    {
        dayShort: "THU",
        dayKor: "목요일",
        sessions: [
            {
                startHour: 16,
                startMin: 10,
                durationMin: 75,
                time: "4:10 – 5:25 PM",
                title: "Prealgebra",
                type: "group" as const,
                meta: "그룹 랩 · 5–7학년",
            },
        ],
    },
    {
        dayShort: "FRI",
        dayKor: "금요일",
        sessions: [
            {
                startHour: 19,
                startMin: 0,
                durationMin: 75,
                time: "7:00 – 8:15 PM",
                title: "AMC 8",
                type: "group" as const,
                meta: "그룹 랩 · 5–8학년",
            },
        ],
    },
    {
        dayShort: "SAT",
        dayKor: "토요일",
        sessions: [
            {
                startHour: 15,
                startMin: 0,
                durationMin: 90,
                time: "3:00 – 4:30 PM",
                title: "AMC 10",
                type: "group" as const,
                meta: "그룹 랩 · 8–10학년",
            },
            {
                startHour: 19,
                startMin: 30,
                durationMin: 90,
                time: "7:30 – 9:00 PM",
                title: "AP Calculus AB",
                type: "private" as const,
                meta: "1:1 · 11학년 · Westwood HS",
            },
        ],
    },
];

export default function KoreanClient() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-6 z-10 overflow-hidden bg-primary text-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12"></div>

                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-medium text-sm mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                오스틴 북서부 프리미엄 수학 랩
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                                수학 조기 완성,<br />
                                <span className="text-accent">입시의 여유</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-8">
                                패턴 암기가 아닌, 원리를 관통하는 수학. 전직 공대 교수 Dr. Ryu가 직접 설계한 &apos;University-Track&apos; 로드맵
                                <br /><br />
                                <span className="font-semibold text-white">미국 명문대 STEM 진학부터 AMC/AIME 경시 수학까지, 오스틴 북서부 상위권 한인학생들을 위한 전략적 수학 교육 파트너</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-white transition-colors"
                                >
                                    무료 상담 신청하기 (한국어 가능)
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full max-w-[380px] mx-auto md:ml-auto md:mr-0 flex flex-col gap-4"
                        >
                            <div className="relative h-[320px] md:h-[420px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                                <div className="absolute inset-0 z-0 bg-primary">
                                    <Image
                                        src="/founder2.jpeg"
                                        alt="Dr. Young Ryu"
                                        fill
                                        className="object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent"></div>
                                    {/* Face concealment overlay - significant dark opacity from Bottom Right to Top Left */}
                                    <div className="absolute inset-0 bg-gradient-to-tl from-gray-950/50 via-gray-900/45 via-35% to-transparent/2"></div>
                                </div>
                                <div className="absolute inset-0 z-10 p-6">
                                    <div className="absolute bottom-6 left-6 text-left w-full pr-6">
                                        <h3 className="text-lg font-bold mb-2 text-white">Dr. Young Ryu</h3>
                                        <div className="space-y-1.5 text-sm md:text-base text-gray-200">
                                            <p><strong className="text-white">카이스트</strong> 학사/석사 <span className="text-slate-400 block sm:inline sm:ml-1">(B.S./M.S., KAIST)</span></p>
                                            <p><strong className="text-white">버지니아 공대</strong> 박사 <span className="text-slate-400 block sm:inline sm:ml-1">(Ph.D., Virginia Tech)</span></p>
                                            <p>전 <strong className="text-white">텍사스 주립대</strong> 교수 <span className="text-slate-400 block sm:inline sm:ml-1">(Texas State)</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 italic text-center md:text-right leading-relaxed">
                                내 아이를 가르치는 마음과 검증된 방법으로: 2026 센트럴 텍사스 수학 경시대회에서 금메달(스파이스우드 초등팀)을 목에 건 첫째와 함께.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Letter from the Founder */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200"
                    >
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b pb-4">PrismMath Academy: 원장 메시지 및 교육 철학</h2>

                        <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                안녕하십니까. PRISMMath Academy 원장 류영(Young Ryu, PhD)입니다.
                            </p>
                            <p>
                                제 첫째 아이가 중학교 진학을 앞두고 수학 교육을 고민하며 오스틴의 많은 학원과 튜터를 알아보았습니다. 하지만 제 기준에 차는 곳을 찾기란 쉽지 않았습니다. 비용은 높았지만 커리큘럼은 단편적이었고, 교재의 수준이나 강사의 전문성은 명문대 진학을 뒷받침하기에 부족해 보였습니다. 그래서 제가 직접 우리 아이와 그 친구들을 위해 최고의 환경을 만들자는 결심, 그것이 PRISMMath Academy의 시작입니다.
                            </p>
                            <p>
                                저는 한국의 치열한 입시 현장을 성공적으로 헤쳐 나왔고, 카이스트(KAIST)에서 이공계 엘리트들이 어떻게 사고하고 문제를 해결하는지 몸소 겪었습니다. 또한 미국에서 박사 학위를 받고 대학 강단에서 수년간 공대생들을 위한 확률통계 및 최적화 과목들을 가르쳤습니다. 한국 수학의 강점인 &apos;탄탄한 기초&apos;와 미국 STEM 교육의 핵심인 &apos;원리 기반의 응용&apos;을 모두 섭렵한 전문가로서, 오스틴 학부모님들의 교육적 갈증을 해결할 독보적인 솔루션을 제시합니다.
                            </p>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">1. PRISMMath의 철학: &quot;패턴 암기가 아닌, 원리 관통을 통한 AI 시대의 논리력&quot;</h3>
                                <p className="mb-2">
                                    대부분의 입시 수학은 수많은 문제를 풀게 하여 비슷한 패턴이 나오기를 기대하는 &apos;양치기식&apos; 공부에 의존합니다. 하지만 AI가 계산을 대신하는 시대에 필요한 능력은 계산 속도가 아니라 시스템의 논리를 설계하는 <strong>&apos;수학적 설계 지능(Mathematical Architecture)&apos;</strong>입니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>원리를 꿰뚫는 100%의 이해:</strong> 저는 수백 문제를 푸는 것보다, 단 한 문제를 풀더라도 그 밑바닥에 흐르는 수학적 원리를 완벽하게 해부하는 데 중점을 둡니다.</li>
                                    <li><strong>처음 보는 고난도 문제도 해결하는 힘:</strong> 원리를 제대로 관통하면 문제를 많이 풀어보지 않아도 스스로 논리를 세워 해결할 수 있는 &apos;수학적 직관&apos;이 생깁니다. 이것이 제가 추구하는 &apos;진짜 실력&apos;이며, 명문대 입시와 미래 커리어에서 결정적인 변별력을 만드는 힘입니다.</li>
                                </ul>
                                <div className="mt-4 bg-purple-50/70 border border-purple-100 border-l-4 border-l-purple-600 rounded-xl p-4 text-sm text-slate-700">
                                    <p className="italic leading-relaxed">
                                        &ldquo;아이가 수학 수업 후에 이렇게 흥분해서 말하는 건 처음이네요. <strong>&lsquo;컨셉(원리)이 이렇게 중요한지 몰랐다&rsquo;</strong>고, 선생님 설명을 듣는 순간 머리에서 팡팡 이해되는 느낌을 받았고, <strong>이제껏 안 풀렸던 문제들이 왜 그랬는지 비로소 이해되는 느낌</strong>이었다네요.&rdquo;
                                    </p>
                                    <p className="text-xs font-bold text-purple-700 mt-1.5">
                                        — Westwood High · AP Calculus 1:1 멘토링 첫 수업 후 학부모님 메시지 중
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">2. 메인 트랙: 미국 명문대 진학을 위한 &apos;University Operating System&apos; &amp; 고교 내신 완벽 대비</h3>
                                <p>
                                    저희는 Glencoe, Foerster, Finney 등 오스틴 명문 학군 고교 및 대학 과정에서 검증된 교재를 기반으로 중고등 과정의 &apos;대학 수준 사고 체계&apos;를 구축합니다. 특히 <strong>1:1 프라이빗 멘토링 과정</strong>은 <strong>Westwood, McNeil, Vandegrift 고등학교</strong>의 까다로운 내신 수학(Honors Algebra 2, Precalculus, AP Calculus, AP Statistics) 진도와 학교별 시험 출제 경향에 완벽히 맞춘 밀착 관리로 최상위 GPA와 STEM 전공 경쟁력을 동시에 완성합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">3. 엘리트 경시 트랙: AMC 8/10/12 및 AIME를 통한 &apos;수학적 차별화(Distinction)&apos;</h3>
                                <p className="mb-2">
                                    미국 최상위권 대학(MIT, Stanford, Caltech 등)과 Ivy League 합격을 위해서는 학교 성적 이상의 &apos;수학적 성취&apos;가 필요합니다. PrismMath는 단순한 내신 관리를 넘어, 미국 수학 경시대회인 AMC와 invitational 레벨인 AIME 합격을 위한 전문 경시 과정을 운영합니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Computational Dominance:</strong> 경시 수학의 4대 핵심 분야(Advanced Algebra, Number Theory, Geometry, Combinatorics)를 심도 있게 다룹니다.</li>
                                    <li><strong>전략적 승리의 경험:</strong> 경시 수학은 단순 암기로 해결할 수 없는 &apos;추론의 영역&apos;입니다. 고난도 문제의 핵심을 꿰뚫는 &apos;Satori(깨달음)&apos;를 경험한 아이들은 대학 입시 포트폴리오에서 압도적인 경쟁력(Portfolio Closer)을 갖게 됩니다. 제가 이과 수학 전 과정을 조기 마스터하며 얻었던 &apos;전략적 우위&apos;의 경험을 우리 아이들에게 물려주고 싶습니다.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">4. 이중 언어(Bilingual) 수업: 논리의 깊이와 용어의 완벽한 결합</h3>
                                <p>
                                    수학은 언어가 아닌 논리입니다. 수업은 영어로 진행되는 것이 기본이지만, 고차원적인 추상적 개념은 한국어로 정확하고 깊이 있게 보충 설명하여 학생이 100% 이해하도록 돕습니다. 언어의 장벽 때문에 수학적 본질을 놓치는 일 없이, 한국식 엄밀함과 미국식 창의성의 장점만을 극대화합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">5. 독보적 가치와 합리적 투자</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>체계적인 수업 시간 및 합리적 비용:</strong> 초·중등 및 AMC 8 과정은 집중도를 극대화하고 수업 후반부 피로도를 없애는 <strong>고밀도 75분 포맷(월 $240)</strong>으로, 고등 및 AMC 10/12·AIME 과정은 심층 증명을 위한 <strong>90분 포맷(월 $280)</strong>으로 운영됩니다. 1:1 개인 연구 과정은 <strong>월 $500(75분) / 월 $600(90분)</strong>(Investment 메뉴 참조)으로 전직 대학교수가 직접 강의하는 압도적인 교육의 질을 경험하실 수 있습니다.</li>
                                    <li><strong>소수 정예 코호트(3–6명) &amp; 1:1 고교 내신 맞춤 멘토링:</strong> 동료 학생들과의 협동 문제 풀이 및 실전 모의 경시 시너지를 위한 3–6명 정원 코호트 수업과, <strong>Westwood · McNeil · Vandegrift 고교 내신 수학(GPA) 및 AP 과정</strong>에 100% 맞춘 1:1 프라이빗 수업을 함께 운영합니다.</li>
                                    <li><strong>미래를 위한 최적화된 선택:</strong> 중고교 시절의 시행착오를 줄여 수학을 조기에 마스터하고 경시 성과까지 거두는 것이 가장 경제적이고 확실한 입시 전략입니다.</li>
                                </ul>
                            </div>

                            <div>
                                <p>
                                    현재 <strong>Spicewood 초등</strong>, <strong>Canyon Vista · Pearson Ranch · Cedar Valley 중등</strong>, <strong>Westwood · McNeil · Vandegrift 고등학생</strong> 등 오스틴 북서쪽(NW Austin) 명문 학군 학생들과 소규모 그룹 및 1:1 수업을 진행 중입니다. 제 아이들이 직접 참여하는 수업인 만큼, <strong>&apos;전직 교수의 전문성&apos;</strong>과 <strong>&apos;내 자식을 가르치는 진정성&apos;</strong>을 담아 최고의 선택이 될 것임을 약속드립니다.
                                </p>
                            </div>

                            <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-slate-800">
                                <p className="text-center font-medium">카카오톡 상담이 편하신 학부모님은 <strong className="text-primary block sm:inline mt-2 sm:mt-0 text-xl font-bold"><span className="text-accent">카톡 ID:</span> sharpencil</strong> 로 문의해 주시면 상세히 답변해 드리겠습니다.</p>
                            </div>

                            <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-primary text-xl">Dr. Young Ryu</p>
                                    <p className="text-slate-500">Founder & Head Instructor</p>
                                </div>
                                <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-slate-200">
                                    <Image src="/founder2.jpeg" alt="Dr. Ryu" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Prism Section */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">왜 PRISMMath 여야 하는가?</h2>
                        <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">제1원칙 도출 학습<br />(First-Principle Derivation)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">단순 공식 암기와 문제 풀이 요령(Tricks) 배제</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">대학 수준의 증명과 논리 도출 과정을 중학생/고등학생 수준에 맞게 훈련</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">경시대회 및 대입 완벽 대비<br />(AMC, AIME, Digital SAT)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">최상위권 변별력을 가르는 수학 경시대회(AMC/AIME)를 위한 전문 로드맵</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">수리 논리 구조 분석을 통한 차세대 Digital SAT 고득점 보장</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100"
                        >
                            <div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">소수 정예 프라이빗 랩<br />(Elite Small Cohorts)</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">정원 3–6명의 집중 코호트 운영으로 협동 문제 풀이 및 실전 모의 경시 시너지 극대화</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">학년별 최적화된 고밀도 수업 (초·중등 75분 / 고등·AMC 10+ 90분) 및 1:1 맞춤 피드백</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Curriculum Visuals Segment (Integration of Textbooks) */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
                                대학 수준의 교재를 활용한 <br />
                                <span className="text-accent">최상위 커리큘럼</span>
                            </h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                시중의 가벼운 문제집(Worksheets)이 아닙니다. PRISMMath는 명문 학군 고등학교와 대학 과정에서 채택하는
                                Jacobs, Glencoe, Foerster, Finney Calculus 등의 교과서를 기반으로 깊이 있는 개념을 지도합니다. (Programs 메뉴 참조)
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span className="text-slate-200">개념의 본질을 파고드는 깊이 있는 증명</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <span className="text-slate-200">응용력을 극대화하는 수준 높은 문제풀이</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative mt-8 md:mt-0">
                            <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
                                {[
                                    { title: "Dimensions Math 6A/6B", image: "/images/textbooks/dimensions-math-6a-6b.jpg" },
                                    { title: "Elementary Algebra", image: "/images/textbooks/jacobs_algebra.jpg" },
                                    { title: "Geometry", image: "/images/textbooks/jacobs-geometry.jpg" },
                                    { title: "Glencoe Algebra 2", image: "/images/textbooks/glencoealgebra2.jpg" },
                                    { title: "Algebra and Trigonometry: Functions and Applications", image: "/images/textbooks/foerster_algebra2.jpg" },
                                    { title: "Precalculus with Trigonometry: Concepts and Applications", image: "/images/textbooks/precalculus_foerster.jpg" },
                                    { title: "Calculus: Graphical, Numerical, Algebraic", image: "/images/textbooks/calculusab_finney.jpg" },
                                    { title: "The Practice of Statistics", image: "/images/textbooks/practice-of-statistics.jpg" },
                                    { title: "Mastering AMC 10/12", image: "/images/textbooks/CoverFinal_MasteringAmc1012.avif" },
                                    { title: "AoPS Vol 2", image: "/images/textbooks/aops-vol2.jpg" },
                                    { title: "PrepPros: The Complete Guide To Digital SAT Math: The Best SAT Math Book For Students Seeking A Perfect Score", image: "/images/textbooks/prepprossat.jpg" },
                                    { title: "Dr. John Chung's SAT Math Fifth Edition: 63 Perfect Tips and 16 Complete Tests", image: "/images/textbooks/drjohnchungsat.jpg" },
                                ].map((book, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-2xl border border-white/10 hover:border-white/40 transition-colors"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                    >
                                        <Image
                                            src={book.image}
                                            alt={book.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 25vw, 20vw"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Classes Section (현재 진행 중인 클래스) */}
            <section className="py-24 px-6 bg-white border-t border-slate-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-bold text-xs uppercase tracking-wider mb-4">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Current Classes &amp; Availability
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">현재 진행 중인 클래스 &amp; 주간 시간표</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            모든 수업은 오스틴 북서부(NW Austin) 프라이빗 랩에서 류영 원장이 직접 지도합니다. 현재 운영 중인 주간 시간표와 신규 개설 가능 시간대를 한눈에 확인하세요.
                        </p>
                    </div>

                    {/* 주간 전체 시간표 (Linear Time-Grid Weekly Schedule) */}
                    <div className="mb-16">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-accent-text" />
                                    주간 수업 시간표 (Weekly Schedule)
                                </h3>
                                <p className="text-sm text-slate-600 mt-1">
                                    시간표의 빈 시간대는 신규 소규모 그룹 코호트 또는 1:1 맞춤형 수업 개설이 가능한 시간대입니다.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold">
                                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5 rounded-lg shadow-2xs">
                                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                    그룹 랩 (모집 중)
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-600 border border-purple-100 px-3 py-1.5 rounded-lg shadow-2xs">
                                    <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                                    1:1 프라이빗 멘토링
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white text-slate-600 border border-dashed border-slate-300 px-3 py-1.5 rounded-lg shadow-2xs">
                                    <span className="w-2.5 h-2.5 rounded-xs border border-dashed border-slate-400 bg-slate-50"></span>
                                    빈 시간대: 신규 그룹·1:1 개설 가능
                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <div className="min-w-[920px]">
                                    {/* Top Header Row: Time Gutter + 7 Days */}
                                    <div className="grid grid-cols-[68px_repeat(7,minmax(0,1fr))] bg-primary text-white border-b border-slate-200">
                                        <div className="py-3 px-2 text-center text-[11px] font-semibold text-slate-400 border-r border-white/10 flex items-center justify-center">
                                            CST
                                        </div>
                                        {koreanWeeklyCalendar.map((day, idx) => (
                                            <div
                                                key={idx}
                                                className="py-3 px-2 text-center border-r border-white/10 last:border-r-0"
                                            >
                                                <div className="text-xs font-bold tracking-widest uppercase text-accent">{day.dayShort}</div>
                                                <div className="text-xs font-medium text-slate-300">{day.dayKor}</div>
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
                                            {calendarHours.map((hour) => (
                                                <div
                                                    key={hour}
                                                    className="border-b border-slate-100 pr-2.5 pt-1 text-right text-[11px] font-semibold text-slate-400"
                                                    style={{ height: `${HOUR_HEIGHT}px` }}
                                                >
                                                    {formatHourLabel(hour)}
                                                </div>
                                            ))}
                                        </div>

                                        {/* 7 Day Columns with Linear Hour Grid Lines & Positioned Session Blocks */}
                                        {koreanWeeklyCalendar.map((day, dIdx) => (
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
                                                                    <span className="text-[9px] font-bold bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded leading-none shrink-0">
                                                                        그룹
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
                                                                    <span className="text-[9px] font-bold bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded leading-none shrink-0">
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

                    {/* 1. 그룹 랩 (Active Group Labs) */}
                    <div className="mb-16">
                        <div className="mb-6 pb-4 border-b border-slate-200">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-2">
                                <Users className="w-3.5 h-3.5" />
                                소수 정예 코호트 (정원 3–6명)
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary">그룹 랩 (Active Group Labs)</h3>
                        </div>

                        {/* 현재 재원생 소속 학교 배너 */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-2.5 shrink-0">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center shadow-2xs">
                                    <GraduationCap className="w-4 h-4 text-blue-600" />
                                </div>
                                <span className="text-xs font-bold text-slate-600">
                                    현재 코호트 재원생 소속 학교:
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Spicewood Elementary",
                                    "Canyon Vista Middle",
                                    "Pearson Ranch Middle",
                                    "Cedar Valley Middle",
                                    "Westwood High",
                                    "McNeil High",
                                ].map((school, idx) => (
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
                            {koreanGroupLabs.map((lab, idx) => (
                                <div
                                    key={idx}
                                    className="bg-blue-50 rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3">
                                            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">
                                                {lab.grades}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-white border border-blue-100 px-2.5 py-0.5 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                                {lab.status}
                                            </span>
                                        </div>

                                        <h4 className="text-2xl font-bold text-primary mb-1">{lab.name}</h4>
                                        <p className="text-xs font-semibold text-blue-600 mb-3">{lab.subtitle}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                            {lab.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-blue-100 flex items-center justify-between gap-2 text-xs font-semibold">
                                        <div className="inline-flex items-center gap-1.5 text-primary bg-white px-3 py-1.5 rounded-lg border border-blue-100">
                                            <Calendar className="w-3.5 h-3.5 text-blue-600" />
                                            <span>일정: <strong className="text-blue-600">{lab.schedule}</strong></span>
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

                    {/* 2. 1:1 프라이빗 멘토링 (Private 1:1 Mentorship) */}
                    <div>
                        <div className="mb-6 pb-4 border-b border-slate-200">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full mb-2">
                                <UserCheck className="w-3.5 h-3.5 text-purple-600" />
                                맞춤형 개별 진도 및 심화 연구
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary">1:1 프라이빗 멘토링 (현재 운영 현황)</h3>
                        </div>

                        {/* 로컬 명문고 내신(GPA) & AP 수학 맞춤 배너 */}
                        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="flex items-start sm:items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-primary flex items-center justify-center shadow-2xs shrink-0 mt-0.5 sm:mt-0">
                                    <GraduationCap className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-primary block">
                                        오스틴 명문 고교 학교별 내신(GPA) &amp; AP 수학 완벽 대비
                                    </span>
                                    <p className="text-xs text-slate-600 mt-0.5">
                                        1:1 프라이빗 수업은 각 고등학교(Honors / AP)의 실제 진도, 시험 출제 경향 및 과제에 100% 맞춘 밀착 내신 관리로 진행됩니다:
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
                            {koreanPrivateRoster.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2.5 py-1 rounded-md">
                                                {item.grades}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-white border border-purple-100 px-3 py-1 rounded-full">
                                                <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                                {item.school}
                                            </span>
                                        </div>
                                        <h4 className="text-2xl font-bold text-primary mb-1">{item.course}</h4>
                                        <p className="text-xs font-semibold text-purple-600 mb-3">{item.subtitle}</p>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                            {item.focus}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-purple-100 flex items-center justify-between gap-2 text-xs font-semibold">
                                        <div className="inline-flex items-center gap-1.5 text-primary bg-white px-3 py-1.5 rounded-lg border border-purple-100">
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

                        {/* 학부모 실제 첫 수업 피드백 카드 */}
                        <div className="mt-8 bg-white rounded-2xl p-6 md:p-8 border border-purple-100 border-l-4 border-l-purple-600 shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                                    첫 수업 후 학부모님 실제 피드백
                                </span>
                                <span className="text-xs font-semibold text-slate-400">
                                    AP Calculus 1:1 프라이빗 멘토링 · Westwood High
                                </span>
                            </div>
                            <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
                                &ldquo;선생님, 오늘 첫 수업 너무 좋았다고 합니다. 아이가 수학 수업 후에 저렇게 흥분해서 말하는 건 처음이네요. <strong className="text-primary font-semibold">&lsquo;컨셉(원리)이 이렇게 중요한지 몰랐다&rsquo;</strong>고, 선생님 설명을 듣는 순간 머리에서 팡팡 하고 이해되는 느낌을 받았다고 해요. <strong className="text-primary font-semibold">이제껏 안 풀렸던 문제들이 왜 그랬는지 비로소 이해되는 느낌</strong>이었다네요. 아이가 자기에게 너무나 필요했던 선생님을 만난 것 같다고 좋아합니다. 감사해요, 앞으로의 수업들이 기대됩니다.&rdquo;
                            </blockquote>
                            <div className="text-xs font-bold text-primary">
                                — Westwood High · AP Calculus 1:1 멘토링 수강생 학부모님
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Consultation Section */}
            <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">입학 및 상담 문의</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            학부모님들의 편의를 위해 <strong className="text-accent">한국어 상담</strong>을 기본으로 제공하고 있습니다. 학생의 현재 수학 진도와 목표를 함께 설계해 드립니다.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                            <div className="flex items-center gap-2 text-white">
                                <MapPin className="text-accent" />
                                <span>Northwest Austin 지역 프라이빗 랩</span>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-full text-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-105 transition-all"
                        >
                            신규 등록 상담 예약하기
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
