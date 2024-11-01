import cn from "classnames";
import { ReactNode, Ref, forwardRef, InputHTMLAttributes } from "react";

import style from "./TextArea.module.scss";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  icon?: ReactNode;
}
const TextArea = forwardRef(function TextArea(
  { icon, className, type, ...props }: TextAreaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div className={cn(style.CustomTextArea)}>
      {icon && <div className={style.icon}>{icon}</div>}
      <textarea {...props} ref={ref} />
    </div>
  );
});

export default TextArea;
