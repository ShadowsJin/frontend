import cn from "classnames";
import { InputHTMLAttributes, ReactNode, Ref, forwardRef } from "react";

import style from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}
const Input = forwardRef(function Input(
  { icon, className, ...props }: InputProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <div className={cn(style.CustomInput, className)}>
      {icon && <div className={style.icon}>{icon}</div>}
      <input {...props} ref={ref} />
    </div>
  );
});

export default Input;
