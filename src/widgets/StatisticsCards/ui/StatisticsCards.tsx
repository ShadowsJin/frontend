import { StatisticsCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import { useEffect, useState } from "react";
import style from "./StatisticsCards.module.scss";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import StatisticsCard from "@/shared/ui/StatisticsCard";
import BackArrow from "@/shared/assets/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

const StatisticsCards = () => {
  const [isNew, setIsNew] = useState<boolean>(true);
  const [cardsArray, setCardsArray] = useState<StatisticsCardType[] | null>(
    null
  );
  const navigate = useNavigate();
  useEffect(() => {
    //запрашиваем массив со статистикой
    setCardsArray([
      {
        userName: "Василий Петров",
        solve: 5,
        score: "Леон",
        dateCompletion: "32.08.2024",
        passageTime: "15 минут",
        totalQuestions: 5,
      },
      {
        userName: "Аркадий Тапочкин",
        solve: 4,
        score: "ФФФФ",
        dateCompletion: "30.08.2024",
        passageTime: "20 минут",
        totalQuestions: 5,
      },
      {
        userName: "Огурчик Мандаринов",
        solve: 5,
        score: "Леон",
        dateCompletion: "31.08.2024",
        passageTime: "10 минут",
        totalQuestions: 5,
      },
      {
        userName: "Михаил Мишуткин",
        solve: 3,
        score: "АААА",
        dateCompletion: "29.08.2024",
        passageTime: "5 минут",
        totalQuestions: 5,
      },
      {
        userName: "Василий Петров",
        solve: 5,
        score: "Леон",
        dateCompletion: "32.08.2024",
        passageTime: "15 минут",
        totalQuestions: 5,
      },
      {
        userName: "Аркадий Тапочкин",
        solve: 4,
        score: "ФФФФ",
        dateCompletion: "30.08.2024",
        passageTime: "20 минут",
        totalQuestions: 5,
      },
      {
        userName: "Огурчик Мандаринов",
        solve: 5,
        score: "Леон",
        dateCompletion: "31.08.2024",
        passageTime: "10 минут",
        totalQuestions: 5,
      },
      {
        userName: "Михаил Мишуткин",
        solve: 3,
        score: "АААА",
        dateCompletion: "29.08.2024",
        passageTime: "5 минут",
        totalQuestions: 5,
      },
    ]);
  }, []);
  return (
    <div className={style.StatisticsCards}>
      <div className={style.header}>
        <Button variant="primary" onClick={() => navigate("/mytests")}>
          <BackArrow />
          Назад
        </Button>
        <div className={style.sortBlock}>
          <p>Отсортировать:</p>
          <div className={style.sortInput}>
            <Input
              type="checkbox"
              checked={isNew}
              onChange={() => setIsNew(true)}
            />
            <span>Сначала новые</span>
          </div>
          <div className={style.sortInput}>
            <Input
              type="checkbox"
              checked={!isNew}
              onChange={() => setIsNew(false)}
            />
            <span>Сначала старые</span>
          </div>
        </div>
      </div>
      <div className={style.cardsBlock}>
        {cardsArray?.map((item) => (
          <StatisticsCard {...item} />
        ))}
      </div>
    </div>
  );
};

export default StatisticsCards;
