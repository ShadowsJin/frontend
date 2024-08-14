import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./LoginForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import useUserStore from "@/entities/User/model/slice/UserSlice";
import LoginHand from "@/shared/assets/LoginHand.svg";
import Dog from "@/shared/assets/Dog.svg";
import Lock from "@/shared/assets/Lock.svg";
import Apple from "@/shared/assets/Apple.svg";
import Google from "@/shared/assets/Google.svg";
import Telegram from "@/shared/assets/Telegram.svg";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { Login }: any = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    Login(data.email, data.password);
    navigate("/mytests");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.LoginForm}>
      <div className={style.title}>
        <h2>
          С возвращением! <LoginHand />
        </h2>
        <p>
          Открой для себя лучшее приложение для создания и прохождения
          проверочных работ
        </p>
      </div>

      <div className={style.InputBlock}>
        <label>Почта:</label>
        <Input
          icon={<Dog />}
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <p className={style.errorMsg}>Введите логин</p>}
      </div>
      <div className={style.InputBlock}>
        <label>Пароль:</label>
        <Input
          icon={<Lock />}
          type="password"
          {...register("password", { required: true })}
        />
        <Link to="/register">Забыли пароль?</Link>
        {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
      </div>
      <div className={style.Button}>
        <Button type="submit">Войти</Button>
      </div>
      <div className={style.or}>
        <hr />
        Или с помощью
        <hr />
      </div>

      <div className={style.Icons}>
        <Apple />
        <Google />
        <Telegram />
      </div>

      <Link to="/register">
        Ещё нет аккаунта?
        <span className={style.AccentColor}>Зарегистрирутесь!</span>
      </Link>
    </form>
  );
};

export default LoginForm;
