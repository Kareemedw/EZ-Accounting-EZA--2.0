import ModalWithForm from "../ModalWithForm/ModalWithForm";

function ExtraBillModal({ isOpen, onClose, onSubmit }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Name of bill"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <input type="text" name="name" placeholder="Extra Bill name" required />
    </ModalWithForm>
  );
}

export default ExtraBillModal;
