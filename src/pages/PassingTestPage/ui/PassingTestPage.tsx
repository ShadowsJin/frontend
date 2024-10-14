import { useNavigate, useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import { TestPassingQuestionType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import {
  getPassingTestQuestion,
  sendAnswer,
} from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const PassingTestPage = () => {
  const [answer, setAnswer] = useState<null | string>(null);
  const [questionData, setQuestionData] = useState<TestPassingQuestionType>({
    name: "",
    type: "1",
    answers: [],
  });
  const { idTest, numberQuestion } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getPassingTestQuestion(idTest || "", numberQuestion || "").then((data) => {
      if (data) setQuestionData(data);
    });
  }, []);
  const toggleAnswer = (newAnswer: string) => {
    answer === newAnswer ? setAnswer(null) : setAnswer(newAnswer);
  };

  const nextQuestion = () => {
    answer && sendAnswer(idTest, numberQuestion, answer);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`);
  };

  const prevQuestion = () => {
    answer && sendAnswer(idTest, numberQuestion, answer);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`);
  };
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <div className={style.testPassingForm}>
        <h2>{questionData.name}</h2>
        {questionData.answers?.map(({ name, is_correct }) => (
          <div className={style.answerBlock}>
            <div>{name}</div>
            <Input
              checked={name === answer}
              type="checkbox"
              onChange={() => toggleAnswer(name)}
            />
          </div>
        ))}

        <div className={style.buttons}>
          {Number(numberQuestion) > 0 && (
            <Button onClick={prevQuestion}>Вернуться</Button>
          )}
          <Button onClick={nextQuestion}>Далее</Button>
        </div>
      </div>
    </div>
  );
};

export default PassingTestPage;
