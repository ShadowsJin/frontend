import Header from "@/widgets/Header";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./PassingTestPage.module.scss";
import Button from "@/shared/ui/Button";
import { getPassingTest } from "@/features/TestsOperations/model/TestsOperations";
import { TestPassingType } from "@/features/TestsOperations/model/TestOperationsTypes";

const PassingTestPage = () => {
  const [testData, setTestData] = useState<TestPassingType>({
    name: "",
    description: "",
    owner: "",
  });
  const { id } = useParams();

  useEffect(() => {
    getPassingTest(id || "").then((data) => {
      if (data) setTestData(data);
    });
  }, []);
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <div className={style.testPassingForm}>
        <h2>{testData.name}</h2>

        <p>{testData.description}</p>

        <h3>создатель: {testData.owner}</h3>

        <Button>Начать</Button>
      </div>
    </div>
  );
};

export default PassingTestPage;
