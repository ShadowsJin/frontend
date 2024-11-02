import StatisticsCards from "@/widgets/StatisticsCards";
import style from "./StatisticsPage.module.scss";
import classNames from "classnames";
import StatisticsPanel from "@/widgets/StatisticsPanel";

const StatisticsPage = () => {
  return (
    <div className={classNames("section", style.StaticsPage)}>
      <StatisticsCards />
      <StatisticsPanel />
    </div>
  );
};

export default StatisticsPage;
