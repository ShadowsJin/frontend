import TestCard from "@/features/TestsOperations";
import style from "./TestCards.module.scss";
import SmallLoader from "@/shared/ui/SmallLoader/ui/SmallLoader";
import useTestCardsSearchingSlice from "@/entities/TestCards/model/TestCardsSlice";

interface TestCardsProps {
  created?: boolean;
}
const TestCards = ({ created }: TestCardsProps) => {
  const { tests, params } = useTestCardsSearchingSlice();
  const filteredTest = tests?.filter(({ title }) =>
    title?.includes(params || "")
  );

  if (tests === null || params === null) {
    return <SmallLoader />;
  }

  return (
    <div className={style.Tests}>
      {filteredTest && filteredTest.length > 0 ? (
        filteredTest?.map((card, id) => (
          <TestCard created={created} key={id} {...card} />
        ))
      ) : (
        <h2 className={style.noneTitle}>Такие тесты не найдены</h2>
      )}
    </div>
  );
};

export default TestCards;
