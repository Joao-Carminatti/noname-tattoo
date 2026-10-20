import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Artists } from "@/components/sections/Artists";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services, Biosafety, Process, Testimonials, Faq } from "@/components/sections/Lists";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero /><About /><Artists /><Portfolio /><Services /><Biosafety /><Process /><Testimonials /><Faq /><Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
