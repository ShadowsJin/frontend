import Button from "@/shared/ui/Button";
import style from "./TestInfoForm.module.scss";
interface TestInfoFormProps {
  title: string;
}

const TestInfoForm = ({ title }: TestInfoFormProps) => {
  return (
    <div className={style.TestInfoForm}>
      <h3>{title}</h3>

      <div className={style.Buttons}>
        <Button>Редактировать</Button>
        <Button>Удалить</Button>
      </div>
    </div>
  );
};

export default TestInfoForm;
