import "./SectionCards.css";

function TotalExpenseCard() {
  return (
    <div className="total__expense-card">
      <section className="expenseTotal page__section">
        <h2 className="card__title">Total Expenditure</h2>
        <div className="card">
          <form className="card__form" data-role="total-expense">
            <label htmlFor="total-utility-bill" className="card__label">
              Mandatory Expenses
              <input
                data-role="total-utility-bill"
                type="number symbol"
                className="card__input"
                placeholder="Total expense"
              />
            </label>
            <button
              className="operant__btn"
              type="button"
              //onclick="changeValue(-1)"
            >
              +
            </button>
            <label htmlFor="total-subscription" className="card__label">
              Recurring Subscription
              <input
                data-role="total-subscription"
                type="number symbol"
                className="card__input"
                placeholder="Total expense"
              />
            </label>
            <button
              className="operant__btn"
              type="button"
              //onclick="changeValue(-1)"
            >
              =
            </button>
            <label className="card__label" htmlFor="total_input-1">
              Total Expenditure
              <input
                data-role="total_input-1"
                type="number symbol"
                className="card__input total_input-1"
                placeholder="Total expense"
              />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TotalExpenseCard;
