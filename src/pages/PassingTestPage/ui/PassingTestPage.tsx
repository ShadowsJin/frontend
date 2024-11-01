import { useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import {
  TestCardType,
  TestQuestionType,
} from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import { getTest } from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";

import LeftPanel from "@/widgets/LeftPanel";
import TestPassingForm from "@/entities/TestPassing/ui/TestPassingForm";
import MainPassingTestForm from "@/entities/TestPassing/ui/MainPassingTestForm";

const PassingTestPage = () => {
  const [testData, setTestData] = useState<TestCardType>();
  const { idTest, numberQuestion } = useParams();

  useEffect(() => {
    getTest(idTest).then((data) => {
      if (data) setTestData(data);
    });
  }, [idTest]);

  return (
    <div className={classNames("section", style.PassingTestPage)}>
      {numberQuestion ? (
        <>
          <LeftPanel
            idTest={idTest}
            numberQuestion={numberQuestion}
            testData={testData}
          />
          <TestPassingForm
            numberQuestion={numberQuestion}
            idTest={idTest}
            questions_count={testData?.questions_count}
          />
        </>
      ) : (
        <MainPassingTestForm {...testData} />
      )}
    </div>
  );
};

export default PassingTestPage;
