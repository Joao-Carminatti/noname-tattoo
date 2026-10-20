const base = "flash absolute text-stencil/30";
/** Símbolos de flash de fundo, com deriva sutil (CSS scroll-driven). Só 2 aparecem no mobile. */
export function FlashSheet() {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinejoin: "round" as const };
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className={`${base} right-3 top-3 size-8 rotate-12 sm:left-[6%] sm:right-auto sm:top-[12%] sm:size-10`} viewBox="0 0 24 24" {...s}><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z" /></svg>
      <svg className={`${base} right-3 bottom-4 size-8 -rotate-6 sm:bottom-auto sm:right-[8%] sm:top-[55%] sm:size-12`} viewBox="0 0 24 24" {...s}><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z" /></svg>
      <svg className={`${base} hidden sm:block right-[22%] top-[8%] size-9 rotate-45`} viewBox="0 0 24 24" {...s}><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>
      <svg className={`${base} hidden sm:block left-[14%] top-[70%] size-11 -rotate-12`} viewBox="0 0 24 24" {...s}><path d="M2 8c4 0 7 2 10 6 3-4 6-6 10-6-2 4-5 7-10 10C7 15 4 12 2 8z" /></svg>
    </div>
  );
}
