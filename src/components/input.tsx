import React, { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
}

const Input: React.FC<InputProps> = ({ label, register, name, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          className=" text-neutral-800   text-sm   font-bold"
          htmlFor={rest.id}
        >
          {label}
        </label>
      )}
      <input
        className="border px-2 py-3  mt-1 outline-none  w-full   rounded-lg"
        {...register}
        {...rest}
      />
    </div>
  );
};
export default Input;
