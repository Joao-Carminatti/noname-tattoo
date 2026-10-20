import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Privacidade", alternates: { canonical: "/privacidade" } };

export default function Privacidade() {
  return (
    <main id="conteudo" className="mx-auto max-w-2xl space-y-5 px-6 py-24">
      <h1 className="font-display text-5xl italic">Privacidade</h1>
      <p>Este site não usa cookies de publicidade e não guarda os dados que você digita no formulário: ao enviar, a mensagem é montada no seu aparelho e aberta no WhatsApp.</p>
      <p>Medimos visitas e cliques nos botões de contato com uma ferramenta de analytics que não identifica você pessoalmente.</p>
      <p>Ao conversar pelo WhatsApp ou Instagram, valem as políticas dessas plataformas. Para pedir informações ou a exclusão de dados que você nos enviou por lá, fale com {site.name} pelo Instagram @{site.instagramHandle}.</p>
      <p><a href="/" className="text-stencil-soft underline underline-offset-4">Voltar ao site</a></p>
    </main>
  );
}
