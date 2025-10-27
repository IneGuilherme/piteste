// Layout raiz da aplicação. Adicionado Toaster para notificações.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"; // Importa o Toaster

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Mantém seus metadados originais ou ajuste conforme necessário
export const metadata: Metadata = {
  title: "Projeto Integrador - Piteste", // Atualizado
  description: "Aplicação do projeto integrador", // Atualizado
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {" "}
      {/* Mudado para pt-BR */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster /> {/* Adiciona o Toaster aqui para notificações */}
        {children} {/* O conteúdo da página será renderizado aqui */}
      </body>
    </html>
  );
}
