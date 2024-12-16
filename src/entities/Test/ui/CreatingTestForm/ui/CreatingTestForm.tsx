import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./CreatingTestForm.module.scss";
import { useNavigate } from "react-router-dom";
import useTest from "@/entities/Test/model/TestSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import StarIcon from "@/shared/assets/star.svg";
import TextArea from "@/shared/ui/TextArea";
type Inputs = {
  title: string;
  description: string;
};

interface CreatingTestFormProps {
  closeModal?: () => void;
}

const CreatingTestForm = ({ closeModal }: CreatingTestFormProps) => {
  const navigate = useNavigate();
  const { addDescription } = useTest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    closeModal && (await closeModal());
    await addDescription(data.description);
    navigate(`/createtest/${data.title}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.CreatingTestForm}>
      <h3 className={style.title}>
        Новый тест
        <StarIcon />
      </h3>

      <div className={style.Inputs}>
        <div className={style.Input}>
          <p>Название:</p>
          {errors.title && <p className={style.errorMsg}>Введите название</p>}
          <Input
            placeholder="Название"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
          />
        </div>

        <div className={style.Input}>
          <p>Описание:</p>{" "}
          {errors.description && (
            <p className={style.errorMsg}>Введите описание</p>
          )}
          <TextArea
            placeholder="Описание"
            {...register("description", { maxLength: 500 })}
          />
        </div>
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
        <Button variant="accent" type="submit">
          Создать
        </Button>
      </div>
    </form>
  );
};

export default CreatingTestForm;
