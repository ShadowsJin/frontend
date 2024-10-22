import { TestPassingQuestionType } from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestPassingForm.module.scss";
import Input from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import { sendAnswer } from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import { set } from "react-hook-form";

interface TestPassingFormProps {
  numberQuestion?: string | number;
  questionData: TestPassingQuestionType;
  idTest?: string;
}

const TestPassingForm = ({
  numberQuestion,
  questionData,
  idTest,
}: TestPassingFormProps) => {
  const [answer, setAnswer] = useState<null | string>(null);
  const navigate = useNavigate();

  const toggleAnswer = (newAnswer: string) => {
    answer === newAnswer ? setAnswer(null) : setAnswer(newAnswer);
  };

  useEffect(() => {
    setAnswer(null);
  }, [numberQuestion]);
  const nextQuestion = () => {
    answer && sendAnswer(idTest, numberQuestion, answer);
    setAnswer(null);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`);
  };

  const prevQuestion = () => {
    answer && sendAnswer(idTest, numberQuestion, answer);
    setAnswer(null);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`);
  };
  return (
    <div className={style.testPassingForm}>
      <div className={style.testProgressing}>
        <p>Вопрос {Number(numberQuestion) + 1} из 7</p>
        <div className={style.widthLine}>
          <hr
            className={style.colorLine}
            style={{ width: `${(100 / 7) * (Number(numberQuestion) + 1)}%` }}
          />
          <hr
            className={style.normalLine}
            style={{
              width: `${(100 / 7) * (7 - (Number(numberQuestion) + 1))}%`,
            }}
          />
        </div>
      </div>
      <h2>{questionData.name}</h2>
      <div className={style.answersBlock}>
        {questionData.answers?.map(({ name, is_correct }, id) => (
          <div className={style.answerBlock} key={Number(numberQuestion) + id}>
            <Input
              key={`checkbox${Number(numberQuestion) + id}`}
              checked={name === answer}
              type="checkbox"
              onChange={() => toggleAnswer(name)}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div
        className={classNames(style.buttons, {
          [style.justifyContendEnd]: !(Number(numberQuestion) > 0),
        })}
      >
        {Number(numberQuestion) > 0 && (
          <Button onClick={prevQuestion}>Вернуться</Button>
        )}
        <Button onClick={nextQuestion}>Далее</Button>
      </div>
    </div>
  );
};

export default TestPassingForm;
