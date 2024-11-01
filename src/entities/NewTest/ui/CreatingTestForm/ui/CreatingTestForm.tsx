import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./CreatingTestForm.module.scss";
import { useNavigate } from "react-router-dom";
import useNewTest from "@/entities/NewTest/model/NewTest";
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
  const { addDescription } = useNewTest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    navigate(`/createtest/${data.title}`);
    addDescription(data.description);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.CreatingTestForm}>
      <h3 className={style.title}>
        Новый тест <StarIcon />
      </h3>

      <div className={style.Inputs}>
        <div className={style.Input}>
          <p>Название:</p>
          {errors.title && <p className={style.errorMsg}>Введите название</p>}
          <Input
            placeholder="Название"
            {...register("title", {
              required: true,
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
            {...register("description", {
              required: true,
            })}
          />
        </div>
      </div>

      <div className={style.Buttons}>
        <Button
          type="button"
          variant="accent"
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
