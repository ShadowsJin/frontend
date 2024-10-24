import { Link, useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import style from "./RegisterForm.module.scss";

import Button from "@/shared/ui/Button/index";
import Input from "@/shared/ui/Input/index";
import LikeHandIcon from "@/shared/assets/LikeHand.svg";
import UserIcon from "@/shared/assets/user.svg";
import DogIcon from "@/shared/assets/Dog.svg";
import LockIcon from "@/shared/assets/Lock.svg";
import AppleIcon from "@/shared/assets/Apple.svg";
import GoogleIcon from "@/shared/assets/Google.svg";
import TelegramIcon from "@/shared/assets/Telegram.svg";
import { registerFetch } from "../../model/services/AuthByEmail/AuthByEmail";

type Inputs = {
  fullname: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let res = await registerFetch(data.fullname, data.email, data.password);
    if (res) navigate("/mytests");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.RegisterForm}>
      <div className={style.title}>
        <h3>
          Зарегистрируйся! <LikeHandIcon />
        </h3>
        <p>
          Открой для себя лучшее приложение для создания и прохождения
          проверочных работ
        </p>
      </div>

      <div className={style.InputBlock}>
        <div className={style.InputBlockHeader}>
          <label>ФИО:</label>
          {errors.fullname && <p className={style.errorMsg}>Введите ФИО</p>}
        </div>
        <Input
          icon={<UserIcon />}
          {...register("fullname", {
            required: true,
          })}
        />
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
        <AppleIcon />
        <GoogleIcon />
        <TelegramIcon />
      </div>

      <Link to={"/login"}>
        Уже есть аккаунт?{" "}
        <span className={style.AccentColor}> Авторизуйся!</span>
      </Link>
    </form>
  );
};

export default RegisterForm;
