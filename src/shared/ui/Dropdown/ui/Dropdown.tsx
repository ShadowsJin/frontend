import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import style from "./Dropdown.module.scss";
import { DropdownItem } from "@/shared/constants/DropdownLiArray";
import classNames from "classnames";
import { isMobile } from "react-device-detect";

interface Dropdown {
  children: ReactNode;
  liArray: DropdownItem[];
  id?: string;
  position?: "left" | "right" | "top" | "bottom";
}

const Dropdown = ({ children, liArray, id, position }: Dropdown) => {
  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "flex",
    },
    exit: {
      y: position === "top" ? 5 : -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  return (
    <motion.div
      className={style.dropdown}
      onHoverStart={() => setShown(true)}
      onHoverEnd={() => setShown(false)}
      onClick={() => setShown(!shown)}
    >
      <div>{children}</div>
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className={classNames(style.content, {
          [style.left]: position === "left",
          [style.right]: position === "right",
          [style.top]: position === "top",
        })}
      >
        {liArray.map((item) => (
          <Link key={item.link} to={`${item.link}${id ? `/${id}` : ""}`}>
            <motion.li
              whileHover={{
                x: 2,
              }}
              className={style.li}
            >
              {item.icon}
              {item.text}
            </motion.li>
          </Link>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Dropdown;
