/** Adaga em linework que "se tatua" no hero. Cada traço usa pathLength=1; ver .tattoo-draw em globals.css. */
export function InkLine({ className = "" }: { className?: string }) {
  const p = { pathLength: 1 as const };
  return (
    <svg className={`tattoo-draw ${className}`} viewBox="0 0 120 380" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path {...p} d="M60 8 L74 70 L72 208 L60 230 L48 208 L46 70 Z" />
      <path {...p} d="M60 22 L60 214" />
      <path {...p} d="M16 236 Q60 216 104 236 Q60 252 16 236 Z" />
      <path {...p} d="M54 250 V324 M66 250 V324" />
      <path {...p} d="M54 266 L66 274 M54 284 L66 292 M54 302 L66 310" />
      <path {...p} d="M48 342 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0" />
    </svg>
  );
}
