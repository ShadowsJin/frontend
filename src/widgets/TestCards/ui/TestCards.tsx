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
      {cards.map(({ title, description }, id) => (
        <TestCard key={id} title={title} description={description} />
      ))}
    </div>
  );
};

export default TestCards;
