import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Reasons } from "@/components/reasons";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { company, faq } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  slogan: company.tagline,
  telephone: `+${company.whatsapp.e164}`,
  email: company.email,
  areaServed: company.region,
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressRegion: company.state,
    addressCountry: "BR",
  },
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Reasons />
        <Process />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
