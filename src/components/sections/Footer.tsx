import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-700 py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-6">
        <p>© {new Date().getFullYear()} {site.name}{site.cnpj ? ` · CNPJ ${site.cnpj}` : ""}</p>
        <p className="flex gap-5"><a href={site.instagramUrl} className="hover:text-bone">Instagram</a><a href="/privacidade" className="hover:text-bone">Privacidade</a></p>
      </div>
    </footer>
  );
}
