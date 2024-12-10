import { useModal } from "../contexts/ModalContext";
import { useToast } from "../contexts/ToastContext";

const Home = () => {
  const { openModal, closeModal } = useModal();
  const { createToast } = useToast();
  const handleOpenModal = () => {
    openModal(
      <div>
        <h2>Modal Content</h2>
        <p>This is a dynamic modal content</p>
        <button
          className="btn btn-outline btn-primary mt-2"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>,
    );
  };

  const handleOpenToast = () => {
    createToast("warn", "Title", "This is a toast message");
  };

  return (
    <>
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="mt-4">
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={handleOpenModal}
        >
          Open modal
        </button>

        <button className="btn btn-primary btn-sm" onClick={handleOpenToast}>
          Display toast
        </button>
      </div>
    </>
  );
};

export default Home;
