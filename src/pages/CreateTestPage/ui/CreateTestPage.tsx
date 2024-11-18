import classNames from "classnames";
import style from "./CreateTestPage.module.scss";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/widgets/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useTest from "@/entities/Test/model/TestSlice";
import Button from "@/shared/ui/Button";
import CreateQuestionBlock from "@/entities/Test/ui/CreateQuestionBlock";
import { createTest } from "@/features/TestsOperations/model/TestsOperations";
import PlusIcon from "@/shared/assets/Plus.svg";
import Modal from "@/shared/ui/Modal";
import CompleteCreatingTestForm from "@/features/TestsOperations/ui/CompleteCreatingTestForm";

const CreateTestPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const { title } = useParams();
  const { questions, description, addTitle, addQuestion, deleteTest } =
    useTest();
  useEffect(() => {
    addTitle(title || "");
    deleteTest();
  }, []);
  const navigate = useNavigate();

  const complete = async () => {
    const res = await createTest(title, description, questions);
    if (res) {
      deleteTest();
      navigate("/mytests");
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div className={classNames("section", style.CreateTestPage)}>
      <Header title={`ТЕСТ: ${title}`} />
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.createQuestionsBlock}>
            {questions?.map((question, id) => (
              <CreateQuestionBlock question={question} id={id} key={id} />
            ))}
          </div>
          <div className={style.tools}>Инструменты</div>
        </div>

        <div className={style.buttons}>
          <Button
            onClick={() => addQuestion()}
            className={style.addTest}
            variant="primary"
          >
            <PlusIcon /> Добавить Вопрос
          </Button>
          <Button onClick={() => setOpenModal(true)} variant="primary">
            Завершить
          </Button>
          <Modal isOpened={openModal} onClose={closeModal}>
            <CompleteCreatingTestForm
              complete={complete}
              closeModal={closeModal}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CreateTestPage;
