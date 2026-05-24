import { initialBills } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MandatoryBillsLists.css";
import { useState } from "react";

function UtilityList({
  budgetId,
  expenses,
  listName,
  onAddExpenseToBudget,
  onDeleteExpense,
  onUpdateExpensePrice,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpenseToBudget(budgetId, listName, {
      name,
      price,
    });

    setName("");
    setPrice("");
  };

  return (
    <ul className="card__list">
      <h3 className="card__title">Utility Bills</h3>
      <div className="card__add">
        <form
          className="card__form"
          data-role="utility-bill"
          onSubmit={handleSubmit}
        >
          <fieldset className="form__fieldset">
            <input
              data-role="bills_input-add"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Expense Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              data-role="bills_input_add"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              type="submit"
              className="add__btn"
              data-role="addBtn1"
              aria-label="Add"
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>
      <ul className="utility__list">
        {expenses.map((bill) => (
          <li
            className="utilityBills"
            key={bill._id || bill.id}
            data-role="utilityBills"
          >
            <form
              className="card__form_utitlity_bill"
              onSubmit={handleSubmit}
              data-role="utility-bill"
            >
              <label
                htmlFor="bills-input"
                className="card__label card__label_utility_bill utilityBill"
                data-role="utility-bill1"
              >
                {bill.name}
              </label>
              <input
                type="number"
                value={bill.price ?? ""}
                onChange={(e) =>
                  onUpdateExpensePrice(
                    budgetId,
                    listName,
                    bill._id || bill.id,
                    e.target.value,
                  )
                }
                className="card__input card__input_utility_bill bills-input"
                placeholder="Your expenses"
              />
              <button
                type="button"
                className="bill__delete-btn"
                aria-label="Delete"
                onClick={() =>
                  onDeleteExpense(budgetId, listName, bill._id || bill.id)
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
    </ul>
  );
}

export default UtilityList;
