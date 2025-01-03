import React from "react";
import s from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal: React.FC<{
  imageUrl: string;
  onClose: () => void;
  isOpen: boolean;
}> = ({ imageUrl, onClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.content}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={imageUrl} alt="Large view" className={s.img} />
    </Modal>
  );
};

export default ImageModal;
