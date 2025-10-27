// src/app/dashboard/layout.tsx
// Layout MUITO SIMPLES para a área do dashboard.
// TODO: Adicionar uma Sidebar real, adaptada do Projeto B,
// que mostre links diferentes com base no tipo de usuário logado.
import React from "react";
import Link from "next/link"; // Para o link de Sair

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Barra Lateral Placeholder (Apenas um fundo e link Sair) */}
      <aside className="w-48 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold mb-4">Painel</h2>
          {/* TODO: Adicionar links de navegação aqui (ex: Meus Produtos, Meus Pedidos) */}
          <p className="text-sm text-gray-500">(Links virão aqui)</p>
        </div>
        <Link href="/" className="text-sm text-red-600 hover:underline">
          Sair (Placeholder)
        </Link>
      </aside>

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 p-6 bg-gray-50">
        {children} {/* Conteúdo da página específica do dashboard */}
      </main>
    </div>
  );
}
