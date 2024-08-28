import Avatar from "@/entities/User/ui/Avatar";
import Input from "@/shared/ui/Input";
import SearchIcon from "@/shared/assets/search.svg";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <header className={style.Header}>
      <Link to="/">
        <h3>ЛОГО</h3>
      </Link>
      <div className={style.RightBlock}>
        <Input placeholder="Поиск..." icon={<SearchIcon />} />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
