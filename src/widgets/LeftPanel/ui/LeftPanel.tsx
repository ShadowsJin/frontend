import InfoIcon from "@/shared/assets/Info.svg";
import Button from "@/shared/ui/Button";
import style from "./LeftPanel.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";
import {
  TestCardType,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import CheckMarkIcon from "@/shared/assets/checkMark.svg";
import CompleteTestForm from "@/features/TestsOperations/ui/CompleteTestForm";
import Modal from "@/shared/ui/Modal";
import TestPassingInfoForm from "@/entities/TestPassing/ui/TestPassingInfoForm";

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
      <div className={style.questionsMenu}>
        <h3>Вопросы</h3>
        <div className={style.questions}>
          {questionsArray?.map((item, id) => (
            <Link key={item.name} to={`/passingtest/${idTest}/${id}`}>
              <div
                className={classNames(style.question, {
                  [style.current]: id == Number(numberQuestion),
                  [style.answered]: item.is_answered,
                  [style.viewed]: item.is_viewed,
                })}
              >
                <h5>Вопрос {id + 1}</h5>
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
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
