import cn from "classnames";
import { ReactNode, ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "text";
}

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: variant === "primary",
        [style.text]: variant === "text",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
