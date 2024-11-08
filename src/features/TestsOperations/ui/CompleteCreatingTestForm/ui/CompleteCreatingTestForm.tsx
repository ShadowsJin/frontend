import Button from "@/shared/ui/Button";
import style from "./CompleteCreatingTestForm.module.scss";
import ShokedSmileIcon from "@/shared/assets/shokedSmile.svg";
import { completeTest } from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate } from "react-router-dom";

interface CompleteTestProps {
  closeModal: () => void;
  complete: () => void;
}

const CompleteCreatingTestForm = ({
  closeModal,
  complete,
}: CompleteTestProps) => {
  return (
    <div className={style.CompleteCreatingTestForm}>
      <h3>Завершить создание теста?</h3>

      <div className={style.buttons}>
        <Button onClick={closeModal}>Вернуться</Button>
        <Button variant="accent" onClick={complete}>
          Завершить
        </Button>
      </div>
    </div>
  );
};

export default CompleteCreatingTestForm;
