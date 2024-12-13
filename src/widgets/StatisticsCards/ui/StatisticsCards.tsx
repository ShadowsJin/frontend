import { StatisticCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import style from "./StatisticsCards.module.scss";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import StatisticsCard from "@/shared/ui/StatisticsCard";
import BackArrow from "@/shared/assets/arrowLeft.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getStatistics } from "@/features/TestsOperations/model/TestsOperations";
import SmallLoader from "@/shared/ui/SmallLoader/ui/SmallLoader";

const StatisticsCards = () => {
  const [isNew, setIsNew] = useState<boolean>(true);
  const [cardsArray, setCardsArray] = useState<StatisticCardType[] | null>(
    null
  );

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getStatistics(id).then((res) => res && setCardsArray(res));
  }, []);

  if (cardsArray === null) {
    return (
      <div className={style.noneCards}>
        <SmallLoader />
      </div>
    );
  }

  const isNewCardsArray = isNew ? cardsArray : [...cardsArray]?.reverse();

  return (
    <div className={style.StatisticsCards}>
      <div className={style.header}>
        <Button variant="primary" onClick={() => navigate("/mytests")}>
          <BackArrow />
          Назад
        </Button>
        <div className={style.sortBlock}>
          <p className={style.sortTitle}>Отсортировать:</p>
          <div className={style.sortInput}>
            <Input
              id="new"
              type="checkbox"
              checked={isNew}
              onChange={() => setIsNew(true)}
              name="new"
            />
            <label htmlFor="new">Сначала новые</label>
          </div>
          <div className={style.sortInput}>
            <Input
              id="notNew"
              type="checkbox"
              checked={!isNew}
              name="notNew"
              onChange={() => setIsNew(false)}
            />
            <label htmlFor="notNew">Сначала старые</label>
          </div>
        </div>
      </div>

      {cardsArray?.length ? (
        <div className={style.cardsBlock}>
          {isNewCardsArray?.map((item, id) => (
            <StatisticsCard key={id} {...item} />
          ))}
        </div>
      ) : (
        <div className={style.noneCards}>
          <h2>Ваш тест еще никто не проходил</h2>
        </div>
      )}
    </div>
  );
};

export default StatisticsCards;
