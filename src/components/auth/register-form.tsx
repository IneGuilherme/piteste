// ///////////////////////////////////////////////////////////////////////
// // Formulário de Cadastro Simplificado - Adaptado do Projeto B       //
// ///////////////////////////////////////////////////////////////////////
// Versão simplificada apenas com campos essenciais (Tipo de conta,
// email, senha) para a apresentação parcial.
// TODO: Reintegrar campos de endereço e específicos (Produtor/Mercado)
// e conectar à API de cadastro do Projeto A.
// ///////////////////////////////////////////////////////////////////////
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

// Schema de validação simplificado
const registerSchema = z
  .object({
    accountType: z.enum(["produtor", "mercado"], {
      required_error: "Selecione o tipo de conta",
    }),
    email: z
      .string()
      .email({ message: "E-mail inválido" })
      .min(1, { message: "E-mail é obrigatório" }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
    // TODO: Adicionar validações mais fortes (maiúscula, número) se necessário
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // O erro aparecerá no campo confirmPassword
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();
  // Estado para guardar o tipo de conta selecionado (não estritamente necessário agora, mas útil depois)
  const [accountType, setAccountType] = useState<"produtor" | "mercado" | null>(
    null
  );

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      accountType: undefined, // Começa sem tipo selecionado
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Função executada ao enviar o formulário de cadastro
  async function onSubmit(data: RegisterFormValues) {
    try {
      // ================================================================
      // CONECTAR COM A API REAL DE CADASTRO DO PROJETO A - SUBSTITUIR ESTE BLOCO
      // ================================================================
      console.log("Tentando cadastrar:", data); // Mostra os dados no console
      // !! IMPORTANTE !!
      // Adapte a chamada fetch abaixo para sua API de cadastro.
      // Você precisará enviar os dados corretos (data.accountType, data.email, data.password, etc.)
      // e tratar a resposta da API (sucesso ou erro).
      /* Exemplo:
      const response = await fetch('/api/register', { // <-- Endpoint da API do Projeto A
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), // Envia todos os dados (ou os necessários)
      });
      if (!response.ok) {
        // Tratar erro da API
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao cadastrar');
      }
      const newUser = await response.json();
      console.log("Cadastro bem-sucedido:", newUser);
      */
      // *** FIM DO BLOCO PARA SUBSTITUIR ***

      // Simulação temporária de sucesso
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Conta criada com sucesso!", {
        description: "Redirecionando para o painel...",
      });

      // Redireciona para o dashboard principal após cadastro
      setTimeout(() => {
        router.push("/dashboard"); // Ajuste se o caminho for diferente
      }, 1500);
    } catch (error: any) {
      console.error("Erro no cadastro:", error);
      toast.error("Erro ao criar conta", {
        description: error?.message || "Ocorreu um erro. Tente novamente.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Seleção do Tipo de Conta */}
        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Tipo de Conta</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setAccountType(value as "produtor" | "mercado");
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Selecione o tipo de conta" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="produtor" className="text-base">
                    Produtor Rural
                  </SelectItem>
                  <SelectItem value="mercado" className="text-base">
                    Mercado Local
                  </SelectItem>
                  {/* TODO: Adicionar tipos "Administrador" e "Entregador" se necessário */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de E-mail */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="seu@email.com"
                  type="email"
                  className="h-12 text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de Senha */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••"
                  type="password"
                  className="h-12 text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de Confirmar Senha */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Confirmar Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="••••••••"
                  type="password"
                  className="h-12 text-base"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* TODO: Aqui entrariam os campos específicos (ProducerForm/MarketForm)
            que foram removidos para simplificar. Adicionar condicionalmente
            quando o cadastro completo for implementado. */}

        {/* Botão de Envio */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold"
          disabled={form.formState.isSubmitting || !accountType} // Desabilitado se nenhum tipo foi selecionado
        >
          {form.formState.isSubmitting ? (
            "Criando conta..."
          ) : (
            <>
              <UserPlus className="mr-2 h-5 w-5" />
              Criar Conta
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
