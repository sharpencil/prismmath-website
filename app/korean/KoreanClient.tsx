'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, GraduationCap, MapPin, Users, BookOpen } from 'lucide-react';

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
                                수학 조기 정복, <br />
                                <span className="text-accent">입시를 주도하라</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-8">
                                패턴 암기가 아닌, 원리를 관통하는 수학. 전직 공대 교수 Dr. Ryu가 직접 설계한 'University-Track' 로드맵
                                <br /><br />
                                <span className="font-semibold text-white">미국 명문대 STEM 진학부터 한국식 '실력 정석' 심화까지, 오스틴 북서부 상위권 한인학생들을 위한 전략적 수학 파트너</span>
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
                            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10"
                        >
                            <div className="absolute inset-0 z-0 bg-primary">
                                <Image
                                    src="/founder1.png"
                                    alt="Dr. Young Ryu"
                                    fill
                                    className="object-cover object-center scale-75 origin-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                {/* Face concealment overlay - significant dark opacity from Top Left */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/95 via-35% to-transparent/5"></div>
                            </div>
                            <div className="absolute inset-0 z-10 p-8">
                                <div className="absolute bottom-8 left-8 text-left">
                                    <h3 className="text-lg font-bold mb-3 text-white">Dr. Young Ryu</h3>
                                    <div className="space-y-2 text-gray-200">
                                        <p><strong className="text-white">카이스트</strong> 학사/석사 (B.S./M.S., KAIST)</p>
                                        <p><strong className="text-white">버지니아 공대</strong> 박사 (Ph.D., Virginia Tech)</p>
                                        <p>전 <strong className="text-white">텍사스 주립대</strong>(Texas State) 교수</p>
                                    </div>
                                </div>
                            </div>
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
                        <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b pb-4">오스틴 한인 학부모님들께,</h2>

                        <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                            <p>
                                안녕하십니까. PRISMMath Academy 원장 류영(Young Ryu, PhD)입니다.
                            </p>
                            <p>
                                제 첫째 아이가 중학교 진학을 앞두고 수학 교육을 고민하며 오스틴의 많은 학원과 튜터를 알아보았습니다. 하지만 제 기준에 차는 곳을 찾기란 쉽지 않았습니다. 비용은 높았지만 커리큘럼은 단편적이었고, 교재의 수준이나 강사의 전문성은 명문대 진학을 뒷받침하기에 부족해 보였습니다. &quot;마땅히 보낼 곳이 없다면, 내가 직접 내 아이와 그 친구들을 위해 최고의 환경을 만들자&quot;는 결심, 그것이 PRISMMath Academy의 시작입니다.
                            </p>
                            <p>
                                저는 한국의 치열한 입시 현장을 경험하고 성공적으로 살아남았고, 카이스트에서 6년 동안 이공계 엘리트들이 어떻게 사고하고 문제를 해결하는지 몸소 겪었습니다. 또한 미국에서 박사 학위를 받고 대학 강단에서 수년간 공대생들을 위한 확률통계과목과 그 응용과목들을 가르쳤습니다. 한국 수학의 강점인 &apos;탄탄한 기초&apos;와 미국 수학의 핵심인 &apos;논리적 응용&apos;을 모두 섭렵한 전문가로서, 오스틴 한인 학부모님들의 갈증을 해결할 명확한 솔루션을 제시합니다.
                            </p>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">1. PRISMMath의 철학: &quot;패턴 암기가 아닌, 원리 관통을 통한 무한한 응용력&quot;</h3>
                                <p className="mb-2">
                                    대부분의 학원은 수많은 문제를 풀게 하여 비슷한 패턴이 나오기를 기대하는 &apos;양치기식&apos; 공부에 의존합니다. 하지만 이런 방식은 처음 보는 유형이나 고난도 심화 문제 앞에서 무너질 수밖에 없습니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>원리를 꿰뚫는 이해:</strong> 저는 수백 문제를 푸는 것보다, 단 한 문제를 풀더라도 그 밑바닥에 흐르는 수학적 원리를 완벽하게 해부하는 데 중점을 둡니다.</li>
                                    <li><strong>처음 보는 문제도 풀어내는 힘:</strong> 원리를 제대로 관통하면 문제를 많이 풀어보지 않아도, 또 어떤 변형된 문제가 나오더라도 스스로 논리를 세워 해결할 수 있는 능력이 생깁니다. 이것이 제가 추구하는 &apos;진짜 실력&apos;이며, 명문대 입시에서 결정적인 변별력을 만드는 힘입니다.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">2. 메인 트랙: 미국 명문대(STEM) 진학을 위한 &apos;University Operating System&apos;</h3>
                                <p>
                                    단순한 계산 기술은 고등수학에서 한계를 드러냅니다. 저희는 Larson과 Stewart 등 실제 미국 명문 공대에서 사용하는 원서 교재를 기반으로 &apos;대학 수준의 사고 체계&apos;를 구축합니다. 이는 공립학교 교육의 한계를 넘어 STEM 전공에서 독보적인 두각을 나타낼 수 있는 가장 확실한 길입니다. 특히, 오스틴 내에서 지도 가능한 전문가를 찾기 힘든 AP Statistics까지 완벽하게 커버하며 입시의 차별화된 변별력을 만들어냅니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">3. 특별 트랙: &apos;실력 정석&apos;을 통한 압도적 심화와 한국 입시 대비</h3>
                                <p className="mb-2">
                                    한국 귀국 및 한국 대학 입시를 준비하거나, 미국 입시에서도 최상위권의 수학적 깊이를 증명하려는 학생들을 위해 &apos;실력 정석&apos; 과정을 운영합니다. 언제적 실력정석이냐? 하는 물음이 생길수도 있지만 지금도 강남 대치동의 학원가에서는 최상위 학생들을 위해 &apos;실력 정석&apos;반을 운영하는 것이 현실입니다.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>박사의 시각으로 해체하는 정석:</strong> &apos;실력 정석&apos;은 선행 독학이 거의 불가능한 교재입니다. 저는 공학 박사의 시각으로 정석의 복잡한 원리를 논리적으로 해체하여 학생들에게 전수합니다.</li>
                                    <li><strong>전략적 선행의 힘:</strong> 저 또한 고교 시절 훌륭한 방과후 학원 선생님을 만나 고2 여름방학 전 이과 수학 전 과정을 마스터했습니다. 수학을 조기에 정복하며 얻은 시간적, 심리적 여유는 명문대 합격의 결정적 토대가 되었습니다. 우리 아이들에게도 이 &apos;전략적 승리&apos;의 경험을 물려주고 싶습니다.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">4. 이중 언어(Bilingual) 수업: 논리의 깊이와 용어의 완벽한 결합</h3>
                                <p>
                                    수학은 언어가 아닌 논리입니다. 추상적인 고차원 개념은 한국어로 정확하고 깊이 있게 설명하여 100% 이해시키고, 문제 풀이와 용어 적용은 미국 대학 표준에 맞춘 영어로 진행합니다. 언어 때문에 수학적 본질을 놓치는 일 없이, 두 언어의 장점만을 극대화합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-2">5. 독보적 가치와 합리적 투자</h3>
                                <p className="mb-2">박사급 직강임에도 불구하고, PRISMMath는 교육의 문턱을 낮추었습니다.</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>합리적 비용:</strong> 월 $200 수준(Investment 메뉴 참조)의 비용은 일반 프랜차이즈 학원과 비슷하거나 오히려 더 저렴하며, 교육의 질은 비교할 수 없습니다.</li>
                                    <li><strong>미래를 위한 경제적 선택:</strong> 중고교 시절의 시행착오를 줄여 수학을 조기에 마스터하게 하는 것이 가장 경제적이고 확실한 투자입니다.</li>
                                </ul>
                            </div>

                            <div>
                                <p>
                                    현재 Spicewood 초등, Canyon Vista 중등, Westwood 고등학생 등 오스틴 북서쪽 학생들과 소규모 그룹 수업을 진행 중입니다. 제 아이들이 직접 참여하는 수업인 만큼, &apos;내 자식을 가르치는 진정성&apos;을 담아 최고의 선택이 될 것임을 약속드립니다.
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
                                    <Image src="/founder.png" alt="Dr. Ryu" fill className="object-cover" />
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
                                    <span className="text-slate-600">오스틴 북서부(Northwest Austin)에 위치한 쾌적한 학습 환경</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span className="text-slate-600">학생 맞춤형 피드백을 위해 대규모 강의 지양, 소수 정예(Small Cohort) 운영 원칙</span>
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
                                시중의 가벼운 문제집(Worksheets)이 아닙니다. PRISMMath는 실제 대학과 명문 고등학교에서 채택하는
                                Larson Algebra, Stewart Calculus 등의 교과서를 기반으로 깊이 있는 개념을 지도합니다. (Programs 메뉴 참조)
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
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                                {[
                                    { title: "Dimensions Math 6A/6B", image: "/images/textbooks/dimensions-math-6a-6b.jpg" },
                                    { title: "Elementary Algebra", image: "/images/textbooks/larson-elementary-algebra.jpg" },
                                    { title: "Intermediate Algebra", image: "/images/textbooks/larson-intermediate-algebra.jpg" },
                                    { title: "Geometry", image: "/images/textbooks/jacobs-geometry.jpg" },
                                    { title: "Precalculus with Limits", image: "/images/textbooks/larson-precalculus.jpg" },
                                    { title: "Calculus", image: "/images/textbooks/stewart-calculus.jpg" },
                                    { title: "The Practice of Statistics", image: "/images/textbooks/practice-of-statistics.jpg" },
                                    { title: "AoPS Vol 2", image: "/images/textbooks/aops-vol2.jpg" },
                                    { title: "1600.io SAT Math", image: "/images/textbooks/1600io-sat-math.jpg" },
                                    { title: "PWN the SAT", image: "/images/textbooks/pwn-sat.jpg" },
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
