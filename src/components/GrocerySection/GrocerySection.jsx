import { useState } from "react";
import deleteIcon from "../../assets/delete-icon.svg";
import "../SectionCards/SectionCards.css";

function GrocerySection({
  budgetId,
  groceryBudget,
  groceryItems,
  totalGrocerySpent,
  onGroceryBudgetChange,
  onAddGroceryItem,
  onDeleteGroceryItem,
  formatMoney,
}) {
  const [visit, setVisit] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddGroceryItem(budgetId, {
      name: `Grocery Visit ${visit}`,
      price,
    });

    setVisit("");
    setPrice("");
  };

  return (
    <section className="card grocery__card">
      <form className="card__form gorcery__form">
        <label className="card__label  card__label_utility_bill">
          Monthly Grocery Budget
          <input
            type="number"
            step="0.01"
            className="card__input card__input_utility_bill"
            placeholder="Budget amount"
            value={groceryBudget ?? ""}
            onChange={(e) => onGroceryBudgetChange(budgetId, e.target.value)}
          />
        </label>

        <label className="card__label  card__label_utility_bill">
          Grocery Spent This Month
          <input
            type="text"
            className="card__input card__input_utility_bill"
            value={formatMoney(totalGrocerySpent)}
            readOnly
          />
        </label>
      </form>

      <form
        className="card__form card__form_utitlity_bill_grocery"
        onSubmit={handleSubmit}
      >
        <input
          type="number"
          className="card__input card__input_utility_bill"
          placeholder="Grocery visit number"
          value={visit}
          onChange={(e) => setVisit(e.target.value)}
          required
        />

        <input
          type="number"
          step="0.01"
          className="card__input card__input_utility_bill"
          placeholder="Amount spent"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit" className="add__btn">
          Add Grocery Visit
        </button>
      </form>

      <ul className="utility__list">
        {groceryItems.map((item) => (
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
                  onDeleteGroceryItem(budgetId, item._id || item.id)
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

export default GrocerySection;
