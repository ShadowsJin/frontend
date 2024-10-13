import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./ProfileCard.module.scss";
import Button from "@/shared/ui/Button";
import useUserStore from "../model/slice/UserSlice";
import Modal from "@/shared/ui/Modal";
import { useState } from "react";
import LogoutForm from "@/features/AuthByEmail/ui/LogoutForm";
import TrashIcon from "@/shared/assets/Trash.svg";
import Input from "@/shared/ui/Input";
const ProfileCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const user = useUserStore((state) => state.user);
  return (
    <div className={style.ProfileCard}>
      <div className={style.Header}>
        <h2>Профиль</h2>
        <div className={style.trashIcon} onClick={() => setOpenModal(true)}>
          <TrashIcon />
        </div>
      </div>
      <div className={style.AvatarBlock}>
        <img src={AvatarImage} alt="" />
        <Button variant="text">Загрузить фото</Button>
      </div>

      <div className={style.InputsBlock}>
        <div className={style.InputBlock}>
          <label>Имя:</label>
          <Input placeholder={user.firstName} />
        </div>
        <div className={style.InputBlock}>
          <label>Фамилия:</label>
          <Input placeholder={user.lastName} />
        </div>
      </div>

      <div className={style.Buttons}>
        <Button>Сохранить</Button>
        <Button>Отмена</Button>
      </div>
      <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
        <LogoutForm />
      </Modal>
    </div>
  );
};

export default ProfileCard;
