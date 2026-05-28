import ModalWithForm from "../ModalWithForm/ModalWithForm";

function BillModal({ isOpen, onClose, onSubmit }) {
  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Bill name"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <input type="text" name="name" placeholder="Bill name" required />
    </ModalWithForm>
  );
}

export default BillModal;
