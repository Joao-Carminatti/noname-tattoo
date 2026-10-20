/** Traço orgânico desenhado ao entrar na viewport. Técnica: stroke-dashoffset em pathLength=1 (CSS .io). */
export function InkUnderline() {
  return (
    <svg className="io ink mt-3 h-3 w-48 text-stencil" viewBox="0 0 240 12" fill="none" aria-hidden="true">
      <path d="M2 8 C40 2 80 12 120 6 S190 3 238 7" pathLength={1} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
