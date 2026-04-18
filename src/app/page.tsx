import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import VerticalsGrid from "@/components/VerticalsGrid";
import AboutStrip from "@/components/AboutStrip";
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
        <AboutStrip />
        <ContactBlock />
      </main>
      <SiteFooter />
      <OdooLivechat channelId={2} />
    </>
  );
}
