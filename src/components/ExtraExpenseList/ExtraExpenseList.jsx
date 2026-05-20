import { initialAdditionalBills } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./ExtraExpenseList.css";

function ExtraExpenseList() {
  return (
    <div className="card card__balance_bill">
      <h2 className="card__title card__title_balance">Expense Tracking</h2>
      <div className="tracking__balance">
        <form className="card__form" data-role="tracking-balance">
          <fieldset className="form__fieldset">
            <input
              data-role="tracking_balance-add"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Your expenses"
              required
            />
            <input
              data-role="tracking_balance_add"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              required
            />
            <button
              type="button"
              className="add__btn"
              data-role="addBtn3"
              aria-label="Add"
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>

      <ul className="card__list1">
        <h3 className="card__title_additional">Expense after bills</h3>
        {initialAdditionalBills.map((extraBills) => (
          <li className="balanceBill" key={extraBills.name}>
            <form
              className="card__form_utitlity_bill card__form_additional_expense"
              data-role="utility-bill"
            >
              <label
                htmlFor="balance-input"
                className="card__label card__label_utility_bill balanceBills"
              >
                {extraBills.name}
              </label>
              <input
                data-role="balance-input1"
                type="number symbol"
                className="card__input card__input_utility_bill balance__input balance-input1"
                placeholder="Your expenses"
                defaultValue={extraBills.price}
              />
              <button
                type="button"
                className="bill__delete-btn"
                aria-label="Delete"
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
        data-role="balance-tracking"
      >
        <label
          htmlFor="tracking-input"
          className="card__label card__label_tracking-total"
        >
          Additional Expenses
          <input
            data-role="tracking-input"
            type="number symbol"
            className="card__input card__balance-input"
            placeholder="Other Expense Totoal"
          />
        </label>
      </form>
    </div>
  );
}
export default ExtraExpenseList;
