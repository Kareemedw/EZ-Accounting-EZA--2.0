import "./SectionCards.css";

function TotalExpenseCard({
  formatMoney,
  totalUtilityBills,
  totalSubscriptions,
  totalExpenses,
}) {
  return (
    <div className="total__expense-card">
      <section className="expenseTotal page__section">
        <h3 className="totalExpense__title">Total Expenditure</h3>
        <div className="card">
          <form className="card__form" id="total-expense">
            <label htmlFor="total-utility-bill" className="card__label">
              Mandatory Expenses
              <input
                id="total-utility-bill"
                type="number symbol"
                className="card__input"
                placeholder="Total expense"
                value={formatMoney(totalUtilityBills)}
                readOnly
              />
            </label>
            <button className="operant__btn" type="button">
              +
            </button>
            <label htmlFor="total-subscription" className="card__label">
              Recurring Subscription
              <input
                id="total-subscription"
                type="number symbol"
                className="card__input"
                placeholder="Total expense"
                value={formatMoney(totalSubscriptions)}
                readOnly
              />
            </label>
            <button className="operant__btn" type="button">
              =
            </button>
            <label className="card__label" htmlFor="total_input-1">
              Total Expenditure
              <input
                id="total_input-1"
                type="number symbol"
                className="card__input total_input-1"
                placeholder="Total expense"
                value={formatMoney(totalExpenses)}
                readOnly
              />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}

export default TotalExpenseCard;
