import TestCard from "@/features/TestsOperations";
import style from "./TestCards.module.scss";
import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";

interface TestCardsProps {
  cards: TestCardType[];
  created?: boolean;
}
const TestCards = ({ cards, created }: TestCardsProps) => {
  return (
    <div className={style.Tests}>
      {cards.length > 0 ? (
        cards.map((card, id) => <TestCard key={id} {...card} />)
      ) : (
        <h2 className={style.noneTitle}>Здесь нет тестов</h2>
      )}
    </div>
  );
};

export default TestCards;
