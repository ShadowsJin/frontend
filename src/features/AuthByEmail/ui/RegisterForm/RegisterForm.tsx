import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./RegisterForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import useUserStore from "@/entities/User/model/slice/UserSlice";
import LikeHand from "@/shared/assets/LikeHand.svg";
import User from "@/shared/assets/user.svg";
import Dog from "@/shared/assets/Dog.svg";
import Lock from "@/shared/assets/Lock.svg";
import Apple from "@/shared/assets/Apple.svg";
import Google from "@/shared/assets/Google.svg";
import Telegram from "@/shared/assets/Telegram.svg";

type Inputs = {
  fullname: string;
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
    navigate("/mytests");
    Register(data.fullname, data.email, data.password);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.RegisterForm}>
      <div className={style.title}>
        <h2>
          Зарегистрируйся! <LikeHand />
        </h2>
        <p>
          Открой для себя лучшее приложение для создания и прохождения
          проверочных работ
        </p>
      </div>

      <div className={style.InputBlock}>
        <label>ФИО:</label>
        <Input
          icon={<User />}
          {...register("fullname", {
            required: true,
          })}
        />
        {errors.email && <p className={style.errorMsg}>Введите email</p>}
      </div>
      <div className={style.InputBlock}>
        <label>Почта:</label>
        <Input
          icon={<Dog />}
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && <p className={style.errorMsg}>Введите email</p>}
      </div>
      <div className={style.InputBlock}>
        <label>Пароль:</label>
        <Input
          icon={<Lock />}
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p className={style.errorMsg}>Введите пароль</p>}
      </div>
      <div className={style.Button}>
        <Button type="submit">Создать аккаунт</Button>
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

      <Link to={"/login"}>
        Уже есть аккаунт?
        <span className={style.AccentColor}>Авторизуйся!</span>
      </Link>
    </form>
  );
};

export default RegisterForm;
