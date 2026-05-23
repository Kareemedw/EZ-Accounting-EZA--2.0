import "./SectionCards.css";

function SalaryBalanceCard({
  salary,
  formatMoney,
  totalExpenses,
  salaryBalance,
}) {
  return (
    <div className="salary__balance-card">
      <section className="salaryBalance page__section">
        <h2 className="card__title">Salary Balance</h2>
        <div className="card">
          <form className="card__form" id="salary-balance">
            <label htmlFor="salary-input-2" className="card__label">
              Salary
              <input
                id="salary-input-2"
                type="number symbol"
                className="card__input"
                placeholder="Salary"
                value={salary}
                readOnly
              />
            </label>
            <button
              className="operant__btn"
              type="button"
              //onclick="changeValue(-1)"
            >
              -
            </button>
            <label className="card__label" htmlFor="total-expense-input">
              Total Expenditure
              <input
                id="total-expense-input"
                type="number symbol"
                className="card__input"
                placeholder="Total Expenditure"
                value={formatMoney(totalExpenses)}
                readOnly
              />
            </label>
            <button className="operant__btn" type="button">
              =
            </button>
            <label className="card__label" htmlFor="balance_input">
              Balance
              <input
                id="balance_input"
                type="number symbol"
                className="card__input"
                placeholder="Balance"
                value={formatMoney(salaryBalance)}
                readOnly
              />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SalaryBalanceCard;
