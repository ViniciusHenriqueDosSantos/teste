import PasswordForgotForm from "@/components/passwordforgotform";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Password Forgot",
};
export default function PasswordForgot() {
  return (
    <div className=" w-11/12 p-4 pt-3   mx-auto   max-w-xl  ">
      <div className="flex justify-center mb-5">
        <Image
          alt="imagem"
          src="/images/password.png"
          className="text-center"
          width={121}
          height={120}
          quality={100}
        />
      </div>

      <h1 className="text-left mt-5 text-neutral-900 font-bold text-2xl">
        Redefinir sua senha
      </h1>
      <p className="text-left text-sm text-neutral-500 mt-7">
        Digite seu e-mail, enviaremos um link para você alterar a sua senha.
      </p>
      <PasswordForgotForm />
    </div>
  );
}
