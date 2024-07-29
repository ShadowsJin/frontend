import { ProfileCard } from "@/entities/User";
import Header from "@/widgets/Header";
import classNames from "classnames";
import style from "./ProfilePage.module.scss";
const ProfilePage = () => {
  return (
    <div className={classNames("section", style.ProfilePage)}>
      <Header title="Профиль" />
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
