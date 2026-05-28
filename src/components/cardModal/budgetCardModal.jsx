import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function BudgetModal({ isOpen, onClose, onSubmit, currentName }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(currentName || "");
    }
  }, [isOpen, currentName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  if (!isOpen) return null;

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Budget name"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        type="text"
        name="name"
        placeholder="Budget name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </ModalWithForm>
  );
}

export default BudgetModal;
