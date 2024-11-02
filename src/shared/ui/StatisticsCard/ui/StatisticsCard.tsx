import { StatisticsCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./StatisticsCard.module.scss";

const StatisticsCard = ({
  userName,
  solve,
  score,
  dateCompletion,
  passageTime,
  totalQuestions,
}: StatisticsCardType) => {
  return (
    <div className={style.StatisticsCard}>
      <p className={style.title}>
        <img src={AvatarImage} />
        {userName}
      </p>
      <div className={style.cardData}>
        <p>
          Вы решили:{" "}
          <span>
            {solve}/{totalQuestions}
          </span>
        </p>
        <p>
          Ваша оценка: <span>{score}</span>
        </p>
        <p>
          Дата прохождения: <span>{dateCompletion}</span>
        </p>
        <p>
          Время прохождения: <span>{passageTime}</span>
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;
