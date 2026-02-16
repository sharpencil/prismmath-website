import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-white selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
