"use client";
import { briefToMessage, whatsappUrl } from "@/lib/whatsapp";

/** Formulário opcional: monta a mensagem e abre o WhatsApp. Nada é enviado a servidor. */
export function BriefForm() {
  return (
    <form
      className="space-y-3 border-t border-ink-700 pt-6"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const msg = briefToMessage({ name: String(d.get("name")), idea: String(d.get("idea")), bodyPart: String(d.get("part")), size: String(d.get("size")) });
        window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
      }}
    >
      <p className="font-display text-xl">Conte a sua ideia</p>
      {[["name", "Seu nome"], ["idea", "Ideia da tatuagem"], ["part", "Local do corpo"], ["size", "Tamanho aproximado"]].map(([n, l]) => (
        <label key={n} className="block text-sm">{l}
          <input name={n} className="mt-1 w-full border border-ink-700 bg-ink-900 px-3 py-2 text-bone" />
        </label>
      ))}
      <button type="submit" data-track="whatsapp_click" data-place="form" className="btn-ink btn-solid">Enviar pelo WhatsApp</button>
    </form>
  );
}
