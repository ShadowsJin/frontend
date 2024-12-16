import Avatar from "@/features/AuthByEmail/ui/Avatar/Avatar";
import Input from "@/shared/ui/Input";
import SearchIcon from "@/shared/assets/search.svg";
import style from "./Header.module.scss";
import LogoImg from "@/shared/assets/logo.png";
import MiniLogoIcon from "@/shared/assets/favIcon.svg";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useTestCardsSearchingSlice from "@/entities/TestCards/model/TestCardsSlice";

const Header = ({ withInput = false }: { withInput?: boolean }) => {
  const { setParams, params } = useTestCardsSearchingSlice();

  const setSearchParams = (text: string) => {
    setParams(null);
    setTimeout(() => setParams(text), 300);
  };
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
        {withInput && (
          <Input
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder="Поиск..."
            icon={<SearchIcon />}
          />
        )}
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
