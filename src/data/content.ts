export const services = [
  { title: "Tatuagem", text: "Projetos autorais e referências suas, desenhados para o seu corpo." },
  { title: "Cobertura", text: "Avaliamos a tatuagem que você já tem e propomos um novo desenho para cobri-la." },
  { title: "Piercing", text: "Colocação feita com materiais esterilizados, com orientação de cuidados." },
];

export const biosafety = [
  { title: "Materiais esterilizados", text: "Instrumentos esterilizados antes de cada atendimento." },
  { title: "Descartáveis", text: "Itens de uso único abertos na sua frente." },
  { title: "Cuidados na prática", text: "Orientação por escrito para cicatrizar bem depois da sessão." },
];

export const process = [
  { title: "Conversa e referência", text: "Você conta a ideia, o local do corpo e o tamanho aproximado." },
  { title: "Orçamento e arte", text: "Enviamos o valor e o desenho para você aprovar." },
  { title: "Sessão", text: "Tatuagem feita num ambiente com música e boa conversa." },
  { title: "Cuidados pós-tattoo", text: "Instruções de cicatrização e retoque, se for preciso." },
];

export const faq = [
  { q: "Dói muito?", a: "Depende do local e da sensibilidade de cada pessoa. Costelas, pés e dedos costumam incomodar mais. Converse com o artista antes e peça pausas se precisar." },
  { q: "Como cuido da tatuagem depois?", a: "Você recebe as instruções ao final da sessão. Em geral: lavar com sabonete neutro, hidratar e evitar sol, mar e piscina durante a cicatrização." },
  { q: "Como funcionam os valores?", a: "O valor depende do tamanho, do nível de detalhe e do local. Mande a referência pelo WhatsApp para receber o orçamento." },
  { q: "Qual a idade mínima?", a: "[PENDENTE: confirmar a política do estúdio para menores de idade]" },
  { q: "Preciso dar sinal para agendar?", a: "[PENDENTE: confirmar valor e regras do sinal]" },
  { q: "E se precisar de retoque?", a: "[PENDENTE: confirmar a política de retoque]" },
];

/** Só avaliações autorizadas pelo cliente. Texto original, sem edição. */
export type Testimonial = { name: string; text: string };
export const testimonials: Testimonial[] = [
  { name: "Ana Carolina V.", text: "Ambiente limpo e organizado. Atendimento excelente. Indico a tatuadora Fernanda Niemann, profissional de qualidade!" },
  { name: "Lu T.", text: "Tatuador Lucas é bom demais. Muito gentil e profissional. O ambiente tava muito legal, com música e boas conversas. recomendo" },
  { name: "Maisa", text: "Adorei descobrir esse lugar, muito aconchegante e estiloso, a Fer Regina com quem fiz a tattoo é sensacional!! obrigada! ❤️" },
  { name: "Berenice G.", text: "Lugar massa, profissionais incríveis, claro eu tenho minha artista favorita Fernanda Regina super talentosa arrasa no que faz tem minha admiração parabéns." },
  { name: "Arthur S.", text: "Excelente trabalho dos tatuadores. Recomendo demais" },
  { name: "Bruno B.", text: "Tatuador Caio é brabo" },
];

export const highlights = [
  "Atendimento cuidadoso",
  "Materiais esterilizados",
  "Técnica e capricho",
  "Ambiente com música e boas conversas",
];
