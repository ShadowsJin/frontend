import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={style.Sidebar}>
      <h3>НАЗВАНИЕ</h3>
      <div className={style.myBlock}>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to="/mytests"
        >
          Мои тесты
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.activeLink : style.link
          }
          to="/notification"
        >
          Уведомления
        </NavLink>
      </div>

      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/support"
      >
        Поддержка
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/settings"
      >
        Настройки
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to="/"
      >
        Выйти
      </NavLink>
    </div>
  );
};

export default Sidebar;
