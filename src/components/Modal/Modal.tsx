import { FC, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.scss";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const popupRoot = document.querySelector("#popup-root");

export const Modal: FC<IModal> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen && popupRoot
    ? createPortal(
        <div className={css.overlay} onClick={handleOverlayClick}>
          <div>{children}</div>
        </div>,
        popupRoot
      )
    : null;
};
