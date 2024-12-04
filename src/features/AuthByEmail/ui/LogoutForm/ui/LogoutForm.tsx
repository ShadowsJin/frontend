import { useNavigate } from "react-router-dom";
import style from "./LogoutForm.module.scss";
import Button from "@/shared/ui/Button";
import { logout } from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";

interface Props {
  closeModal: () => void;
}
const LogoutForm = ({ closeModal }: Props) => {
  const navigate = useNavigate();
  const logoutFormProfile = async () => {
    let res = await logout();
    if (res) navigate("/");
  };
  return (
    <div>
      <div className={style.LogoutForm}>
        <h3>Вы уверенны?</h3>
        <div className={style.Buttons}>
          <Button onClick={logoutFormProfile}>Выйти</Button>
          <Button onClick={closeModal} variant="accent">
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
