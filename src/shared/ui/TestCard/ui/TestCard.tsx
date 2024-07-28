import style from "./TestCard.module.scss";
export interface TestCardType {
  title: string;
}
const TestCard = ({ title }: TestCardType) => {
  return (
    <div className={style.TestCard}>
      <p>{title}</p>
    </div>
  );
};

export default TestCard;
