import InfoIcon from "@/shared/assets/Info.svg";
import Button from "@/shared/ui/Button";
import style from "./LeftPanel.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  TestCardType,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import CheckMarkIcon from "@/shared/assets/checkMark.svg";
import CompleteTestForm from "@/features/TestsOperations/ui/CompleteTestForm";
import Modal from "@/shared/ui/Modal";
import TestPassingInfoForm from "@/entities/TestPassing/ui/TestPassingInfoForm";
import QuestionsMenu from "@/shared/ui/QuestionsMenu";

interface LeftPanelProps {
  idTest?: string;
  numberQuestion?: string | number;
  testData?: TestCardType | null;
  questionsArray: TestPassingQuestionType[];
}

const LeftPanel = ({ testData, questionsArray }: LeftPanelProps) => {
  const [openFinishModal, setOpenFinishModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const { idTest, numberQuestion } = useParams();

  const closeFinishModal = () => {
    setOpenFinishModal(false);
  };
  const closeInfoModal = () => {
    setOpenInfoModal(false);
  };

  return (
    <div className={style.leftPanel}>
      <div className={style.shortDescription}>
        <div className={style.infoIcon} onClick={() => setOpenInfoModal(true)}>
          <InfoIcon />
        </div>
        <Modal isOpened={openInfoModal} onClose={closeInfoModal}>
          <TestPassingInfoForm {...testData} closeModal={closeInfoModal} />
        </Modal>
        <h3>{testData?.title}</h3>
        <div>{testData?.owner_name}</div>
      </div>

      <QuestionsMenu
        questionsArray={questionsArray}
        idTest={idTest}
        numberQuestion={numberQuestion}
      />

      <Button variant="primary" onClick={() => setOpenFinishModal(true)}>
        <CheckMarkIcon /> Завершить
      </Button>
      <Modal isOpened={openFinishModal} onClose={closeFinishModal}>
        <CompleteTestForm id={idTest} closeModal={closeFinishModal} />
      </Modal>
    </div>
  );
};

export default LeftPanel;
