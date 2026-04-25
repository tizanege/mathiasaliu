import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Vision from "@/components/sections/Vision";
import Impact from "@/components/sections/Impact";
import WhyChoose from "@/components/sections/WhyChoose";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Impact />
        <WhyChoose />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
