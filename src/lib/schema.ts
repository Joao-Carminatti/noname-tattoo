import { site, PENDING } from "@/data/site";

/**
 * JSON-LD TattooParlor (schema.org). Campos pendentes são omitidos, nunca inventados.
 * aggregateRating fica de fora de propósito: o Google ignora avaliações
 * "autoprovidas" em LocalBusiness, e a nota 5,0 aparece como selo visual.
 */
export function tattooParlorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: site.name,
    alternateName: site.legalSearchName,
    description: site.description,
    url: site.url,
    sameAs: [site.instagramUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(site.phoneDisplay !== PENDING && { telephone: site.phoneDisplay }),
    ...(site.openingHours.length > 0 && { openingHours: site.openingHours }),
  };
}
