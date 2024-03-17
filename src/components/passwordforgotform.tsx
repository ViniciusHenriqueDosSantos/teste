"use client";
import Button from "./button";
import Input from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const PasswordForgotSchema = z.object({
  email: z.string(),
});
type PasswordForgotSchemaType = z.infer<typeof PasswordForgotSchema>;
export default function PasswordForgotForm() {
  const { register, handleSubmit } = useForm();

  const handlePasswordForgot = (data: any) => {
    console.log(data);
  };

  const router = useRouter();
  const handlePrevious = () => {
    router.back();
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(handlePasswordForgot)}
        className="mt-7 "
        method="post"
      >
        <Input
          id="email"
          type="email"
          placeholder="Exemplo@exemplo.com"
          required
          register={register("email")}
        />

        <Button type="submit" className="  mt-20  ">
          Continuar
        </Button>
        <p
          className="text-center mt-5 hover:cursor-pointer"
          onClick={handlePrevious}
        >
          Voltar
        </p>
      </form>
    </div>
  );
}
