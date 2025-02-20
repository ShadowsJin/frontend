import classNames from "classnames";
import style from "./CreateTestPage.module.scss";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useTest from "@/entities/Test/model/TestSlice";
import Button from "@/shared/ui/Button";
import CreateQuestionBlock from "@/entities/Test/ui/CreateQuestionBlock";
import { createTest } from "@/features/TestsOperations/model/TestsOperations";
import PlusIcon from "@/shared/assets/Plus.svg";
import Modal from "@/shared/ui/Modal";
import CompleteCreatingTestForm from "@/features/TestsOperations/ui/CompleteCreatingTestForm";
import TrashIcon from "@/shared/assets/Trash.svg";
import QuestionsMenu from "@/shared/ui/QuestionsMenu";

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
  const ref = useRef<HTMLDivElement>(null);

  const complete = async () => {
    // TODO notification("Есть вопросы без правильных вариантов ответа", "error");

    const res = await createTest(title, description, questions);
    if (res) {
      deleteTest();
      navigate("/mytests");
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const addQuestionBlock = async () => {
    await addQuestion();
    ref &&
      ref.current?.scroll({
        top: ref.current?.scrollHeight,
        behavior: "smooth",
      });
  };

  return (
    <div className={classNames("section", style.CreateTestPage)}>
      <header className={style.header}>
        <h3>{title}</h3>
        <Link to="/">
          <TrashIcon />
        </Link>
      </header>
      <div className={style.body}>
        <div className={style.content}>
          <div className={style.createQuestionsBlock} ref={ref}>
            {questions?.map((question, id) => (
              <CreateQuestionBlock question={question} id={id} key={id} />
            ))}
          </div>
          <div className={style.tools}>
            <QuestionsMenu questionsArray={questions} />
          </div>
        </div>

        <div className={style.buttons}>
          <Button
            onClick={addQuestionBlock}
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
