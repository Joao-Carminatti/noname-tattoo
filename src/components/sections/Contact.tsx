import { site, PENDING } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { MapEmbed } from "./MapEmbed";
import { BriefForm } from "./BriefForm";

export function Contact() {
  const a = site.address;
  const full = `${a.street}, ${a.neighborhood}, ${a.city} - ${a.region}, ${a.postalCode}`;
  return (
    <Section id="contato" title="Contato">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <address className="not-italic">{a.street}<br />{a.neighborhood}, {a.city} - {a.region}<br />{a.postalCode}</address>
          <p className="text-muted">{site.hoursLabel}</p>
          {site.phoneDisplay !== PENDING && <p><a href={`tel:+${site.whatsappNumber}`} className="underline underline-offset-4">{site.phoneDisplay}</a></p>}
          <div className="flex flex-wrap gap-4">
            <Button href={whatsappUrl()} track="whatsapp_click" place="contato">Agendar pelo WhatsApp</Button>
            <Button href={site.instagramUrl} variant="outline" track="instagram_click" place="contato">@{site.instagramHandle}</Button>
          </div>
          <BriefForm />
        </div>
        <MapEmbed query={full} />
      </div>
    </Section>
  );
}
