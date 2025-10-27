'use client';

import Image, { ImageLoader } from "next/image";
import { InputText } from "../components/InputText";
import Button from 'react-bootstrap/Button';
import { redirect } from "next/navigation";
import styles from '@/styles/Login.module.css';


export default function Login() {
  let name: string;
  // atribuição
  name = "João";
  
  // declaração de variável numérica
  const idade: number = 15;

  // if-else: utilizado quando a lógica é muito complexa
  // let message: string;
  // if(idade < 18)
  //   message = "é menor de idade";
  // else
  //   message = "é maior de idade";

  // { name } => permite acessar a variável "name" dentro de um componente
  
  // React Fragment <></>
  return (
    <>
      {/* Exemplo de uso condicional */}
      {/* 
      <h1>{name}</h1>
      <h2>
        {idade < 18 ? (
          <span style={{ color: "red", fontWeight: "bold" }}>É menor de idade</span>
        ) : (
          <span style={{ color: "purple" }}>Maior de idade</span>
        )}
      </h2>
      */}

      <div className={styles.background}>
        
        <div>
          <InputText
            label="usuário:"
            inputName="username"
            placeholder="Nome do usuário"
            id="user"
          />
          <br />
          <InputText
            label="Senha:"
            inputName="senha"
            placeholder="Senha"
            id="senha"
          />

          <br />
          <br />

          <Button variant="primary" onClick={() => redirect("/home")}>
            Entrar
          </Button>
        </div>
      </div>
    </>
  );
}
