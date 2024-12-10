import { type FC, useCallback, useEffect, useRef } from "react";
import type { ModalType } from "../../types/modal.type.ts";

const Modal: FC<ModalType> = ({ visible, onClose, children }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    if (visible) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [visible]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    modal.addEventListener("close", handleClose);

    return () => {
      modal.removeEventListener("close", handleClose);
    };
  }, [handleClose]);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    queueMicrotask(() => {
      const focusElement = modal.querySelector<HTMLElement>(
        "[data-autofocus=true]",
      );
      focusElement?.focus();
    });
  }, [visible]);

  return (
    <dialog ref={modalRef} className="modal" aria-modal="true" role="dialog">
      <div className="modal-box">
        <form method="dialog">
          <button
            type="submit"
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
};

export default Modal;
