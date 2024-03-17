import SignupForm from "@/components/signupform";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup",
};

export default function Signup() {
  return (
    <div className=" w-11/12 p-4 pt-3   mx-auto   max-w-xl  ">
      <h1 className="text-center text-neutral-900 font-bold text-2xl">
        Inscreva-se
      </h1>
      <p className="text-center text-sm text-neutral-500 mt-7">
        Crie uma conta e aproveitar o melhor da nossa plataforma.
      </p>
      <SignupForm />
    </div>
  );
}
