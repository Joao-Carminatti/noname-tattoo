export type Style = "fineline" | "blackwork" | "realismo" | "colorida";
export const STYLE_LABEL: Record<Style, string> = {
  fineline: "Fineline",
  blackwork: "Blackwork",
  realismo: "Realismo",
  colorida: "Colorida",
};
export type Piece = {
  id: string;
  style: Style;
  artist: string;
  /** Alt descritivo da imagem (acessibilidade). */
  alt: string;
  /** Caminho em /public/portfolio. Sem src, o site mostra um espaço reservado. */
  src?: string;
};

/** [PENDENTE] Trocar pelos trabalhos reais autorizados pelo estúdio. */
export const pieces: Piece[] = (
  ["fineline", "blackwork", "realismo", "colorida", "fineline", "blackwork", "realismo", "colorida"] as Style[]
).map((style, i) => ({
  id: `p${i + 1}`,
  style,
  artist: "[PENDENTE] Artista",
  alt: `[PENDENTE] Descrição da tatuagem ${STYLE_LABEL[style].toLowerCase()}`,
}));
