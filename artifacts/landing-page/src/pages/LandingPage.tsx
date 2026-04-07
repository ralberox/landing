import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import HowItWorks from "@/sections/HowItWorks";
import Metodologia from "@/sections/Metodologia";
import Programs from "@/sections/Programs";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Metodologia />
      <Programs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
