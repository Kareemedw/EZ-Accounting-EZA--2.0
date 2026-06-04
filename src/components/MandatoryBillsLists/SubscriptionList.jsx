import { initialRecurringBill } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MandatoryBillsLists.css";
import { useState } from "react";

function SubscriptionList({
  budgetId,
  expenses,
  listName,
  onAddExpenseToBudget,
  onToggleExpensePaid,
  onDeleteExpense,
  onUpdateExpensePrice,
  totalCarPaymentSpent,
  formatMoney,
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
            />
            <input
              id="bills_input_add2"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              type="submit"
              className="add__btn"
              id="addBtn2"
              aria-label="Add"
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>
      <ul className="recurring__list">
        {expenses.map((recurring) => {
          const isCarPayment = recurring.name === "Car Payment";
          const isSpecialExpense = isCarPayment;
          const spentValue = isCarPayment ? totalCarPaymentSpent : 0;

          return (
            <li className="recurringBills" key={recurring._id || recurring.id}>
              <form className="card__form_utitlity_bill" id="utility-bill">
                <input
                  type="checkbox"
                  className="checkbox__input"
                  checked={recurring.paid || false}
                  onChange={() =>
                    onToggleExpensePaid(
                      budgetId,
                      listName,
                      recurring._id || recurring.id,
                    )
                  }
                />
                <label
                  htmlFor="subscription_input"
                  className="card__label card__label_utility_bill subscription-input recurringBill"
                  id="recurringBill"
                >
                  {recurring.name}
                </label>
                {isSpecialExpense ? (
                  <div className="special__inputs">
                    <input
                      type="number"
                      step="0.01"
                      className="card__input special__budget-input"
                      placeholder={isCarPayment ? "Car Payment" : "Budget"}
                      value={recurring.price ?? ""}
                      onChange={(e) =>
                        onUpdateExpensePrice(
                          budgetId,
                          listName,
                          recurring._id || recurring.id,
                          e.target.value,
                        )
                      }
                    />

                    <input
                      type="text"
                      className="card__input  specail__spent-input"
                      placeholder={isCarPayment ? "Car Payment" : "Budget"}
                      value={formatMoney(spentValue)}
                      readOnly
                    />
                  </div>
                ) : (
                  <input
                    id="subscription_input"
                    type="number"
                    className="card__input card__input_utility_bill subscription-input"
                    value={recurring.price ?? ""}
                    onChange={(e) =>
                      onUpdateExpensePrice(
                        budgetId,
                        listName,
                        recurring._id || recurring.id,
                        e.target.value,
                      )
                    }
                  />
                )}
                <button
                  type="button"
                  className={`bill__delete-btn ${isCarPayment ? "carPayment__delete-btn" : ""}`}
                  aria-label="Delete"
                  onClick={() =>
                    onDeleteExpense(
                      budgetId,
                      listName,
                      recurring._id || recurring.id,
                    )
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
          );
        })}
      </ul>
    </ul>
  );
}

export default SubscriptionList;
