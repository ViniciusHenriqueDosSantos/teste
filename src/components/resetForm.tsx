"use client";
import Button from "./button";
import Input from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
const resetSchema = z.object({
  passwordconfirm: z.string(),
  password: z.string(),
});
type ResetSchemaType = z.infer<typeof resetSchema>;
export default function ResetForm() {
  const { register, handleSubmit } = useForm();

  const handleReset = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleReset)}
        className="mt-7 "
        method="post"
      >
        <Input
          label="Nova senha"
          id="password"
          placeholder="..............."
          type="password"
          required
          register={register("password")}
        />
        <Input
          label="Confirmar senha"
          id="passwordconfirm"
          placeholder="..............."
          type="password"
          required
          register={register("passwordconfirm")}
        />

        <Button type="submit" className=" mt-16 ">
          Confirmar nova senha
        </Button>
      </form>
    </>
  );
}
