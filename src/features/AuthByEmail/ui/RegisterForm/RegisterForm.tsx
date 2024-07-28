import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./RegisterForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import useUserStore from "@/entities/User/model/slice/UserSlice";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { Register }: any = useUserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const fullname = data.firstName + data.lastName;
    Register(fullname, data.email, data.password);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.RegisterForm}>
      <h2>Регистация</h2>

      <div className={style.InputBlocks}>
        <div className={style.InputBlock}>
          <label>Имя:</label>
          <Input
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName && <p className={style.errorMsg}>Введите имя</p>}
        </div>
        <div className={style.InputBlock}>
          <label>Фамилия:</label>
          <Input
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName && <p className={style.errorMsg}>Введите фамилию</p>}
        </div>
      </div>

      <div className={style.InputBlock}>
        <label>Почта:</label>
        <Input
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <p className={style.errorMsg}>Введите email</p>}
      </div>
      <div className={style.InputBlock}>
        <label>Пароль:</label>
        <Input type="password" {...register("password", { required: true })} />
        {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
      </div>
      <Button type="submit">Зарегистрироваться</Button>
      <Link to={"/login"}>Уже есть аккаунт? Войдите в него!</Link>
    </form>
  );
};

export default RegisterForm;
