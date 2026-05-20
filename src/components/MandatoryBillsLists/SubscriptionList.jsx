import { initialRecurringBill } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MandatoryBillsLists.css";

function SubscriptionList() {
  return (
    <ul className="card__lists">
      <h3 className="">Recurring Subscription</h3>
      <div className="card__add">
        <form className="card__form" data-role="utility-bill">
          <fieldset className="form__fieldset">
            <input
              data-role="bills_input_add1"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Expense Name"
              required
            />
            <input
              data-role="bills_input_add2"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              required
            />
            <button
              type="button"
              className="add__btn"
              data-role="addBtn2"
              aria-label="Add"
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>
      {initialRecurringBill.map((recurring) => (
        <li className="recurringBills" key={recurring.name}>
          <form className="card__form_utitlity_bill" data-role="utility-bill">
            <label
              htmlFor="subscription_input"
              className="card__label card__label_utility_bill subscription-input recurringBill"
              data-role="recurringBill"
            >
              {recurring.name}
            </label>
            <input
              data-role="subscription_input"
              type="number symbol"
              className="card__input card__input_utility_bill subscription-input"
              placeholder="Your recurring expenses"
              defaultValue={recurring.price}
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
  );
}

export default SubscriptionList;
