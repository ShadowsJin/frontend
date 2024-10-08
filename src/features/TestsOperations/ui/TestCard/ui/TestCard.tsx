import { TestCardType } from "@/features/TestsOperations/model/TestOperationsTypes";
import style from "./TestCard.module.scss";
import EditIcon from "@/shared/assets/Edit.svg";
import LinkIcon from "@/shared/assets/Link.svg";
export interface TestCardProps extends TestCardType {
  onClick?: () => void;
}
const TestCard = ({ title, description, onClick }: TestCardProps) => {
  return (
    <div className={style.TestCard} onClick={onClick}>
      <div className={style.header}>
        <h2>“{title}“</h2>
        <p>{description}</p>
      </div>

      <div className={style.bottom}>
        <div className={style.tools}>
          <div className={style.tool}>
            <EditIcon />
          </div>
          <div className={style.tool}>
            <LinkIcon />
          </div>
        </div>
        <p>23.08.2024</p>
      </div>
    </div>
  );
};

export default TestCard;
