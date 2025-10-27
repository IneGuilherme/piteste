// ///////////////////////////////////////////////////////////////////////
// // Formulário de Login - Adaptado do Projeto B                      //
// ///////////////////////////////////////////////////////////////////////
// Utiliza react-hook-form e zod para validação.
// A função onSubmit simula o login e redireciona.
// TODO: Substituir a simulação pela chamada à API real de login do Projeto A.
// ///////////////////////////////////////////////////////////////////////
"use client";
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
import { toast } from "sonner"; // Para notificações
import { LogIn } from "lucide-react"; // Ícone
import { useRouter } from "next/navigation"; // Para redirecionar

// Define a estrutura e as regras de validação para o formulário de login
const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "E-mail é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres" }),
});

// Define o tipo dos dados do formulário com base no schema
type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter(); // Hook para navegação

  // Inicializa o formulário com react-hook-form e zod para validação
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Função executada quando o formulário é enviado
  async function onSubmit(data: LoginFormValues) {
    // Exibe "Entrando..." no botão enquanto a função executa
    // form.control.register('root.serverError', { shouldUnregister: true }); // Preparar para mostrar erro geral (opcional)
    // form.clearErrors('root.serverError'); // Limpar erros anteriores (opcional)

    try {
      // ================================================================
      // CONECTAR COM A API REAL DO PROJETO A - SUBSTITUIR ESTE BLOCO
      // ================================================================
      // !! IMPORTANTE !!
      // Você precisa colocar aqui a lógica para chamar a sua API de login.
      // O código abaixo é apenas um EXEMPLO e precisa ser adaptado.
      console.log("Tentando logar com:", data.email, "e senha (oculta)");

      /* Exemplo de chamada fetch (descomente e adapte):
      const response = await fetch('/api/login', { // <-- Coloque o endpoint da sua API aqui
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password }), // Envia email e senha
      });

      if (!response.ok) {
        // Se a API retornar um erro (ex: 401 Unauthorized, 400 Bad Request)
        let errorMessage = 'Credenciais inválidas ou erro no servidor.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage; // Tenta pegar a mensagem de erro da API
        } catch (jsonError) {
          console.error("Não foi possível parsear o erro da API:", jsonError);
        }
        throw new Error(errorMessage); // Lança o erro para o bloco catch
      }

      // Se a API retornar sucesso (ex: 200 OK com dados do usuário ou token)
      const result = await response.json();
      console.log('Login API bem-sucedido:', result); // Opcional: ver dados no console
      // Aqui você pode salvar o token, dados do usuário, etc. (localStorage, context, etc.)
      */
      // *** FIM DO BLOCO PARA SUBSTITUIR ***

      // Simulação temporária de sucesso (REMOVER QUANDO A API ESTIVER CONECTADA)
      await new Promise((resolve) => setTimeout(resolve, 500)); // Pequena espera simulada

      // Sucesso - mostrar notificação toast
      toast.success("Login realizado com sucesso!", {
        description: "Redirecionando para o painel...",
      });

      // Redireciona para a página de dashboard principal
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000); // Espera 1 segundo antes de redirecionar
    } catch (error: any) {
      // Captura erros (da API real ou da simulação)
      console.error("Erro no login:", error); // Opcional: ver erro no console
      // Mostra notificação de erro
      toast.error("Erro no login", {
        description:
          error?.message || "Verifique suas credenciais e tente novamente.",
      });
      // Opcional: Mostrar erro específico no formulário (se a API detalhar o campo do erro)
      // form.setError('root.serverError', { type: 'manual', message: errorMessage });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <FormMessage /> {/* Mostra erros de validação para este campo */}
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
              <FormMessage /> {/* Mostra erros de validação para este campo */}
            </FormItem>
          )}
        />

        {/* Botão de Envio */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            "Entrando..." // Texto enquanto envia
          ) : (
            <>
              <LogIn className="mr-2 h-5 w-5" /> {/* Ícone */}
              Entrar
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
