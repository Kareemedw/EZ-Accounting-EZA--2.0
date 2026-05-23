import { initialRecurringBill } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MandatoryBillsLists.css";
import { useState } from "react";

function SubscriptionList({
  budgetId,
  expenses,
  listName,
  onAddExpenseToBudget,
  onDeleteExpense,
  onUpdateExpensePrice,
}) {
  //const [recurringBills, setRecurringBills] = useState(initialRecurringBill);

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
    <ul className="card__lists">
      <h3 className="">Recurring Subscription</h3>
      <div className="card__add">
        <form className="card__form" onSubmit={handleSubmit} id="utility-bill">
          <fieldset className="form__fieldset">
            <input
              id="bills_input_add1"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Expense Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              id="bills_input_add2"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <button
              type="button"
              className="add__btn"
              id="addBtn2"
              aria-label="Add"
              onClick={handleSubmit}
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>
      <ul className="recurring__list">
        {expenses.map((recurring) => (
          <li className="recurringBills" key={recurring.name}>
            <form className="card__form_utitlity_bill" id="utility-bill">
              <label
                htmlFor="subscription_input"
                className="card__label card__label_utility_bill subscription-input recurringBill"
                id="recurringBill"
              >
                {recurring.name}
              </label>
              <input
                id="subscription_input"
                type="number symbol"
                className="card__input card__input_utility_bill subscription-input"
                placeholder="Your recurring expenses"
                defaultValue={recurring.price}
                onChange={(e) =>
                  onUpdateExpensePrice(listName, recurring.id, e.target.value)
                }
              />
              <button
                type="button"
                className="bill__delete-btn"
                aria-label="Delete"
                onClick={() => onDeleteExpense(listName, recurring.id)}
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

export default SubscriptionList;
