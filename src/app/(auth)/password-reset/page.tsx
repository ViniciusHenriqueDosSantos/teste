import PasswordForgotForm from "@/components/passwordforgotform";
import ResetForm from "@/components/resetForm";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Password Reset",
};
export default function PasswordReset() {
  return (
    <div className=" w-11/12 p-4 pt-3   mx-auto   max-w-xl  ">
      <h1 className="text-center  text-neutral-900 font-bold text-2xl">
        Criar uma nova senha
      </h1>
      <p className="text-center text-sm text-neutral-500 mt-7">
        Crie uma nova senha segura e fácil de lembrar
      </p>
      <ResetForm />
    </div>
  );
}
