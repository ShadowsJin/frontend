import InfoIcon from "@/shared/assets/Info.svg";
import Button from "@/shared/ui/Button";
import style from "./LeftPanel.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { getPassingTestQuestionsArray } from "@/features/TestsOperations/model/TestsOperations";
import {
  TestCardType,
  TestPassingQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";

interface LeftPanelProps {
  idTest?: string;
  numberQuestion?: string | number;
  testData?: TestCardType;
}

const LeftPanel = ({ idTest, numberQuestion, testData }: LeftPanelProps) => {
  const [questionsArray, setQuestionsArray] = useState<
    TestPassingQuestionType[]
  >([
    {
      name: "",
      type: "1",
      answers: [
        {
          name: "",
          is_correct: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    getPassingTestQuestionsArray(idTest).then((data) => {
      if (data) setQuestionsArray(data);
    });
  }, []);
  return (
    <div className={style.leftPanel}>
      <div className={style.shortDescription}>
        <div className={style.infoIcon}>
          <InfoIcon />
        </div>
        <h3>{testData?.title}</h3>
        <div>{testData?.owner_id}</div>
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
                <p>{item.name}</p>
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
