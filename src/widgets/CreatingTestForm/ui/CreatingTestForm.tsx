import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./CreatingTestForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNewTest from "@/entities/NewTest/model/NewTest";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

interface CreatingTestFormProps {
  closeModal?: () => void;
}

const CreatingTestForm = ({ closeModal }: CreatingTestFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { setDescription } = useNewTest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    navigate(`/createtest/${title}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.CreatingTestForm}>
      <h3>Создание теста</h3>

      <div className={style.InputBlock}>
        <div className={style.Inputs}>
          <p>Название:</p>{" "}
          <Input
            {...register("title", {
              required: true,
            })}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {errors.title && <p className={style.errorMsg}>Введите название</p>}
      </div>
      <div className={style.InputBlock}>
        <div className={style.Inputs}>
          <p>Описание:</p>{" "}
          <Input
            {...register("description", {
              required: true,
            })}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {errors.description && (
          <p className={style.errorMsg}>Введите описание</p>
        )}
      </div>
      <div className={style.Buttons}>
        <Button type="button" onClick={closeModal}>
          Отмена
        </Button>
        <Button type="submit">Создать</Button>
      </div>
    </form>
  );
};

export default CreatingTestForm;
