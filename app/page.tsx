import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";
import Principles from "@/components/sections/Principles";
import How from "@/components/sections/How";
import Services from "@/components/sections/Services";
import Proof from "@/components/sections/Proof";
import Team from "@/components/sections/Team";
import FitNotFit from "@/components/sections/FitNotFit";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-inter)] relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Why />
        <Principles />
        <How />
        <Services />
        <Proof />
        <Team />
        <FitNotFit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
