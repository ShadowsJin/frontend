import InfoIcon from "@/shared/assets/Info.svg";
import Button from "@/shared/ui/Button";
import style from "./LeftPanel.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface LeftPanelProps {
  idTest?: string;
  numberQuestion?: string | number;
}

const LeftPanel = ({ idTest, numberQuestion }: LeftPanelProps) => {
  const [questionsArray, setQuestionsArray] = useState([""]);
  useEffect(() => {
    //Запрашиваем список вопросов теста с параметрами
    setQuestionsArray([
      "Сколько живут лягушки?",
      "Этот вопрос нужен, чтобы показать, какой максимальной длины может быть текст в блоке с вопросиком <3",
      "Этот вопрос нужен, чтобы показать, что будет с текстом, если его длина станет больше, чем две строки, а тогда произойдёт кое что",
      "Сколько живут лягушки?",
      "Этот вопрос нужен, чтобы показать, какой максимальной длины может быть текст в блоке с вопросиком <3",
      "Этот вопрос нужен, чтобы показать, что будет с текстом, если его длина станет больше, чем две строки, а тогда произойдёт кое что",
      "Сколько живут лягушки?",
    ]);
  }, []);
  return (
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
          {questionsArray.map((item, id) => (
            <Link to={`/passingtest/${idTest}/${id}`}>
              <div
                className={classNames(style.question, {
                  [style.current]: id == numberQuestion,
                })}
              >
                <h5>Вопрос {id + 1}</h5>
                <p>{item}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Button variant="primary">Завершить</Button>
    </div>
  );
};

export default LeftPanel;
