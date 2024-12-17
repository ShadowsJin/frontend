import style from "./TestPassingInfoForm.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import Button from "@/shared/ui/Button";
import SmallLoader from "@/shared/ui/SmallLoader/ui/SmallLoader";

interface Props extends TestCardType {
  closeModal: () => void;
}

const TestPassingInfoForm = ({
  id,
  title,
  description,
  questions_count,
  owner_name,
  closeModal,
}: Props) => {
  if (!id) {
    return (
      <div className={style.testPassingForm}>
        <SmallLoader />
      </div>
    );
  }
  return (
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
        <Button onClick={closeModal}>Вернуться</Button>
      </div>
    </div>
  );
};

export default TestPassingInfoForm;
