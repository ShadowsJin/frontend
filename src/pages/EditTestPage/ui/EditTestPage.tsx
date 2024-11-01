import { useNavigate, useParams } from "react-router-dom";
import style from "./EditTestPage.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import { getTest } from "@/features/TestsOperations/model/TestsOperations";
import classNames from "classnames";
import EditTestForm from "@/entities/Test/ui/EditTestForm/ui/EditTestForm";
import EditIcon from "@/shared/assets/Edit.svg";
import Button from "@/shared/ui/Button";

const EditTestPage = () => {
  const [testData, setTestData] = useState<TestCardType>();
  const { idTest, numberQuestion } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getTest(idTest).then((data) => {
      if (data) setTestData(data);
    });
  }, [idTest]);

  return (
    <div className={classNames("section", style.PassingTestPage)}>
      {numberQuestion ? (
        <p>Страница для полного редактирования теста</p>
      ) : (
        <div className={style.EditTestPage}>
          <div className={style.content}>
            <EditTestForm
              id={idTest}
              title={testData?.title}
              description={testData?.description}
            />
            <Button
              variant="primary"
              onClick={() => navigate(`/edittest/${idTest}/0`)}
            >
              <EditIcon /> Редактировать вопросы
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditTestPage;
