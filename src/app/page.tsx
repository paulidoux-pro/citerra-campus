import HeroSection from "@/components/sections/HeroSection";
import OffersBanner from "@/components/sections/OffersBanner";
import AboutSection from "@/components/sections/AboutSection";
import KeyFiguresSection from "@/components/sections/KeyFiguresSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import CoSchoolingSection from "@/components/sections/CoSchoolingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OffersBanner />
      <ProjectsSection />
      <AboutSection />
      <KeyFiguresSection />
      <ExpertiseSection />
      <CoSchoolingSection />
      <EcosystemSection />
      <ContactSection />
    </>
  );
}
