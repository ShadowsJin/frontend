import style from "./TestCard.module.scss";
export interface TestCardType {
  title: string;
  onClick?: () => void;
}
const TestCard = ({ title, onClick }: TestCardType) => {
  return (
    <div className={style.TestCard} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
};

export default TestCard;
