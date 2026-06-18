import { useState } from "react";
import deleteIcon from "../../assets/delete-icon.svg";
import "../SectionCards/SectionCards.css";

function CarPaymentSection({
  budgetId,
  carPaymentBudget,
  carPaymentItems,
  totalCarPaymentSpent,
  onCarPaymentBudgetChange,
  onAddCarPaymentItem,
  onDeleteCarPaymentItem,
  formatMoney,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddCarPaymentItem(budgetId, {
      name,
      price,
    });

    setName("");
    setPrice("");
  };

  return (
    <section className="card car__payment">
      <form className="card__form car__payment-form">
        <label className="card__label card__label_utility_bill">
          Monthly Car Payment Budget
          <input
            type="number"
            step="0.01"
            className="card__input card__input_utility_bill"
            placeholder="Budget amount"
            value={carPaymentBudget ?? ""}
            onChange={(e) => onCarPaymentBudgetChange(budgetId, e.target.value)}
          />
        </label>

        <label className="card__label card__label_utility_bill">
          Car Payment Spent This Month
          <input
            type="text"
            className="card__input  card__input_utility_bill"
            value={formatMoney(totalCarPaymentSpent)}
            readOnly
          />
        </label>
      </form>

      <form
        className="card__form card__form_utitlity_bill_grocery"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="card__input"
          placeholder="Car Payment item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          step="0.01"
          className="card__input card__input_utility_bill"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit" className="add__btn">
          Add Car Payment
        </button>
      </form>

      <ul className="utility__list">
        {carPaymentItems.map((item) => (
          <li className="utilityBills" key={item._id || item.id}>
            <form className="card__form_utitlity_bill">
              <label className="card__label card__label_utility_bill">
                {item.name}
              </label>

              <input
                type="text"
                className="card__input card__input_utility_bill"
                value={formatMoney(item.price)}
                readOnly
              />

              <button
                type="button"
                className="bill__delete-btn"
                onClick={() =>
                  onDeleteCarPaymentItem(budgetId, item._id || item.id)
                }
              >
                <img
                  src={deleteIcon}
                  alt="Delete Icon"
                  className="bill__delete-icon"
                />
              </button>
            </form>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CarPaymentSection;
