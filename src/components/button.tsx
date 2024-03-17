import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {

  return (
    <button
      {...rest}
      className={twMerge(
        "  h-12  bg-brand-400 hover:bg-brand-primary  text-white rounded-full font-medium  text-base w-full py-2 px-4",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;
