import { useState } from "react";
import style from "./CreatingTestBlock.module.scss";
import Modal from "@/shared/ui/Modal";
import CreatingTestForm from "@/entities/Test/ui/CreatingTestForm";
import PlusIcon from "@/shared/assets/Plus.svg";
import Button from "@/shared/ui/Button";
const CreatingTestBlock = () => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Button
        variant="primary"
        className={style.CreateTest}
        onClick={() => setOpenModal(true)}
      >
        <PlusIcon />
        <span>Создать новый тест</span>
      </Button>

      <Modal isOpened={openModal} onClose={closeModal}>
        <CreatingTestForm closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default CreatingTestBlock;
