import Button from "@/components/button";
import Input from "@/components/input";
import LoginForm from "@/components/loginform";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signin",
};

export default function Signin() {
  return (
    <div className=" w-11/12 p-4 pt-3   mx-auto   max-w-xl  ">
      <h1 className="text-center text-neutral-900 font-bold text-2xl">
        Criar conta
      </h1>
      <p className="text-center text-sm text-neutral-500 mt-7">
        Faça login para continuar sua jornada de aprendizado.
      </p>
      <LoginForm />
    </div>
  );
}
