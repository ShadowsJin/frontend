import style from "./StatisticsPanel.module.scss";
const StatisticsPanel = () => {
  return (
    <div className={style.statisticsPanel}>
      <div className={style.diagramBlock}>Общая статистика</div>
      <div className={style.dataBlock}>человек пришло</div>
    </div>
  );
};

export default StatisticsPanel;
