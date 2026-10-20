import { Section } from "../ui/Section";
import { FlashSheet } from "../motion/FlashSheet";

export function About() {
  return (
    <div className="relative">
      <FlashSheet />
      <Section id="sobre" title="Sem rótulos, sem regras">
        <div className="max-w-[62ch] space-y-5 text-lg">
          <p>O NONAME TATTOO é um estúdio diferente: cada atendimento é único e exclusivo, pensado para quem busca algo que seja só seu.</p>
          <p>Aqui trabalham artistas independentes que acreditam na tatuagem como forma de expressão. O ambiente tem música e boa conversa, e o cuidado começa antes da primeira linha.</p>
          <p className="text-sm text-muted">[PENDENTE] Substituir pelo texto completo da bio do estúdio.</p>
        </div>
      </Section>
    </div>
  );
}
