import { RegisterForm } from "@/features/AuthByEmail/ui";
import style from "./Register.module.scss";

const RegisterPage = () => {
  return (
    <div className={style.RegisterPage}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
