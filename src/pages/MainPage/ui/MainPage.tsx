import Button from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import NavBar from "@/widgets/NavBar";
import classNames from "classnames";
import Chacklist from "@/shared/assets/checklist.svg";
import LaughEmoji from "@/shared/assets/laughEmoji.svg";
import Diamond from "@/shared/assets/Diamond.svg";
import Crown from "@/shared/assets/crown.svg";
import Airplane from "@/shared/assets/airplane.svg";

const MainPage = () => {
  return (
    <div className={classNames("background-cells", style.MainPage)}>
      <div className={classNames(style.picture, style.checklist)}>
        <Chacklist />
      </div>
      <div className={classNames(style.picture, style.diamond)}>
        <Diamond />
      </div>
      <NavBar />
      <div className="container">
        <div className={style.content}>
          <h1>
            <div className={classNames(style.picture, style.crown)}>
              <Crown />
            </div>
            Платформа для создания тестов и проверочных работ
          </h1>

          <h3>
            Платформа позволяет преподавателям быстро создавать контрольные и
            проверочные работы, а ученики могут проходить их как онлайн, так и
            оффлайн
          </h3>
          <div className={style.authBlock}>
            <Link to="/login" className={style.ButtonLink}>
              <Button>Войти</Button>
            </Link>
            <Link to="/register" className={style.ButtonLink}>
              <Button>Регистрация</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={classNames(style.picture, style.emoji)}>
        <LaughEmoji />
      </div>
      <div className={classNames(style.picture, style.airplane)}>
        <Airplane />
      </div>
    </div>
  );
};

export default MainPage;
