import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./ProfileCard.module.scss";
import Button from "@/shared/ui/Button";
import useUserStore from "../model/slice/UserSlice";
const ProfileCard = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className={style.ProfileCard}>
      <div className={style.AvatarBlock}>
        <img src={AvatarImage} alt="" />
        <Button variant="text">Загрузить аватар</Button>
      </div>
      <div className={style.NameBlock}>
        <h3>Имя: {user?.firstName}</h3>
        <h3>Фамилия: {user?.lastName}</h3>
      </div>
      <div className={style.ButtonsBlock}>
        <Button>Редактировать профиль</Button>
        <Button>Сохранить</Button>
        <Button>Удалить Профиль</Button>
      </div>
    </div>
  );
};

export default ProfileCard;
