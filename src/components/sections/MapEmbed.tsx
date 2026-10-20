"use client";
import { useState } from "react";

/** Mapa carregado só no clique, para não pesar a página. */
export function MapEmbed({ query }: { query: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="aspect-[4/3] w-full bg-ink-900">
      {on ? (
        <iframe title="Mapa do NONAME TATTOO" src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`} className="size-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <button onClick={() => setOn(true)} className="grid size-full place-items-center text-muted hover:text-bone">Carregar mapa</button>
      )}
    </div>
  );
}
