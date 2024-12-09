import Button from "@/shared/ui/Button";
import style from "./CompleteTestForm.module.scss";
import ShokedSmileIcon from "@/shared/assets/shokedSmile.svg";
import { completeTest } from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate } from "react-router-dom";

interface CompleteTestProps {
  closeModal: () => void;
  id?: string;
}

const CompleteTestForm = ({ closeModal, id }: CompleteTestProps) => {
  const navigate = useNavigate();
  const endTest = () => {
    completeTest(id).then((res) => res && navigate("/mytests"));
  };
  return (
    <div className={style.completeTestForm}>
      <h3>
        Вы уверены? <ShokedSmileIcon />
      </h3>
      <p>
        Проверьте, не забыли ли вы ответить на какие-либо вопросы, перед тем как
        завершать тест
      </p>
      <div className={style.buttons}>
        <Button onClick={closeModal}>Вернуться</Button>
        <Button variant="accent" type="submit" onClick={endTest}>
          Завершить
        </Button>
      </div>
    </div>
  );
};

export default CompleteTestForm;
