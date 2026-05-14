import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TariffsPreview } from "@/components/TariffsPreview";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CoverageCTA } from "@/components/CoverageCTA";
import { FAQ } from "@/components/FAQ";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TariffsPreview />
      <CoverageCTA />
      <WhyUsSection />
      <FAQ />
      <ContactCTA />
    </>
  );
}
