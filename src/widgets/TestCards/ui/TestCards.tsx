import TestCard, { TestCardType } from "@/shared/ui/TestCard";
import style from "./TestCards.module.scss";

interface TestCardsProps {
  cards: TestCardType[];
}
const TestCards = ({ cards }: TestCardsProps) => {
  return (
    <div className={style.Tests}>
      <div className={style.CreateTest}>
        <p>Создать новый тест</p>
        <span className={style.plus}>+</span>
      </div>
      {cards.map(({ title }, id) => (
        <TestCard key={id} title={title} />
      ))}
    </div>
  );
};

export default TestCards;
