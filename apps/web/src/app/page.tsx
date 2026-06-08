import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CoreFeatures from "@/components/sections/CoreFeatures";
import HowItWorks from "@/components/sections/HowItWorks";
import DocumentIntelligence from "@/components/sections/DocumentIntelligence";
import USSDExperience from "@/components/sections/USSDExperience";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoreFeatures />
      <HowItWorks />
      <DocumentIntelligence />
      <USSDExperience />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
