import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "../ui/Button";

const links = [["Sobre", "#sobre"], ["Artistas", "#artistas"], ["Portfólio", "#portfolio"], ["Serviços", "#servicos"], ["FAQ", "#faq"], ["Contato", "#contato"]];

/** Cabeçalho sem JS: menu mobile com <details>. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-950/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-xl tracking-[0.2em]" aria-label={`${site.name}, início`}>NONAME</a>
        <nav aria-label="Principal" className="hidden gap-7 text-sm text-muted md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="hover:text-bone">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block"><Button size="sm" href={whatsappUrl()} track="whatsapp_click" place="header">Agendar</Button></div>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none px-2 py-2 text-sm">Menu</summary>
            <nav aria-label="Menu mobile" className="absolute right-0 mt-2 flex w-48 flex-col gap-1 rounded border border-ink-700 bg-ink-900 p-3">
              {links.map(([l, h]) => <a key={h} href={h} className="py-2 text-muted hover:text-bone">{l}</a>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
