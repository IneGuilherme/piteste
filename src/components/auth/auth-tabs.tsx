// src/components/auth/auth-tabs.tsx
// Componente que cria as abas "Entrar" e "Cadastrar".
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./login-form"; // Importa o formulário de login
import { RegisterForm } from "./register-form"; // Importa o formulário de cadastro

export function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-full max-w-md">
      {/* Os botões que funcionam como abas */}
      <TabsList className="grid w-full grid-cols-2 h-12">
        <TabsTrigger value="login" className="text-base font-semibold">
          Entrar
        </TabsTrigger>
        <TabsTrigger value="register" className="text-base font-semibold">
          Cadastrar
        </TabsTrigger>
      </TabsList>

      {/* Conteúdo que aparece quando a aba "Entrar" está ativa */}
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Bem-vindo!</CardTitle>
            <CardDescription>
              Use seu e-mail e senha para entrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm /> {/* Renderiza o formulário de login */}
          </CardContent>
        </Card>
      </TabsContent>

      {/* Conteúdo que aparece quando a aba "Cadastrar" está ativa */}
      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Criar Conta</CardTitle>
            <CardDescription>
              Preencha os dados para se cadastrar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm /> {/* Renderiza o formulário de cadastro */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
