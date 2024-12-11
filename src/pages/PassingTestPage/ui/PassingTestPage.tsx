import { useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import { getTest } from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";

import MainPassingTestForm from "@/entities/TestPassing/ui/MainPassingTestForm";
import PassingTestBlock from "./PassingTestBlock";

const PassingTestPage = () => {
  const [testData, setTestData] = useState<TestCardType | null>(null);
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
          <PassingTestBlock testData={testData} />
        </>
      ) : (
        <MainPassingTestForm {...testData} />
      )}
    </div>
  );
};

export default PassingTestPage;
