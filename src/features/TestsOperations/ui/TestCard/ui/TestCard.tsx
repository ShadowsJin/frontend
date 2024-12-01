import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestCard.module.scss";
import SettingIcon from "@/shared/assets/setting.svg";
import LinkIcon from "@/shared/assets/Link.svg";
import Modal from "@/shared/ui/Modal";
import { useState } from "react";
import TestLinkForm from "@/shared/ui/TestLinkForm";
import Dropdown from "@/shared/ui/Dropdown";
import { TESTCARD_LI_ARRAY } from "@/shared/constants/DropdownLiArray";
export interface TestCardProps extends TestCardType {
  onClick?: () => void;
  created?: boolean;
}
const TestCard = ({
  title,
  description,
  id,
  onClick,
  created,
  questions_count,
  correct_questions,
}: TestCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={style.TestCard} onClick={onClick}>
      <div className={style.header}>
        <h2>“{title}“</h2>
        <p>{description}</p>
      </div>

      {created ? (
        <>
          <div className={style.bottom}>
            <div className={style.tools}>
              <Dropdown id={id} liArray={TESTCARD_LI_ARRAY}>
                <div className={style.tool}>
                  <SettingIcon />
                </div>
              </Dropdown>
              <div className={style.tool} onClick={() => setOpenModal(true)}>
                <LinkIcon />
              </div>
            </div>
            <p>23.08.2024</p>
          </div>
          <Modal isOpened={openModal} onClose={() => setOpenModal(false)}>
            <TestLinkForm link={`/passingtest/${id}`} />
          </Modal>
        </>
      ) : (
        <div className={style.tools}>
          <p>
            Вы решили:{" "}
            <span className={style.accentText}>
              {questions_count}/{correct_questions}
            </span>
          </p>
          <p>
            Дата прохождения:{" "}
            <span className={style.accentText}>32.08.2024</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default TestCard;
