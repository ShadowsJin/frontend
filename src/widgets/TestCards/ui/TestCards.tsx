import TestCard, { TestCardType } from "@/features/TestsOperations";
import style from "./TestCards.module.scss";

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
