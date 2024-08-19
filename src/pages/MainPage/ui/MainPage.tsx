import Button from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import NavBar from "@/widgets/NavBar";
import classNames from "classnames";
import ChacklistIcon from "@/shared/assets/checklist.svg";
import LaughEmojiIcon from "@/shared/assets/laughEmoji.svg";
import DiamondIcon from "@/shared/assets/Diamond.svg";
import CrownIcon from "@/shared/assets/crown.svg";
import AirplaneIcon from "@/shared/assets/airplane.svg";

const MainPage = () => {
  return (
    <div className={style.MainPage}>
      <div className={classNames(style.picture, style.checklist)}>
        <ChacklistIcon />
      </div>
      <div className={classNames(style.picture, style.diamond)}>
        <DiamondIcon />
      </div>
      <NavBar />
      <div className="container">
        <div className={style.content}>
          <h1>
            <div className={classNames(style.picture, style.crown)}>
              <CrownIcon />
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
        <LaughEmojiIcon />
      </div>
      <div className={classNames(style.picture, style.airplane)}>
        <AirplaneIcon />
      </div>
    </div>
  );
};

export default MainPage;
