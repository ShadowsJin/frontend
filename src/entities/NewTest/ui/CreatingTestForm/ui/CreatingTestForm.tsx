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
  const { addDescription } = useNewTest();

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

      <div className={style.Inputs}>
        <p>Название:</p>
        {errors.title && <p className={style.errorMsg}>Введите название</p>}
        <Input
          {...register("title", {
            required: true,
          })}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={style.Inputs}>
        <p>Описание:</p>{" "}
        {errors.description && (
          <p className={style.errorMsg}>Введите описание</p>
        )}
        <Input
          {...register("description", {
            required: true,
          })}
          onChange={(e) => addDescription(e.target.value)}
        />
      </div>

      <div className={style.Buttons}>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            closeModal && closeModal();
          }}
        >
          Отмена
        </Button>
        <Button type="submit">Создать</Button>
      </div>
    </form>
  );
};

export default CreatingTestForm;
