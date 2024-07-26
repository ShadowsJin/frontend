import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./LoginForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";

type Inputs = {
  username: string;
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
    navigate("/");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.LoginForm}>
      <h2>Авторизация</h2>

      <Input
        placeholder="Логин"
        {...register("username", {
          required: true,
        })}
      />
      {errors.username && <p className={style.errorMsg}>Введите логин</p>}

      <Input
        placeholder="Пароль"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <p className={style.errorMsg}>Введите пароль</p>}

      <p>Не помню пароль</p>

      <Button type="submit" variant="primary">
        Войти
      </Button>
    </form>
  );
};

export default LoginForm;
