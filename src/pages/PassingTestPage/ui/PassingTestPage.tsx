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
import InfoIcon from "@/shared/assets/Info.svg";

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
    setAnswer(null);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`);
  };

  const prevQuestion = () => {
    answer && sendAnswer(idTest, numberQuestion, answer);
    setAnswer(null);
    navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`);
  };
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <div className={style.leftPanel}>
        <div className={style.shortDescription}>
          <div className={style.infoIcon}>
            <InfoIcon />
          </div>
          <h3>
            Название теста будет не больше, чем 2 строчки, иначе всё будет
            скрываться
          </h3>
          <div>Василий Петров</div>
        </div>
        <div className={style.questionsMenu}>
          <h3>Вопросы</h3>
          <div className={style.questions}>
            {[
              "Сколько живут лягушки?",
              "Этот вопрос нужен, чтобы показать, какой максимальной длины может быть текст в блоке с вопросиком <3",
              "Этот вопрос нужен, чтобы показать, что будет с текстом, если его длина станет больше, чем две строки, а тогда произойдёт кое что",
              "Сколько живут лягушки?",
              "Этот вопрос нужен, чтобы показать, какой максимальной длины может быть текст в блоке с вопросиком <3",
              "Этот вопрос нужен, чтобы показать, что будет с текстом, если его длина станет больше, чем две строки, а тогда произойдёт кое что",
              "Сколько живут лягушки?",
            ].map((item, id) => (
              <div className={style.question}>
                <h5>Вопрос {id + 1}</h5>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Button>Завершить</Button>
      </div>
      <div className={style.testPassingForm}>
        <div className={style.testProgressing}>
          <p>Вопрос {numberQuestion} из 5</p>
          <div className={style.widthLine}>
            <hr
              className={style.colorLine}
              style={{ width: `${(100 / 5) * Number(numberQuestion)}%` }}
            />
            <hr
              className={style.normalLine}
              style={{ width: `${(100 / 5) * (5 - Number(numberQuestion))}%` }}
            />
          </div>
        </div>
        <h2>{questionData.name}</h2>
        <div className={style.answersBlock}>
          {questionData.answers?.map(({ name, is_correct }, id) => (
            <div
              className={style.answerBlock}
              key={Number(numberQuestion) + id}
            >
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
    </div>
  );
};

export default PassingTestPage;
