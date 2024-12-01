import PieDiagram from "@/shared/ui/PieDiagram";
import style from "./StatisticsPanel.module.scss";
import AvatarImage from "@/shared/assets/Avatar.png";
import PersonCircleIcon from "@/shared/assets/personCircle.svg";
import FiveCircleIcon from "@/shared/assets/fiveCircle.svg";
import TimeCircleIcon from "@/shared/assets/timeCircle.svg";
import AnswerCircleIcon from "@/shared/assets/answerCircle.svg";

const StatisticsPanel = () => {
  return (
    <div className={style.statisticsPanel}>
      <div className={style.diagramBlock}>
        <p className={style.title}>Общая статистика:</p>

        <PieDiagram />

        <div className={style.bestResult}>
          <p>Написал лучше всех:</p>
          <div className={style.bestUser}>
            <img src={AvatarImage} />
            <h4>Василий Петров</h4>
          </div>
        </div>
      </div>

      <div className={style.dataBlock}>
        <div className={style.dataBlockItem}>
          <PersonCircleIcon />
          <div className={style.data}>
            <p>Человек прошло:</p>
            <h4>10</h4>
          </div>
        </div>
        <div className={style.dataBlockItem}>
          <TimeCircleIcon />
          <div className={style.data}>
            <p>Cреднее время:</p>
            <h4>7 минут</h4>
          </div>
        </div>
        <div className={style.dataBlockItem}>
          <FiveCircleIcon />
          <div className={style.data}>
            <p>Средняя оценка:</p>
            <h4>4,5</h4>
          </div>
        </div>
        <div className={style.dataBlockItem}>
          <AnswerCircleIcon />
          <div className={style.data}>
            <p>Правильных ответов:</p>
            <h4>~ 6</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPanel;
