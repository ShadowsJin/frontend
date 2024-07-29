import TestCard, { TestCardType } from "@/shared/ui/TestCard";
import style from "./TestCards.module.scss";
import { CreatingTestBlock } from "@/features/CreatingTest";

interface TestCardsProps {
  cards: TestCardType[];
  newTest?: boolean;
}
const TestCards = ({ cards, newTest }: TestCardsProps) => {
  return (
    <div className={style.Tests}>
      {newTest && <CreatingTestBlock />}
      {cards.map(({ title }, id) => (
        <TestCard key={id} title={title} />
      ))}
    </div>
  );
};

export default TestCards;
