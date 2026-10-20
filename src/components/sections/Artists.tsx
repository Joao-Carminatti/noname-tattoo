import { artists } from "@/data/artists";
import { Section } from "../ui/Section";

export function Artists() {
  return (
    <Section id="artistas" title="Artistas" intro="Cada artista tem seu estilo. Escolha pelo trabalho que mais combina com a sua ideia.">
      <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
        {artists.map((a, i) => (
          <li key={i} className="border-t border-ink-700 pt-5">
            <div className="mb-4 aspect-[4/5] bg-ink-900" role="img" aria-label={`Foto de ${a.name} (espaço reservado)`} />
            <h3 className="font-display text-lg sm:text-2xl">{a.name}</h3>
            <p className="text-muted">{a.style}</p>
            <a href={`https://www.instagram.com/${a.instagram}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-stencil-soft underline underline-offset-4">@{a.instagram}</a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
