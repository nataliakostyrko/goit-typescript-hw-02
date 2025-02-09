import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

type Props = {
  CloseModal: () => void;
  isOpen: boolean;
  modalData: string | null;
};

const ImageModal = ({ CloseModal, isOpen, modalData }: Props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      padding: "0",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "90vw",
      maxHeight: "90vh",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={CloseModal}
      style={customStyles}
    >
      <button className={css.closeModalBtn} onClick={CloseModal}>
        <IoClose size={15} />
      </button>
       {modalData && <img src={modalData} alt="Modal content" />}
    </Modal>
  );
};

export default ImageModal;