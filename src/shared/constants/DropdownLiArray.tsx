import { ReactNode } from "react";
import EditIcon from "@/shared/assets/Edit.svg";
import ListIcon from "@/shared/assets/list.svg";
import SmileIcon from "@/shared/assets/smile.svg";
import SettingIcon from "@/shared/assets/smallSetting.svg";
import MessageIcon from "@/shared/assets/message.svg";

export interface DropdownItem {
  link: string;
  icon: ReactNode;
  text: string;
}
export const TESTCARD_LI_ARRAY: DropdownItem[] = [
  {
    link: "/edittest",
    icon: <EditIcon />,
    text: "Редактировать",
  },
  {
    link: "/statistics",
    icon: <ListIcon />,
    text: "Статистика",
  },
];

export const AVATAR_LI_ARRAY: DropdownItem[] = [
  {
    link: "/profile",
    icon: <SmileIcon />,
    text: "Профиль",
  },
  {
    link: "/settings",
    icon: <SettingIcon />,
    text: "Настройки",
  },
  {
    link: "/support",
    icon: <MessageIcon />,
    text: "Поддержка",
  },
];
