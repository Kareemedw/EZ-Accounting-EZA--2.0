import { initialBills } from "../../utils/Constants";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MandatoryBillsLists.css";

function UtilityList() {
  return (
    <ul className="card__list">
      <h3 className="card__title">Utility Bills</h3>
      <div className="card__add">
        <form className="card__form" data-role="utility-bill">
          <fieldset className="form__fieldset">
            <input
              data-role="bills_input-add"
              type="text"
              className="card__input card__input_utility_bill"
              placeholder="Expense Name"
              required
            />
            <input
              data-role="bills_input_add"
              type="number"
              className="card__input card__input_utility_bill"
              placeholder="Expense Price"
              required
            />
            <button
              type="button"
              className="add__btn"
              data-role="addBtn1"
              aria-label="Add"
            >
              Add
            </button>
          </fieldset>
        </form>
      </div>
      {initialBills.map((bill) => (
        <li className="utilityBills" key={bill.name} data-role="utilityBills">
          <form className="card__form_utitlity_bill" data-role="utility-bill">
            <label
              htmlFor="bills-input"
              className="card__label card__label_utility_bill utilityBill"
              data-role="utility-bill1"
            >
              {bill.name}
            </label>
            <input
              data-role="bills-input"
              type="number symbol"
              className="card__input card__input_utility_bill bills-input"
              placeholder="Your expenses"
              defaultValue={bill.price}
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

export default UtilityList;
