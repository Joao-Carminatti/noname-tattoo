"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { pieces, STYLE_LABEL, type Piece, type Style } from "@/data/portfolio";
import { Section } from "../ui/Section";

/** Galeria com filtro e lightbox em <dialog> nativo. Cada tile usa o efeito stencil -> foto (clip-path). */
export function Portfolio() {
  const [filter, setFilter] = useState<Style | "todos">("todos");
  const [open, setOpen] = useState<Piece | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const list = filter === "todos" ? pieces : pieces.filter((p) => p.style === filter);
  const styles = Object.keys(STYLE_LABEL) as Style[];

  return (
    <Section id="portfolio" title="Portfólio">
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrar por estilo">
        {(["todos", ...styles] as const).map((s) => (
          <button key={s} aria-pressed={filter === s} onClick={() => setFilter(s)} className="rounded-full border border-ink-700 px-4 py-1.5 text-sm aria-pressed:border-stencil aria-pressed:bg-stencil aria-pressed:text-ink-950">
            {s === "todos" ? "Todos" : STYLE_LABEL[s]}
          </button>
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <li key={p.id}>
            <button onClick={() => { setOpen(p); dialog.current?.showModal(); }} aria-label={`Ampliar: ${p.alt}`} className="stencil io relative block aspect-[4/5] w-full overflow-hidden bg-ink-900">
              {p.src ? (
                <>
                  <Image src={p.src} alt="" fill sizes="(min-width:768px) 25vw, 50vw" className="stencil-base object-cover" />
                  <span className="stencil-tint absolute inset-0" />
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="stencil-photo object-cover" />
                </>
              ) : (
                <>
                  <span className="absolute inset-0 border border-dashed border-stencil/60" />
                  <span className="stencil-photo absolute inset-0 grid place-items-center bg-ink-700 text-sm text-muted">Foto [PENDENTE]</span>
                </>
              )}
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dialog} onClose={() => setOpen(null)} onClick={(e) => e.target === dialog.current && dialog.current?.close()} className="m-auto max-h-[90svh] w-[min(90vw,48rem)] bg-ink-900 p-4 text-bone backdrop:bg-ink-950/90">
        {open && (
          <figure>
            <div className="relative aspect-[4/5] max-h-[75svh] w-full bg-ink-700">
              {open.src ? <Image src={open.src} alt={open.alt} fill sizes="90vw" className="object-contain" /> : <span className="grid h-full place-items-center text-muted">Foto [PENDENTE]</span>}
            </div>
            <figcaption className="mt-3 flex items-center justify-between text-sm text-muted">
              <span>{STYLE_LABEL[open.style]} · {open.artist}</span>
              <button onClick={() => dialog.current?.close()} className="text-bone underline underline-offset-4">Fechar</button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </Section>
  );
}
