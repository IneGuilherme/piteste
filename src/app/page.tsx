import { AuthTabs } from "@/components/auth/auth-tabs"; // Componente das abas Login/Cadastro
import { Sprout } from "lucide-react"; // Ícone (precisa ter lucide-react instalado)
import Link from "next/link";

/**
 * Página de autenticação principal (/), mostrando as opções de Login e Cadastro.
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-primary/5 to-transparent p-4">
      {/* Logo e título simples */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          {/* Ícone simples no lugar do logo complexo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Sprout className="h-7 w-7 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-primary">
            Projeto Integrador
          </span>
        </Link>
        <p className="text-muted-foreground">Acesse sua conta ou cadastre-se</p>
      </div>

      {/* Componente que renderiza as abas de Login e Cadastro */}
      <AuthTabs />

      {/* Link para voltar (opcional, já que estamos na raiz) */}
      {/*
      <Link href="/" className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors">
        ← Voltar para a página inicial
      </Link>
       */}
    </div>
  );
}
