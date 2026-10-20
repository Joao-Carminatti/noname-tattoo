import { whatsappUrl } from "@/lib/whatsapp";

/** Botão flutuante. O evento de clique é tratado por <Behaviors /> via data-track. */
export function WhatsAppFab() {
  return (
    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-place="fab" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-stencil text-ink-950 shadow-lg shadow-ink-950/60 transition-transform hover:scale-105">
      <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><path d="M4 20l1.4-4.2A8 8 0 1 1 8.4 18.7z" /></svg>
    </a>
  );
}
