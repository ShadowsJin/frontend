import TestCard, { TestCardType } from "@/shared/ui/TestCard";
import style from "./TestCards.module.scss";
import { CreatingTestBlock } from "@/features/CreatingTest";
import Modal from "@/shared/ui/Modal";
import { TestInfoForm } from "@/features/CreatingTest/ui";
import { useState } from "react";

interface TestCardsProps {
  cards: TestCardType[];
  newTest?: boolean;
  created?: boolean;
}
const TestCards = ({ cards, newTest, created }: TestCardsProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  return (
    <div className={style.Tests}>
      {newTest && <CreatingTestBlock />}
      {cards.map(({ title }, id) => (
        <TestCard
          key={id}
          title={title}
          onClick={() => {
            setTitle(title);
            setOpenModal(true);
          }}
        />
      ))}
      {created && (
        <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
          <TestInfoForm title={title} />
        </Modal>
      )}
    </div>
  );
};

export default TestCards;
