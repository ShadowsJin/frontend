import { Link, useNavigate } from "react-router-dom";
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
      <Link to={link} onClick={closeModal}>{`${APP_URL}${link}`}</Link>
    </div>
  );
};

export default TestLinkForm;
