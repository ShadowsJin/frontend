import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./CreatingTestForm.module.scss";

const CreatingTestForm = () => {
  return (
    <form className={style.CreatingTestForm}>
      <h3>Создание теста</h3>
      <div className={style.Inputs}>
        <p>Название:</p> <Input />
      </div>
      <div className={style.Inputs}>
        <p>Тип:</p> <Input />
      </div>
      <div className={style.Buttons}>
        <Button>Создать</Button>
        <Button>Отмена</Button>
      </div>
    </form>
  );
};

export default CreatingTestForm;
