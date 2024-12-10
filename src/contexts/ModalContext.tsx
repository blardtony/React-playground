import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { ModalContextType } from "../types/modal.type";
import Modal from "../components/common/Modal";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = useCallback((content: ReactNode) => {
    setIsOpen(true);
    setModalContent(content);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      {children}
      <Modal visible={isOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
