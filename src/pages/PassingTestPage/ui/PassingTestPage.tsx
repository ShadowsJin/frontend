import { useNavigate, useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import { TestPassingQuestionType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import { getPassingTestQuestion } from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const PassingTestPage = () => {
  const [questionData, setTestData] = useState<TestPassingQuestionType>({
    name: "",
    type: "1",
    answers: [],
  });
  const { idTest, numberQuestion } = useParams();
  console.log(idTest, numberQuestion);
  const navigate = useNavigate();
  useEffect(() => {
    getPassingTestQuestion(idTest || "", numberQuestion || "").then((data) => {
      if (data) setTestData(data);
    });
  }, []);
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <div className={style.testPassingForm}>
        <h2>{questionData.name}</h2>
        {questionData.answers?.map(({ name, is_correct }) => (
          <div className={style.answerBlock}>
            <div>{name}</div>
            <Input type="checkbox" />
          </div>
        ))}

        <div className={style.buttons}>
          {Number(numberQuestion) > 0 && (
            <Button
              onClick={() =>
                navigate(`/passingtest/${idTest}/${Number(numberQuestion) - 1}`)
              }
            >
              Вернуться
            </Button>
          )}
          <Button
            onClick={() =>
              navigate(`/passingtest/${idTest}/${Number(numberQuestion) + 1}`)
            }
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PassingTestPage;
