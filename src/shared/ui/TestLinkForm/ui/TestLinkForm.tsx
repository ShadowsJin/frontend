import notification from "@/shared/config/ApiConfig/Notification";
import style from "./TestLinkForm.module.scss";
import { APP_URL } from "@/shared/constants/appURL";
import Button from "../../Button";
interface TestLinkFormProps {
  link: string;
  closeModal: () => void;
}

const TestLinkForm = ({ link, closeModal }: TestLinkFormProps) => {
  const copyTextToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${APP_URL}${link}`);
      notification("Текст успешно скопирован в буфер обмена!", "success");
    } catch (err) {
      notification("Ошибка, не получилось скопировать ссылку", "error");
    }
  };
  return (
    <div className={style.testLinkForm}>
      Ссылка на прохождение теста:{" "}
      <h4
        className={style.testLink}
        onClick={copyTextToClipboard}
      >{`${APP_URL}${link}`}</h4>
      <Button onClick={closeModal}>Отмена</Button>
    </div>
  );
};

export default TestLinkForm;
