import TestCard from "@/features/TestsOperations";
import style from "./TestCards.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import Loader from "@/shared/ui/Loader";

interface TestCardsProps {
  cards: TestCardType[] | null;
  created?: boolean;
}
const TestCards = ({ cards, created }: TestCardsProps) => {
  if (cards === null) {
    return <Loader />;
  }
  return (
    <div className={style.Tests}>
      {cards.length > 0 ? (
        cards.map((card, id) => (
          <TestCard created={created} key={id} {...card} />
        ))
      ) : (
        <h2 className={style.noneTitle}>Здесь нет тестов</h2>
      )}
    </div>
  );
};

export default TestCards;
