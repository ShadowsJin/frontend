import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

import style from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  isOpened: boolean;
  children: ReactNode;
  onClose?: () => void;
}
const Modal = ({ isOpened, children, onClose }: ModalProps) => {
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return createPortal(
    isOpened && (
      <AnimatePresence>
        <motion.div className={classNames(style.modal, style.opened)}>
          <motion.div className={style.overlay} onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, transform: " scale(0.5)" }}
              animate={{ opacity: 1, transform: " scale(1)" }}
              exit={{ opacity: 0, transform: " scale(0.5)" }}
              className={style.content}
              onClick={onContentClick}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    ),
    document.body
  );
};

export default Modal;
