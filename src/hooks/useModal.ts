import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextType } from "../types/modal.type";

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
