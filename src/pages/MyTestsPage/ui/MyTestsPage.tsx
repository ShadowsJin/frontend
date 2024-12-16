import Header from "@/widgets/Header";
import style from "./MyTestsPage.module.scss";
import classNames from "classnames";

import { useEffect, useState } from "react";
import TestCards from "@/widgets/TestCards/ui/TestCards";
import CreatingTestBlock from "@/entities/Test/ui/CreatingTestBlock";
import { getCreatedTests, getPassedTests } from "@/features/TestsOperations";
import useTestCardsSearchingSlice from "@/entities/TestCards/model/TestCardsSlice";

const MyTestsPage = () => {
  const [created, setCreated] = useState(true);
  const { setTests } = useTestCardsSearchingSlice();

  useEffect(() => {
    setTests(null);
    created
      ? getCreatedTests().then((res) => setTests(res || []))
      : getPassedTests().then((res) => setTests(res || []));
  }, [created]);
  return (
    <div className={classNames("section", style.MyTestsPage)}>
      <Header withInput={true} />
      <div className={style.tools}>
        <CreatingTestBlock />
        <div
          className={classNames(style.RightBlock, { [style.active]: !created })}
        >
          <div
            onClick={() => setCreated(true)}
            className={classNames(style.tool, { [style.noActive]: !created })}
          >
            <p>Созданные</p>
          </div>
          <div className={style.line}></div>
          <div
            onClick={() => setCreated(false)}
            className={classNames(style.tool, { [style.noActive]: created })}
          >
            <p>Решенные</p>
          </div>
        </div>
      </div>

      <TestCards created={created} />
    </div>
  );
};

export default MyTestsPage;
