import Avatar from "@/entities/User/ui/Avatar";
import Input from "@/shared/ui/Input";
import style from "./Header.module.scss";
interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <header className={style.Header}>
      <h2>{title}</h2>
      <div className={style.RightBlock}>
        <Input placeholder="Поиск" />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
