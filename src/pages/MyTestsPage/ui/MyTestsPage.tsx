import Header from "@/widgets/Header";
import style from "./MyTestsPage.module.scss";
import classNames from "classnames";

import { useEffect, useState } from "react";
import TestCards from "@/widgets/TestCards/ui/TestCards";
import CreatingTestBlock from "@/features/TestsOperations/ui/CreatingTestBlock";
import { getCreatedTests, getPassedTests } from "@/features/TestsOperations";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";

const MyTestsPage = () => {
  const [created, setCreated] = useState(true);
  const [createdTestsArray, setCreatedTestsArray] = useState<TestCardType[]>(
    []
  );
  const [passedTestsArray, setPassedTestsArray] = useState<TestCardType[]>([]);

  useEffect(() => {
    created
      ? getCreatedTests().then((res) => setCreatedTestsArray(res || []))
      : getPassedTests().then((res) => setPassedTestsArray(res || []));
  }, [created]);
  return (
    <div className={classNames("section", style.MyTestsPage)}>
      <Header title="МОИ ТЕСТЫ" />
      <div className={style.tools}>
        <CreatingTestBlock />
        <div className={style.RightBlock}>
          <div
            onClick={() => setCreated(true)}
            className={classNames(style.tool, { [style.noActive]: !created })}
          >
            <h3>Созданные</h3>
          </div>
          <div className={style.line}></div>
          <div
            onClick={() => setCreated(false)}
            className={classNames(style.tool, { [style.noActive]: created })}
          >
            <h3>Решенные</h3>
          </div>
        </div>
      </div>

      <TestCards
        created={created}
        cards={created ? createdTestsArray : passedTestsArray}
      />
    </div>
  );
};

export default MyTestsPage;
