import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KoreanClient from "./KoreanClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "한국어 안내 | PrismMath Academy",
    description: "오스틴 상위 25% 학생을 위한 수학 아카데미. 한국 교육의 체계적인 깊이와 미국 최상위 대학의 논리적 사고력을 결합합니다.",
};

export default function KoreanPage() {
    return (
        <main className="min-h-screen relative overflow-hidden bg-white selection:bg-accent/30 selection:text-primary pt-24">
            <Navbar />
            <KoreanClient />
            <Footer />
        </main>
    );
}
