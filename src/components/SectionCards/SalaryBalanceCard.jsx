import "./SectionCards.css";

function SalaryBalanceCard() {
  return (
    <div className="salary__balance-card">
      <section className="salaryBalance page__section">
        <h2 className="card__title">Salary Balance</h2>
        <div className="card">
          <form className="card__form" data-role="salary-balance">
            <label htmlFor="salary-input-2" className="card__label">
              Salary
              <input
                data-role="salary-input-2"
                type="number symbol"
                className="card__input"
                placeholder="Salary"
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
                data-role="total-expense-input"
                type="number symbol"
                className="card__input"
                placeholder="Total Expenditure"
              />
            </label>
            <button
              className="operant__btn"
              type="button"
              //onclick="changeValue(-1)"
            >
              =
            </button>
            <label className="card__label" htmlFor="balance_input">
              Balance
              <input
                data-role="balance_input"
                type="number symbol"
                className="card__input"
                placeholder="Balance"
              />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SalaryBalanceCard;
