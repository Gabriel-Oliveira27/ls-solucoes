import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { company } from "@/content/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lssolucoes.com.br"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Construtora no Cariri. Construção, reforma, projeto e gerenciamento de obra com engenheiro responsável, orçamento aberto e prazo cumprido.",
  keywords: [
    "construtora",
    "engenharia civil",
    "reforma",
    "projeto arquitetônico",
    "Juazeiro do Norte",
    "Cariri",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: company.name,
    title: `${company.name} — ${company.tagline}`,
    description:
      "Construção, reforma, projeto e gerenciamento de obra no Cariri, do primeiro traço à entrega das chaves.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1e3d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
