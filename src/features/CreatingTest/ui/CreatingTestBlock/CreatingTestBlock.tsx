import { useState } from "react";
import style from "./CreatingTestBlock.module.scss";
import Modal from "@/shared/ui/Modal";
import CreatingTestForm from "@/widgets/CreatingTestForm";
const CreatingTestBlock = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className={style.CreateTest} onClick={() => setOpenModal(true)}>
        <p>Создать новый тест</p>
        <span className={style.plus}>+</span>
      </div>
      <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
        <CreatingTestForm />
      </Modal>
    </>
  );
};

export default CreatingTestBlock;
