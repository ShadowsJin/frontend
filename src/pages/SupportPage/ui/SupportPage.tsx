import Header from "@/widgets/Header";
import style from "./SupportPage.module.scss";
import classNames from "classnames";
import SupportImg from "@/shared/assets/SupportImg.jpg";
const SupportPage = () => {
  return (
    <div className={classNames("section", style.SupportPage)}>
      <Header title="ПОДДЕРЖКА" />
      <img src={SupportImg} alt="" />
    </div>
  );
};

export default SupportPage;
