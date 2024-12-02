import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import LogoImg from "@/shared/assets/logo.png";
import MiniLogoIcon from "@/shared/assets/favIcon.svg";
import { isMobile } from "react-device-detect";

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      {isMobile ? (
        <MiniLogoIcon />
      ) : (
        <img src={LogoImg} alt="logo" width={100} />
      )}
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
