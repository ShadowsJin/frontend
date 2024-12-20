import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./ProfileCard.module.scss";
import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";
import { useEffect, useState } from "react";
import LogoutForm from "@/features/AuthByEmail/ui/LogoutForm";
import TrashIcon from "@/shared/assets/Trash.svg";
import Input from "@/shared/ui/Input";
import {
  changeProfile,
  getMe,
} from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";
import SmallLoader from "@/shared/ui/SmallLoader/ui/SmallLoader";

const ProfileCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fullname, setFullname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const setValues = () => {
    getMe().then((res) => {
      if (res) {
        setFullname(res.fullname);
        setEmail(res.email);
      }
    });
  };

  useEffect(() => {
    setValues();
  }, []);

  if (fullname === null || email === null) {
    return (
      <div className={style.ProfileCard}>
        <SmallLoader />
      </div>
    );
  }
  return (
    <div className={style.ProfileCard}>
      <div className={style.Header}>
        <h2>Профиль</h2>
        <div
          id="logoutIcon"
          className={style.trashIcon}
          onClick={() => setOpenModal(true)}
        >
          <TrashIcon />
        </div>
      </div>
      <div className={style.AvatarBlock}>
        <img src={AvatarImage} alt="" />
        <Button>Загрузить фото</Button>
      </div>

      <div className={style.InputsBlock}>
        <div className={style.InputBlock}>
          <label>Имя:</label>
          <Input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className={style.InputBlock}>
          <label>Email:</label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className={style.buttons}>
        <Button onClick={setValues}>Отмена</Button>
        <Button variant="accent" onClick={() => changeProfile(fullname, email)}>
          Сохранить
        </Button>
      </div>
      <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
        <LogoutForm closeModal={() => setOpenModal(false)} />
      </Modal>
    </div>
  );
};

export default ProfileCard;
