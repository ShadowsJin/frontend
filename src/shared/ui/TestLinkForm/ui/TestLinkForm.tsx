import { Link } from "react-router-dom";
import style from "./TestLinkForm.module.scss";
import { APP_URL } from "@/shared/constants/appURL";
interface TestLinkFormProps {
  link: string;
}
const TestLinkForm = ({ link }: TestLinkFormProps) => {
  return (
    <div className={style.testLinkForm}>
      Ссылка на прохождение теста: <Link to={link}>{`${APP_URL}${link}`}</Link>
    </div>
  );
};

export default TestLinkForm;
