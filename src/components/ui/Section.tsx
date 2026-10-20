import type { ReactNode } from "react";
import { InkUnderline } from "../motion/InkUnderline";

/** Bloco de seção: id para âncora, título com sublinhado de tinta e respiro padrão. */
export function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="relative py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id={`${id}-t`} className="font-display text-3xl font-light italic tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <InkUnderline />
        {intro && <p className="mt-6 max-w-[60ch] text-muted">{intro}</p>}
        <div className="mt-8 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
