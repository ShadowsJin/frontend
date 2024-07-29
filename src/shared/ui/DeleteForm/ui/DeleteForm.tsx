import { useNavigate } from "react-router-dom";
import style from "./DeleteForm.module.scss";
import Button from "@/shared/ui/Button";

const DeleteForm = () => {
  const navigate = useNavigate();
  const deleteProfile = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={style.DeleteForm}>
        <h3>Вы уверенны?</h3>
        <div className={style.Buttons}>
          <Button onClick={deleteProfile}>Удалить</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteForm;
