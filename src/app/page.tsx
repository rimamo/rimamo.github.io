import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import VerticalsGrid from "@/components/VerticalsGrid";
import WhyFractional from "@/components/WhyFractional";
import AboutStrip from "@/components/AboutStrip";
import FAQ from "@/components/FAQ";
import ContactBlock from "@/components/ContactBlock";
import SiteFooter from "@/components/SiteFooter";
import OdooLivechat from "@/components/OdooLivechat";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VerticalsGrid />
        <WhyFractional />
        <AboutStrip />
        <FAQ />
        <ContactBlock />
      </main>
      <SiteFooter />
      <OdooLivechat channelId={2} />
    </>
  );
}
