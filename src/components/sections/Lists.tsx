import { services, biosafety, process, faq, testimonials, highlights } from "@/data/content";
import { site } from "@/data/site";
import { Section } from "../ui/Section";

export function Services() {
  return (
    <Section id="servicos" title="Serviços">
      <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
        {services.map((s) => (
          <li key={s.title} className="border-t border-stencil/50 pt-5"><h3 className="font-display text-2xl">{s.title}</h3><p className="mt-2 text-muted">{s.text}</p></li>
        ))}
      </ul>
    </Section>
  );
}

export function Biosafety() {
  return (
    <Section id="biosseguranca" title="Biossegurança" intro="Sua saúde vem antes de qualquer desenho.">
      <ul className="grid gap-6 sm:grid-cols-3 sm:gap-8">
        {biosafety.map((s) => (
          <li key={s.title} className="bg-ink-900 p-6"><h3 className="font-display text-xl">{s.title}</h3><p className="mt-2 text-muted">{s.text}</p></li>
        ))}
      </ul>
    </Section>
  );
}

/** Sequência real de etapas, por isso a lista é numerada. */
export function Process() {
  return (
    <Section id="como-funciona" title="Como funciona">
      <ol className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {process.map((s, i) => (
          <li key={s.title}><span className="font-display text-5xl text-stencil" aria-hidden="true">{i + 1}</span><h3 className="mt-2 text-lg font-medium">{s.title}</h3><p className="mt-1 text-muted">{s.text}</p></li>
        ))}
      </ol>
    </Section>
  );
}

export function Testimonials() {
  const { value, count } = site.googleRating;
  return (
    <Section id="depoimentos" title="Quem já tatuou aqui">
      <p className="font-display text-5xl">{value.toFixed(1).replace(".", ",")} <span className="text-lg text-muted">no Google, com {count} avaliações</span></p>
      <ul className="mt-6 flex flex-wrap gap-2">{highlights.map((h) => <li key={h} className="rounded-full border border-ink-700 px-4 py-1.5 text-sm text-muted">{h}</li>)}</ul>
      {testimonials.length > 0 && (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => <li key={t.name} className="bg-ink-900 p-5"><blockquote>{t.text}</blockquote><p className="mt-3 text-sm text-muted">{t.name}</p></li>)}
        </ul>
      )}
    </Section>
  );
}

/** FAQ com <details>: acessível e sem JS. */
export function Faq() {
  return (
    <Section id="faq" title="Perguntas frequentes">
      <div className="max-w-3xl divide-y divide-ink-700 border-y border-ink-700">
        {faq.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="cursor-pointer list-none text-lg font-medium">{f.q}</summary>
            <p className="mt-3 max-w-[60ch] text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
