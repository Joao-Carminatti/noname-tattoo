import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "solid" | "outline";
  size?: "md" | "sm";
  /** Nome do evento de analytics (ex.: "whatsapp_click"). */
  track?: string;
  place?: string;
  children: ReactNode;
};

/** CTA com gota de tinta: só CSS (clip-path). As coordenadas vêm de <Behaviors />. */
export function Button({ href, variant = "solid", size = "md", track, place, children }: Props) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      data-track={track}
      data-place={place}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`btn-ink ${variant === "solid" ? "btn-solid" : "btn-outline"} ${size === "sm" ? "btn-sm" : ""}`}
    >
      {children}
    </a>
  );
}
