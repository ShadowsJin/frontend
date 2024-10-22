import { useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import { TestPassingQuestionType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import { getPassingTestQuestion } from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";

import LeftPanel from "@/widgets/LeftPanel";
import TestPassingForm from "@/widgets/TestPassingForm";

const PassingTestPage = () => {
  const [questionData, setQuestionData] = useState<TestPassingQuestionType>({
    name: "",
    type: "1",
    answers: [],
  });
  const { idTest, numberQuestion } = useParams();

  useEffect(() => {
    getPassingTestQuestion(idTest || "", numberQuestion || "").then((data) => {
      if (data) setQuestionData(data);
    });
  }, []);

  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <LeftPanel idTest={idTest} numberQuestion={numberQuestion} />
      <TestPassingForm
        numberQuestion={numberQuestion}
        questionData={questionData}
        idTest={idTest}
      />
    </div>
  );
};

export default PassingTestPage;
