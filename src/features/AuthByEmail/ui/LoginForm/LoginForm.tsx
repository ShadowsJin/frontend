import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./LoginForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import useUserStore from "@/entities/User/model/slice/UserSlice";

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
      <h2>Вход</h2>

      <div className={style.InputBlock}>
        <label>Почта:</label>
        <Input
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <p className={style.errorMsg}>Введите логин</p>}
      </div>
      <div className={style.InputBlock}>
        <label>Пароль:</label>
        <Input type="password" {...register("password", { required: true })} />
        {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
      </div>
      <Button type="submit">Войти</Button>
      <Link to="/register">Забыли пароль?</Link>
    </form>
  );
};

export default LoginForm;
