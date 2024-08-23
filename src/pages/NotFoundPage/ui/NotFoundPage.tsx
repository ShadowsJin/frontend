import NotFoundImg from "@/shared/assets/NotFoundImg.jpg";
import Button from "@/shared/ui/Button";
import style from "./NotFoundPage.module.scss";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.NotFoundPage}>
      <img src={NotFoundImg} alt="404" />
      <h2>Кажется такой страницы нет(</h2>
      <div>
        <Button onClick={() => navigate("/mytests")}>Вернуться на назад</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
