import classNames from "classnames";
import style from "./CreateTestPage.module.scss";
import Header from "@/widgets/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import useNewTest from "@/entities/NewTest/model/NewTest";
import Button from "@/shared/ui/Button";
import CreateQuestionBlock from "@/widgets/CreateQuestionBlock";
import { createTest } from "@/features/TestsOperations/model/TestsOperations";

const CreateTestPage = () => {
  const { title } = useParams();
  const { questions, description, addTitle, addQuestion, deleteTest } =
    useNewTest();
  useEffect(() => {
    addTitle(title || "");
    deleteTest();
  }, []);
  const navigate = useNavigate();

  const complete = async () => {
    await createTest(title, description, questions);
    deleteTest();
    navigate("/mytests");
  };
  return (
    <div className={classNames("section", style.CreateTestPage)}>
      <Header title={`ТЕСТ: ${title}`} />
      <div className={style.body}>
        <div className={style.content}>
          {questions?.map((question, id) => (
            <CreateQuestionBlock question={question} id={id} key={id} />
          ))}
          <div onClick={() => addQuestion()} className={style.addTest}>
            <h3>Добавить +</h3>
          </div>
          <div className={style.buttons}>
            <Button onClick={() => createTest(title, description, questions)}>
              Сохранить
            </Button>
            <Button onClick={complete}>Завершить</Button>
            <Button onClick={deleteTest}>Удалить</Button>
          </div>
        </div>
        <div className={style.tools}>
          <h3>ИНСТРУМЕНТЫ</h3>
        </div>
      </div>
    </div>
  );
};

export default CreateTestPage;
