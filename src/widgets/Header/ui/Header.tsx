import Avatar from "@/features/AuthByEmail/ui/Avatar/Avatar";
import Input from "@/shared/ui/Input";
import SearchIcon from "@/shared/assets/search.svg";
import style from "./Header.module.scss";
import LogoImg from "@/shared/assets/logo.png";
import MiniLogoIcon from "@/shared/assets/favIcon.svg";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Header = () => {
  return (
    <header className={style.Header}>
      <Link to="/">
        {isMobile ? (
          <MiniLogoIcon />
        ) : (
          <img src={LogoImg} alt="logo" width={100} />
        )}
      </Link>
      <div className={style.RightBlock}>
        <Input placeholder="Поиск..." icon={<SearchIcon />} />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
