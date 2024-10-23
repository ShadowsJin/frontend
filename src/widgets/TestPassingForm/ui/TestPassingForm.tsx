import {
  Answer,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestPassingForm.module.scss";
import Input from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import {
  getPassingTestQuestion,
  sendAnswer,
} from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Button from "@/shared/ui/Button";

interface TestPassingFormProps {
  numberQuestion?: string | number;
  idTest?: string;
  questions_count?: number;
}

const TestPassingForm = ({
  numberQuestion,
  idTest,
  questions_count = 0,
}: TestPassingFormProps) => {
  const [questionData, setQuestionData] =
    useState<null | TestPassingQuestionType>(null);
  const [answer, setAnswer] = useState<null | Answer>(null);
  const navigate = useNavigate();

  const toggleAnswer = (name: string, is_correct: boolean) => {
    sendAnswer(name); // Доделать после того как будет готова ручка
  };

  useEffect(() => {
    setAnswer(null);
    getPassingTestQuestion(idTest, numberQuestion).then((data) => {
      if (data) setQuestionData(data);
    });
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
        <p>
          Вопрос {Number(numberQuestion) + 1} из {questions_count}
        </p>
        <div className={style.widthLine}>
          <hr
            className={style.colorLine}
            style={{
              width: `${
                (100 / questions_count) * (Number(numberQuestion) + 1)
              }%`,
            }}
          />
          <hr
            className={style.normalLine}
            style={{
              width: `${
                (100 / questions_count) *
                (questions_count - (Number(numberQuestion) + 1))
              }%`,
            }}
          />
        </div>
      </div>
      <h2>{questionData?.name}</h2>
      <div className={style.answersBlock}>
        {questionData?.answers?.map(({ name, is_correct }, id) => (
          <div className={style.answerBlock} key={Number(numberQuestion) + id}>
            <Input
              key={`checkbox${Number(numberQuestion) + id}`}
              checked={is_correct}
              type="checkbox"
              onChange={() => toggleAnswer(name, is_correct)}
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
