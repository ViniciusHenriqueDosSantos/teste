"use client";
import Button from "./button";
import Input from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
const loginSchema = z.object({
  cpf: z.string(),
  password: z.string(),
});
type LoginSchemaType = z.infer<typeof loginSchema>;
export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="mt-7 "
        method="post"
      >
        <Input
          label="CPF"
          id="cpf"
          placeholder="000.000.000-00"
          min="11"
          max="11"
          required
          register={register("cpf")}
        />
        <Input
          label="Senha"
          id="password"
          placeholder="Insira sua senha"
          type="password"
          required
          register={register("password")}
        />
        <Link
          className="  text-neutral-600  text-sm font-medium   text-right float-right"
          href="/password-forgot"
        >
          Esqueceu sua senha?
        </Link>
        <Button type="submit" className=" mt-16 ">
          Entrar
        </Button>
      </form>
      <p className="text-center mt-5">
        <Link className="text-neutral-600  text-sm font-medium" href="/signup">
          Não tem conta? Increva-se
        </Link>
      </p>
    </>
  );
}
