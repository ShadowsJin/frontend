import {
  AnswerForPassing,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestPassingForm.module.scss";
import Input from "@/shared/ui/Input";
import { useEffect, useState } from "react";
import { sendAnswers } from "@/features/TestsOperations/model/TestsOperations";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import { isMobile } from "react-device-detect";
import SmallLoader from "@/shared/ui/SmallLoader/ui/SmallLoader";

interface TestPassingFormProps {
  numberQuestion?: string | number;
  idTest?: string;
  questionData: TestPassingQuestionType | null;
  questions_count?: number;
  nextQuestion: () => void;
  prevQuestion: () => void;
  answers?: null | AnswerForPassing[];
  toggleAnswer: (id: number, isSelected: boolean) => void;
  selectAnswers?: string[];
}

const TestPassingForm = ({
  questions_count = 0,
  questionData,
  nextQuestion,
  prevQuestion,
  toggleAnswer,
  answers,
  selectAnswers,
}: TestPassingFormProps) => {
  const { idTest, numberQuestion } = useParams();

  if (questionData === null) {
    return (
      <div className={style.testPassingForm}>
        <SmallLoader />
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
      <div className={style.content}>
        <h2 className={style.title}>{questionData?.name}</h2>
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
            {isMobile ? "Следующий" : "Следующий вопрос"}
          </Button>
        )}
        {Number(numberQuestion) + 1 == questions_count && (
          <Button
            onClick={() =>
              selectAnswers?.length &&
              sendAnswers(idTest, numberQuestion, selectAnswers)
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
