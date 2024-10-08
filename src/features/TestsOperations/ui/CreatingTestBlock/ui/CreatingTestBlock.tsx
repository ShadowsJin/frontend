import { useState } from "react";
import style from "./CreatingTestBlock.module.scss";
import Modal from "@/shared/ui/Modal";
import CreatingTestForm from "@/widgets/CreatingTestForm";
import PlusIcon from "@/shared/assets/Plus.svg";
const CreatingTestBlock = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className={style.CreateTest} onClick={() => setOpenModal(true)}>
        <PlusIcon />
        <h3>Создать новый тест</h3>
      </div>
      <Modal isOpened={openModal} onClose={closeModal}>
        <CreatingTestForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CreatingTestBlock;
