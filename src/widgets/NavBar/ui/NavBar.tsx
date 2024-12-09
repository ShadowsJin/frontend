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
        <a href="#aboutUsBlock">О нас</a>
        <a href="/#aboutUsBlock">Преимущества</a>
        <a href="#teamBlock">Команда</a>
      </nav>
    </div>
  );
};

export default NavBar;
