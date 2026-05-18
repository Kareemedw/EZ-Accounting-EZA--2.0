import "./SectionCards.css";

function ExpenseCard() {
  return (
    <div className="expense__card">
      <section className="expense page__section">
        <h2 className="card__title">Mandatory Bills</h2>
        <section className="bills__card">
          <div
            className="bills__card-header"
            type="button"
            data-role="toggleBillsCard"
          >
            <div className="budget__card-header_text">
              <button
                type="button"
                className="bills__card-title"
                data-role="edit-bills-name"
                data-no-toggle="true"
                aria-label="Open"
              >
                <h3 className="bills__name">Bills</h3>
                <img src="./images/pen-icon.svg" alt="Pen icon" />
              </button>
              <p className="bills__card-subtitle">Tap to expand / collapse</p>
            </div>
            <button
              type="button"
              className="bills__delete-btn"
              aria-label="Delete"
              data-no-toggle="true"
            >
              <div className="bills__delete-icon"></div>
            </button>
            <button className="bills__card-chev">⌄</button>
          </div>
          <div className="bills__card-body" data-role="bills-body">
            <div className="card card__utility_bill">
              <ul className="card__list">
                <h3 className="">Utility Bills</h3>

                <li className="utilityBills" data-role="utilityBills">
                  <form
                    className="card__form_utitlity_bill"
                    data-role="utility-bill"
                  >
                    <label
                      htmlFor="bills-input"
                      className="card__label card__label_utility_bill utilityBill"
                      data-role="utility-bill1"
                    ></label>
                    <input
                      data-role="bills-input"
                      type="number symbol"
                      className="card__input card__input_utility_bill bills-input"
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
              </ul>
              <ul className="card__lists">
                <h3 className="">Recurring Subscription</h3>
                <li className="recurringBills">
                  <form
                    className="card__form_utitlity_bill"
                    data-role="utility-bill"
                  >
                    <label
                      htmlFor="subscription_input"
                      className="card__label card__label_utility_bill subscription-input recurringBill"
                      data-role="recurringBill"
                    ></label>
                    <input
                      data-role="subscription_input"
                      type="number symbol"
                      className="card__input card__input_utility_bill subscription-input"
                      placeholder="Your recurring expenses"
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
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ExpenseCard;
