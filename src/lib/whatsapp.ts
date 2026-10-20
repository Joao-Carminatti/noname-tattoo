import { site, PENDING } from "@/data/site";

export const DEFAULT_MESSAGE =
  "Olá! Vi o site do NONAME TATTOO e quero fazer um orçamento.";

/** Monta o link do WhatsApp. Sem número confirmado, aponta para o Instagram (nunca para um número errado). */
export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  if (site.whatsappNumber === PENDING) return site.instagramUrl;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type TattooBrief = {
  name: string;
  idea: string;
  bodyPart: string;
  size: string;
};

/** Usado pelo formulário opcional: monta a mensagem, sem enviar nada a servidor. */
export function briefToMessage({ name, idea, bodyPart, size }: TattooBrief): string {
  return [
    `Olá! Sou ${name || "um cliente novo"} e quero fazer um orçamento.`,
    idea && `Ideia: ${idea}`,
    bodyPart && `Local do corpo: ${bodyPart}`,
    size && `Tamanho aproximado: ${size}`,
  ]
    .filter(Boolean)
    .join("\n");
}
