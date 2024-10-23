import cn from "classnames";
import { ReactNode, ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "text";
}

const Button = ({
  children,
  variant,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.normal]: !variant,
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
