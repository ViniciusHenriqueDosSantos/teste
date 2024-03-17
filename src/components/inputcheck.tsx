import React, { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: any;
}

const InputCheck: React.FC<InputProps> = ({
  label,
  register,
  name,
  ...rest
}) => {
  return (
    <div className="mb-4">
      <div className="flex align-middle justify-center ">
        <input
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  "
          type="checkbox"
          {...register}
          {...rest}
        />

        <label
          htmlFor="agrees"
          className=" ml-2 font-medium text-sm text-neutral-500"
        >
          {label}
        </label>
      </div>
    </div>
  );
};
export default InputCheck;
