import { TestPassingQuestionType } from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./QuestionsMenu.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface QuestionsMenuProps {
  idTest?: string;
  numberQuestion?: string | number;
  questionsArray: Omit<TestPassingQuestionType, "answers">[];
}

const QuestionsMenu = ({
  questionsArray,
  idTest,
  numberQuestion,
}: QuestionsMenuProps) => {
  return (
    <div className={style.questionsMenu}>
      <h3>Вопросы</h3>
      <div className={style.questions}>
        {questionsArray?.map((item, id) =>
          idTest && numberQuestion ? (
            <Link key={item.name} to={`/passingtest/${idTest}/${id}`}>
              <div
                className={classNames(style.question, {
                  [style.current]: id == Number(numberQuestion),
                  [style.answered]: item.is_answered,
                  [style.viewed]: item.is_viewed,
                })}
              >
                <h5>Вопрос {id + 1}</h5>
                <p>{item.name}</p>
              </div>
            </Link>
          ) : (
            <div className={style.question}>
              <h5>Вопрос {id + 1}</h5>
              <p>{item.name}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuestionsMenu;
