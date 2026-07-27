import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workspace from "@/components/Workspace";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero />

      <Workspace />

      <Features />

      <Footer />
    </main>
  );
}