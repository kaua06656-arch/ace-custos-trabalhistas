import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Custos Trabalhistas do Gestor de RH",
  description: "Infográfico sobre custos trabalhistas - ACE UNIFSA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
