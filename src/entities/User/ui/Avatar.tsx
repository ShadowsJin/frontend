import AvatarImage from "@/shared/assets/Avatar.png";
import { Link } from "react-router-dom";
import style from "./Avatar.module.scss";
const Avatar = () => {
  return (
    <Link to="/profile" className={style.Avatar}>
      <img src={AvatarImage} alt="" className={style.AvatarImage} />
    </Link>
  );
};

export default Avatar;
