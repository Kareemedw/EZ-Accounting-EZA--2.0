import { useState } from "react";
import { initialAdditionalBills } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./ExtraExpenseList.css";

function ExtraExpenseList({
  budgetId,
  extraExpenses,
  listName,
  onAddExpenseToBudget,
  onDeleteExpense,
  onUpdateExpensePrice,
  totalAdditionalBills,
  formatMoney,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddExpense(budgetId, listName, {
      name,
      price,
    });

    setName("");
    setPrice("");
  };

  return (
    <div className="card card__balance_bill">
      <h2 className="card__title card__title_balance">Expense Tracking</h2>
      <div className="tracking__balance">
        <form
          className="card__form"
          onSubmit={handleSubmit}
          id="tracking-balance"
        >
          <fieldset className="form__fieldset">
            <input
              id="tracking_balance-add"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Your expenses"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              id="tracking_balance_add"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <button
              type="submit"
              className="add__btn"
              id="addBtn3"
              aria-label="Add"
              onClick={handleSubmit}
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>

      <ul className="card__list1">
        <h3 className="card__title_additional">Expense after bills</h3>
        <ul className="additionalExpense__list">
          {extraExpenses.map((extraBill) => (
            <li className="balanceBill" key={extraBill.name}>
              <form
                className="card__form_utitlity_bill  card__form_additional_expense"
                id="utility-bill"
              >
                <label
                  htmlFor="balance-input"
                  className="card__label card__label_utility_bill balanceBills"
                >
                  {extraBill.name}
                </label>
                <input
                  id="balance-input1"
                  type="number"
                  className="card__input card__input_utility_bill balance__input balance-input1"
                  placeholder="Your expenses"
                  defaultValue={extraBill.price}
                  onChange={(e) =>
                    onUpdateExpensePrice(listName, extraBill.id, e.target.value)
                  }
                />
                <button
                  type="button"
                  className="bill__delete-btn"
                  aria-label="Delete"
                  onClick={() => onDeleteExpense(listName, extraBill.id)}
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
        <form
          className="card__form card__balance_tracking"
          id="balance-tracking"
        >
          <label
            htmlFor="tracking-input"
            className="card__label card__label_tracking-total"
          >
            Additional Expenses
            <input
              id="tracking-input"
              type="text"
              className="card__input card__balance-input"
              placeholder="Other Expense Total"
              value={formatMoney(totalAdditionalBills)}
              readOnly
            />
          </label>
        </form>
      </ul>
    </div>
  );
}
export default ExtraExpenseList;
