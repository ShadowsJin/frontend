import {
  AnswerForPassing,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestPassingForm.module.scss";
import Input from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import {
  getTestQuestion,
  sendAnswers,
} from "@/features/TestsOperations/model/TestsOperations";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import Loader from "@/shared/ui/Loader";

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
  const [answers, setAnswers] = useState<null | AnswerForPassing[]>(null);
  const navigate = useNavigate();

  const selectAnswers = answers
    ?.filter(({ is_selected }) => is_selected)
    ?.map(({ id }) => id);

  const toggleAnswer = (id: number, isSelected: boolean) => {
    const newAnswers = answers ? [...answers] : [];
    newAnswers[id].is_selected = !isSelected;
    setAnswers(newAnswers);
  };

  useEffect(() => {
    getTestQuestion(idTest, numberQuestion).then((data) => {
      if (data) {
        setQuestionData(data);
        setAnswers(data.answers);
      }
    });
    return setQuestionData(null);
  }, [numberQuestion]);

  const nextQuestion = () => {
    answers && sendAnswers(idTest, numberQuestion, selectAnswers);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`);
  };

  const prevQuestion = () => {
    answers && sendAnswers(idTest, numberQuestion, selectAnswers);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`);
  };

  if (questionData === null) {
    return (
      <div className={style.testPassingForm}>
        <Loader />
      </div>
    );
  }
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
        {answers?.map((answer, id) => (
          <div className={style.answerBlock} key={`${name} ${id} `}>
            <Input
              key={`checkbox${Number(numberQuestion) + id}`}
              type="checkbox"
              checked={answer.is_selected}
              onChange={() => toggleAnswer(id, answer.is_selected)}
              id={answer.id}
            />
            <label htmlFor={answer.id}>{answer.name}</label>
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
        {Number(numberQuestion) + 1 < questions_count && (
          <Button onClick={nextQuestion} variant="accent">
            Следующий вопрос
          </Button>
        )}
        {Number(numberQuestion) + 1 == questions_count && (
          <Button
            onClick={() =>
              answers && sendAnswers(idTest, numberQuestion, selectAnswers)
            }
            variant="accent"
          >
            Сохранить
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestPassingForm;
