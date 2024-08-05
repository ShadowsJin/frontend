import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import style from "./CreatingTestForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatingTestForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  return (
    <form className={style.CreatingTestForm}>
      <h3>Создание теста</h3>
      <div className={style.Inputs}>
        <p>Название:</p> <Input onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={style.Inputs}>
        <p>Тип:</p> <Input />
      </div>
      <div className={style.Buttons}>
        <Button onClick={() => navigate(`/createtest/${title}`)}>
          Создать
        </Button>
        <Button>Отмена</Button>
      </div>
    </form>
  );
};

export default CreatingTestForm;
