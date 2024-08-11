import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <p>ЛОГО</p>
      <nav className={style.nav}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/aboutUs">О нас</NavLink>
        <NavLink to="/features">Особенности</NavLink>
        <NavLink to="/сontacts">Контакты</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
