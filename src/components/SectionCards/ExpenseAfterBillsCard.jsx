import "./SectionCards.css";

function ExpenseAfterBillsCard() {
  return (
    <div className="expense__after-bills">
      <section className="additional__spending page__section">
        <h2 className="card__title">Additional Spending</h2>
        <div className="card">
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
          <div className="card card__balance_bill">
            <ul className="card__list1">
              <h3 className="card__title_additional">Expense after bills</h3>
              <li className="balanceBill">
                <form
                  className="card__form_utitlity_bill card__form_additional_expense"
                  data-role="utility-bill"
                >
                  <label
                    htmlFor="balance-input"
                    className="card__label card__label_utility_bill balanceBills"
                  ></label>
                  <input
                    data-role="balance-input1"
                    type="number symbol"
                    className="card__input card__input_utility_bill balance__input balance-input1"
                    placeholder="Your expenses"
                  />
                  <button
                    type="button"
                    className="bill__delete-btn"
                    aria-label="Delete"
                  >
                    <div className="bill__delete-icon"></div>
                  </button>
                </form>
              </li>
            </ul>
          </div>
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
      </section>
    </div>
  );
}

export default ExpenseAfterBillsCard;
