import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Values from "@/components/Values";
import Legal from "@/components/Legal";
import Contact from "@/components/Contact";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <WhyUs />
      <Values />
      <Legal />
      <Contact />
      <SiteFooter />
    </main>
  );
}
