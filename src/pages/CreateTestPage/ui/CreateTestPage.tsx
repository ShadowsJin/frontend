import classNames from "classnames";
import style from "./CreateTestPage.module.scss";
import Header from "@/widgets/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionBlock from "@/widgets/QuestionBlock";
import useTestConstructor from "@/entities/TestConstructor/model/TestConstructorSlice";
import Button from "@/shared/ui/Button";

const CreateTestPage = () => {
  const { title } = useParams();
  const { questions, addTitle, addQuestion, deleteTest } = useTestConstructor();
  useEffect(() => {
    addTitle(title);
  });
  return (
    <div className={classNames("section", style.CreateTestPage)}>
      <Header title={`ТЕСТ: ${title}`} />
      <div className={style.body}>
        <div className={style.content}>
          {questions?.map((question, id) => (
            <QuestionBlock id={id} key={id} />
          ))}
          <div onClick={() => addQuestion()} className={style.addTest}>
            <h3>Добавить +</h3>
          </div>
          <div className={style.buttons}>
            <Button onClick={() => console.log(questions)}>Сохранить</Button>
            <Button>Завершить</Button>
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
