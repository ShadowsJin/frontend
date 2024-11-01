import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./EditTestForm.module.scss";
import { useNavigate } from "react-router-dom";
import useTest from "@/entities/Test/model/Test";
import { SubmitHandler, useForm } from "react-hook-form";
import TextArea from "@/shared/ui/TextArea";
import { useEffect, useState } from "react";
import { editTest } from "@/features/TestsOperations/model/TestsOperations";
type Inputs = {
  title: string;
  description: string;
};

interface EditTestFormProps {
  id?: string;
  title?: string;
  description?: string;
}

const EditTestForm = (props: EditTestFormProps) => {
  const [title, setTitle] = useState<string>(props?.title || "");
  const [description, setDescription] = useState<string>(
    props?.description || ""
  );

  const navigate = useNavigate();
  const { addDescription, addTitle } = useTest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    addTitle(data.title);
    addDescription(data.description);
    editTest(props?.id, props?.title, props?.description).then(
      (res) => res && navigate(`/mytests`)
    );
  };
  useEffect(() => {
    setDescription(props?.description || "");
    setTitle(props?.title || "");
  }, [props]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.EditTestForm}>
      <h3 className={style.title}>Редактирование теста</h3>

      <div className={style.Inputs}>
        <div className={style.Input}>
          <p>Название:</p>
          {errors.title && <p className={style.errorMsg}>Введите название</p>}
          <Input
            placeholder="Название"
            {...register("title")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={style.Input}>
          <p>Описание:</p>{" "}
          {errors.description && (
            <p className={style.errorMsg}>Введите описание</p>
          )}
          <TextArea
            placeholder="Описание"
            {...register("description")}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className={style.Buttons}>
        <Button type="button" onClick={() => navigate("/mytests")}>
          Отмена
        </Button>
        <Button variant="accent" type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default EditTestForm;
