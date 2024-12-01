import { StatisticCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./StatisticsCard.module.scss";
import InfoIcon from "@/shared/assets/Info.svg";

const StatisticsCard = ({
  user_name,
  correct_count,
  total_count,
}: StatisticCardType) => {
  return (
    <div className={style.StatisticsCard}>
      <div className={style.infoIcon}>
        <InfoIcon />
      </div>
      <p className={style.title}>
        <img src={AvatarImage} />
        {user_name}
      </p>
      <div className={style.cardData}>
        <p>
          Вы решили:{" "}
          <span>
            {correct_count}/{total_count}
          </span>
        </p>
        <p>
          Ваша оценка: <span>Леон</span>
        </p>
        <p>
          Дата прохождения: <span>32.08.2024</span>
        </p>
        <p>
          Время прохождения: <span>15 минут</span>
        </p>
      </div>
    </div>
  );
};

export default StatisticsCard;
