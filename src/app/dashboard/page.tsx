// src/app/dashboard/page.tsx
// Página inicial BÁSICA do Dashboard após o login.
// TODO: Carregar conteúdo específico baseado no tipo de usuário
// (Ex: Gráficos para Produtor, Catálogo para Mercado).

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Painel</h1>
      <p className="text-gray-600">
        Esta é a área principal do seu dashboard. O conteúdo específico para seu
        tipo de conta (Produtor, Mercado, etc.) será exibido aqui futuramente.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        (Atualmente, o login é simulado. A conexão com a API ainda precisa ser
        feita no arquivo `src/components/auth/login-form.tsx`)
      </p>
    </div>
  );
}
