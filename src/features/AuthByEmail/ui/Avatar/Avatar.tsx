import AvatarImage from "@/shared/assets/Avatar.png";
import style from "./Avatar.module.scss";
import Dropdown from "@/shared/ui/Dropdown";
import { AVATAR_LI_ARRAY } from "@/shared/constants/DropdownLiArray";
const Avatar = () => {
  return (
    <Dropdown liArray={AVATAR_LI_ARRAY} position="right">
      <div className={style.Avatar}>
        <img src={AvatarImage} alt="" className={style.AvatarImage} />
      </div>
    </Dropdown>
  );
};

export default Avatar;
