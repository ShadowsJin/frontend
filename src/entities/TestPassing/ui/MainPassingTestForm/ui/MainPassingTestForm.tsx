import classNames from "classnames";
import style from "./MaingPassingTestForm.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

const MainPassingTestForm = ({
  id,
  title,
  description,
  questions_count,
  owner_name,
}: TestCardType) => {
  const navigate = useNavigate();
  return (
    <div className={classNames("section", style.PassingTestForm)}>
      <div className={style.testPassingForm}>
        <h2>{title}</h2>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Описание:</label>
          <p>{description}</p>
        </div>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Количество вопросов:</label>
          <p>{questions_count}</p>
        </div>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Создатель</label>
          <p>{owner_name}</p>
        </div>

        <div className={style.buttons}>
          <Button onClick={() => navigate(-1)}>Вернуться</Button>
          <Button
            variant="accent"
            onClick={() => navigate(`/passingtest/${id}/0`)}
          >
            Начать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPassingTestForm;
