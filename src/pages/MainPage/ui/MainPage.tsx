import Button from "@/shared/ui/Button";
import { Link } from "react-router-dom";
import style from "./MainPage.module.scss";
import Header from "@/widgets/Header";
import classNames from "classnames";

const MainPage = () => {
  return (
    <div className={classNames("container", style.MainPage)}>
      <Header />
      <div className={style.container}>
        <h2>ПЛАТФОРМА ДЛЯ СОЗДАНИЯ ТЕСТОВ И ПРОВЕРОЧНЫХ РАБОТ</h2>
        <p>
          Платформа позволяет преподавателям быстро создавать контрольные и
          проверочные работы, а ученики могут проходить их как онлайн, так и
          оффлайн
        </p>
        <div className={style.authBlock}>
          <Link to="/login" className={style.ButtonLink}>
            <Button>Войти</Button>
          </Link>
          <span className={style.Or}>ИЛИ</span>
          <Link to="/register" className={style.ButtonLink}>
            <Button>Зарегистрироваться</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
