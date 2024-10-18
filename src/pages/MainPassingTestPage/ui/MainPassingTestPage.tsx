import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./MainPassingTestPage.module.scss";
import Button from "@/shared/ui/Button";
import { getPassingTest } from "@/features/TestsOperations/model/TestsOperations";
import { TestPassingType } from "@/features/TestsOperations/model/TestOperationsTypes";

const MainPassingTestPage = () => {
  const [testData, setTestData] = useState<TestPassingType>({
    name: "",
    description: "",
    owner: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getPassingTest(id || "").then((data) => {
      if (data) setTestData(data);
    });
  }, []);
  return (
    <div className={classNames("section", style.PassingTestPage)}>
      <div className={style.testPassingForm}>
        <h2>{testData.name}</h2>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Описание:</label>
          <p>{testData.description}</p>
        </div>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Количество вопросов:</label>
          <p>5</p>
        </div>

        <div className={style.testPassingBlock}>
          <label className={style.testLabel}>Создатель</label>
          <p>{testData.owner}</p>
        </div>

        <Button onClick={() => navigate(`/passingtest/${id}/0`)}>Начать</Button>
      </div>
    </div>
  );
};

export default MainPassingTestPage;
