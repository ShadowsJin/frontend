import { ProfileCard } from "@/entities/User";
import Header from "@/widgets/Header";
import classNames from "classnames";
import style from "./ProfilePage.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@/shared/assets/arrowLeft.svg";
const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classNames("section", style.ProfilePage)}>
      <Header title="Профиль" />
      <div className={style.ProfileBody}>
        <div className={style.BackBlock} onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
          <p>Назад</p>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
