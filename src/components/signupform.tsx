"use client";
import Button from "./button";
import Input from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import InputCheck from "./inputcheck";
const signupSchema = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  agrees: z.boolean(),
  password: z.string(),
});
type SignupSchema = z.infer<typeof signupSchema>;
export default function SignupForm() {
  const { register, handleSubmit } = useForm();

  const handleSignup = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="mt-7 "
        method="post"
      >
        <Input
          label="Nome completo"
          id="name"
          placeholder="Insira seu nome completo"
          required
          register={register("name")}
        />
        <Input
          label="E-mail"
          id="email"
          type="email"
          placeholder="Insira seu e-mail"
          required
          register={register("email")}
        />
        <Input
          label="Senha"
          id="password"
          placeholder="Insira sua senha"
          type="password"
          required
          register={register("password")}
        />
        <InputCheck
          id="agrees"
          register={register("agrees")}
          label="Concordo com os Termos de Serviço e a Política de Privacidade da empresa"
        ></InputCheck>

        <Button type="submit" className=" mt-16 ">
          Cadastre-se
        </Button>
      </form>
      <p className="text-center mt-5">
        <Link className="text-neutral-600  text-sm font-medium" href="/">
          Tem uma conta? Conecte-se
        </Link>
      </p>
    </>
  );
}
