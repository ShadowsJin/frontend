import style from "./TestLinkForm.module.scss";
import { APP_URL } from "@/shared/constants/appURL";
interface TestLinkFormProps {
  link: string;
  closeModal: () => void;
}
const TestLinkForm = ({ link, closeModal }: TestLinkFormProps) => {
  return (
    <div className={style.testLinkForm}>
      Ссылка на прохождение теста:{" "}
      <h4 onClick={closeModal}>{`${APP_URL}${link}`}</h4>
    </div>
  );
};

export default TestLinkForm;
