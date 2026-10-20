"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * Único script global do site (pequeno):
 * 1) marca elementos .io como visíveis (IntersectionObserver, uma vez);
 * 2) grava a origem do cursor/toque nos botões .btn-ink (gota de tinta);
 * 3) dispara eventos de analytics em elementos [data-track].
 */
export function Behaviors() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".io").forEach((el) => io.observe(el));

    const origin = (e: PointerEvent) => {
      const b = (e.target as Element).closest<HTMLElement>(".btn-ink");
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.setProperty("--x", `${e.clientX - r.left}px`);
      b.style.setProperty("--y", `${e.clientY - r.top}px`);
    };
    const click = (e: MouseEvent) => {
      const t = (e.target as Element).closest<HTMLElement>("[data-track]");
      if (t?.dataset.track) track(t.dataset.track, { place: t.dataset.place ?? "site" });
    };
    document.addEventListener("pointerover", origin);
    document.addEventListener("pointerout", origin);
    document.addEventListener("click", click);
    return () => {
      io.disconnect();
      document.removeEventListener("pointerover", origin);
      document.removeEventListener("pointerout", origin);
      document.removeEventListener("click", click);
    };
  }, []);
  return null;
}
