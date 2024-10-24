import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./LoginForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import LoginHandIcon from "@/shared/assets/LoginHand.svg";
import DogIcon from "@/shared/assets/Dog.svg";
import LockIcon from "@/shared/assets/Lock.svg";
import AppleIcon from "@/shared/assets/Apple.svg";
import GoogleIcon from "@/shared/assets/Google.svg";
import TelegramIcon from "@/shared/assets/Telegram.svg";
import { loginFetch } from "../../model/services/AuthByEmail/AuthByEmail";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let res = await loginFetch(data.email, data.password);
    if (res) navigate("/mytests");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.LoginForm}>
      <div className={style.title}>
        <h3>
          С возвращением! <LoginHandIcon />
        </h3>
        <p>
          Открой для себя лучшее приложение для создания и прохождения
          проверочных работ
        </p>
      </div>

      <div className={style.InputBlock}>
        <div className={style.InputBlockHeader}>
          <label>Почта:</label>
          {errors.email && <p className={style.errorMsg}>Введите почту</p>}
        </div>
        <Input
          icon={<DogIcon />}
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className={style.InputBlock}>
        <div className={style.InputBlockHeader}>
          <label>Пароль:</label>
          {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
        </div>

        <Input
          icon={<LockIcon />}
          type="password"
          {...register("password", { required: true })}
        />
        <Link to="/register">Забыли пароль?</Link>
      </div>

      <Button type="submit">Войти</Button>

      <div className={style.or}>
        <hr />
        Или с помощью
        <hr />
      </div>

      <div className={style.Icons}>
        <AppleIcon />
        <GoogleIcon />
        <TelegramIcon />
      </div>

      <Link to="/register">
        Ещё нет аккаунта?{" "}
        <span className={style.AccentColor}>Зарегистрирутесь!</span>
      </Link>
    </form>
  );
};

export default LoginForm;
