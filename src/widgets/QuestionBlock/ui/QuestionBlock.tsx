import Input from "@/shared/ui/Input";
import style from "./QuestionBlock.module.scss";
import Button from "@/shared/ui/Button";
import { useEffect, useState } from "react";
import useTestConstructor from "@/entities/TestConstructor/model/TestConstructorSlice";

const QuestionBlock = ({ id }: { id: number }) => {
  const { questions, setAnswers, addAnswer, setQuestion } =
    useTestConstructor();
  const ChangeAnswers = (answer: string, id: number) => {
    const answers = [...questions.answers];
    answers[id] = answers[id] + answer;
    setAnswers(id, answers);
  };
  const ChangeQuestion = (question: string) => {
    setQuestion(id, question);
  };

  return (
    <div className={style.questionBlock}>
      <div className={style.question}>
        <h3>Вопрос:</h3>{" "}
        <Input
          value={questions.question}
          onChange={(e) => ChangeQuestion(e.target.value)}
        />
      </div>
      <ul className={style.answers}>
        {questions[id].answers?.map((answer, AnswId) => (
          <li key={AnswId} className={style.answer}>
            <h3>Ответ:</h3>
            <Input
              value={answer}
              onChange={(e) => setAnswers(id, AnswId, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <Button onClick={() => addAnswer(id)} style={{ width: "30%" }}>
        Добавить ответ
      </Button>
    </div>
  );
};

export default QuestionBlock;
