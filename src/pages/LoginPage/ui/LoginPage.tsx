import { LoginForm } from "@/features/AuthByEmail/ui";
import style from "./LoginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={style.LoginPage}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
