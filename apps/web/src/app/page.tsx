import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import The6GateJourney from "@/components/sections/The6GateJourney";
import HowItWorks from "@/components/sections/HowItWorks";
import DocumentIntelligence from "@/components/sections/DocumentIntelligence";
import OpportunityEngine from "@/components/sections/OpportunityEngine";
import WhatsAppExperience from "@/components/sections/WhatsAppExperience";
import USSDExperience from "@/components/sections/USSDExperience";
import WhySabiGuide from "@/components/sections/WhySabiGuide";
import PaymentIntegration from "@/components/sections/PaymentIntegration";
import CompetitorComparison from "@/components/sections/CompetitorComparison";
import SocialImpact from "@/components/sections/SocialImpact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <The6GateJourney />
      <HowItWorks />
      <DocumentIntelligence />
      <OpportunityEngine />
      <WhatsAppExperience />
      <USSDExperience />
      <WhySabiGuide />
      <PaymentIntegration />
      <CompetitorComparison />
      <SocialImpact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
