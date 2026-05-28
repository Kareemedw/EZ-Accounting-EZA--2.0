import "./DeleteModal.css";
import closeBtn from "../../assets/closeButton.svg";

function DeleteModal({ isOpen, onClose, onConfirm }) {
  const handleDeleteClick = () => {
    if (typeof onDeleteItem === "function") {
      onDeleteCard(budget._id);
    }
  };

  return (
    <div className={`modal ${isOpen ? "modal_is_opened" : ""}`}>
      <div className="modalForm__container">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_whte-btn"
        >
          <img src={closeBtn} alt="X-Icon" className="modal__close-icon" />
        </button>
        <h2 className="modalForm__title modalForm__title-delete_caption">
          Are you sure you want to delete this image?
        </h2>
        <form className="modal__form modal__form-delete" id="delete-form">
          <button
            type="button"
            className="modal__submit_button modal__form-delete-button"
            onClick={onConfirm}
          >
            Delete
          </button>
          <button
            type="button"
            className="modal__submit_button modal__submit_button_cancel"
            aria-label="Cancel"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteModal;
