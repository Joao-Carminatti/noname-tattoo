import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/data/site";
import { tattooParlorJsonLd } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";
import { Behaviors } from "@/components/motion/Behaviors";
import { ScrollGuide } from "@/components/motion/ScrollGuide";
import "./globals.css";

/* Fontes self-hosted (arquivos em src/fonts), sem requisição a terceiros. */
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-wght-normal.woff2", style: "normal" },
    { path: "../fonts/fraunces-latin-wght-italic.woff2", style: "italic" },
  ],
  variable: "--font-fraunces",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Estúdio de tatuagem em Florianópolis`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "estúdio de tatuagem em Florianópolis",
    "tatuagem Rio Tavares",
    "piercing Florianópolis",
    "cobertura de tatuagem",
    site.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    // images: definidas quando houver /public/og.jpg (1200x630)
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-stencil focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Pular para o conteúdo
        </a>
        <ScrollGuide />
        {children}
        <Behaviors />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(tattooParlorJsonLd()) }}
        />
      </body>
    </html>
  );
}
