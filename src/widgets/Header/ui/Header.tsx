import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <p>Название</p>
      <nav className={style.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/aboutUs">О нас</NavLink>
        <NavLink to="/features">Особенности</NavLink>
        <NavLink to="/сontacts">Контакты</NavLink>
      </nav>
    </div>
  );
};

export default Header;
