import { useNavigate } from "react-router-dom";
import style from "./LogoutForm.module.scss";
import Button from "@/shared/ui/Button";
import { useAuthByEmailStore } from "@/features/AuthByEmail";

const LogoutForm = () => {
  const navigate = useNavigate();
  const { Logout }: any = useAuthByEmailStore();
  const deleteProfile = () => {
    Logout();
    navigate("/");
  };
  return (
    <div>
      <div className={style.LogoutForm}>
        <h3>Вы уверенны?</h3>
        <div className={style.Buttons}>
          <Button onClick={deleteProfile}>Выйти</Button>
          <Button>Отмена</Button>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
