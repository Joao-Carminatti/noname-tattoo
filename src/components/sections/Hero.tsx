import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "../ui/Button";
import { InkLine } from "../motion/InkLine";

/** O LCP é o <h1> (texto): nunca depende de animação. A adaga se desenha depois do primeiro paint. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:min-h-[calc(100svh-4rem)] md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <h1 className="font-display text-5xl font-light italic leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">{site.name}</h1>
          <p className="mt-6 font-display text-2xl text-stencil-soft sm:text-3xl">{site.tagline}</p>
          <p className="mt-6 max-w-[48ch] text-muted">Estúdio de tatuagem e piercing no Rio Tavares, Florianópolis. Cada atendimento é único e exclusivo.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={whatsappUrl()} track="whatsapp_click" place="hero">Agendar pelo WhatsApp</Button>
            <Button href="#portfolio" variant="outline">Ver portfólio</Button>
          </div>
        </div>
        <InkLine className="mx-auto h-56 w-auto text-stencil sm:h-80 lg:h-[28rem]" />
      </div>
    </section>
  );
}
