/**
 * Dados do estúdio. Para reaproveitar o projeto em outro estúdio,
 * troque este arquivo (e os tokens de cor em globals.css).
 * Qualquer valor [PENDENTE] precisa ser confirmado com o cliente antes de publicar.
 */

export const PENDING = "[PENDENTE]" as const;

export type SiteConfig = {
  name: string;
  legalSearchName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  /** Somente dígitos com DDI. Ex.: 5548999999999. Confirmar o número (DDD 46 não é de Florianópolis). */
  whatsappNumber: string | typeof PENDING;
  /** Texto exibido para o telefone. */
  phoneDisplay: string | typeof PENDING;
  instagramHandle: string;
  instagramUrl: string;
  /** Formato schema.org, ex.: "Mo-Sa 13:00-23:00". Vazio até confirmar com o cliente. */
  openingHours: string[];
  /** Texto exibido no site. */
  hoursLabel: string;
  googleRating: { value: number; count: number };
  cnpj: string | null;
};

export const site: SiteConfig = {
  name: "NONAME TATTOO",
  legalSearchName: "No Name Tattoo",
  tagline: "Sem rótulos, sem regras.",
  description:
    "Estúdio de tatuagem e piercing no Rio Tavares, em Florianópolis. Artistas independentes, materiais esterilizados e atendimento exclusivo. Agende pelo WhatsApp.",
  url: "https://example.com", // [PENDENTE] domínio final
  locale: "pt_BR",
  address: {
    street: "Rodovia Dr. Antônio Luiz Moura Gonzaga, 2731",
    neighborhood: "Rio Tavares",
    city: "Florianópolis",
    region: "SC",
    postalCode: "88048-300",
    country: "BR",
  },
  whatsappNumber: "5548999836789",
  phoneDisplay: "(48) 99983-6789",
  instagramHandle: "tattoononame",
  instagramUrl: "https://www.instagram.com/tattoononame",
  openingHours: ["Mo-Su 10:00-23:00"],
  hoursLabel: "Todos os dias, das 10h às 23h",
  googleRating: { value: 5.0, count: 13 },
  cnpj: null,
};
