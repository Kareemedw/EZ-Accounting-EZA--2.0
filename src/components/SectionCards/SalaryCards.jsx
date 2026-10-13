import "./SectionCards.css";
import penIcon from "../../assets/penIcon.svg";

function SalaryCard({
  salary,
  budget,
  currentBalance,
  currentBalanceAfterPaid,
  onDateChange,
  onSalaryChange,
  onCurrentBalanceChange,
  budgetId,
  finalBalance,
  formatMoney,
}) {
  return (
    <div className="salary__card">
      <section className="salary page__section">
        <h2 className="card__title">Salary</h2>
        <div className="card">
          <form className="card__form card__form_date" id="card-form-date">
            <label
              htmlFor="date-input-1"
              className="card__label card__label_date"
            >
              Pay Period Start
              <input
                id="date-input-1"
                type="date"
                className="card__input card__input_date"
                placeholder="Month & Year"
                value={budget.startDate?.slice(0, 10) || ""}
                onChange={(e) =>
                  onDateChange(budgetId, "startDate", e.target.value)
                }
              />
            </label>
            <label
              htmlFor="date-input-2"
              className="card__label card__label_date"
            >
              Pay Period End
              <input
                id="date-input-2"
                type="date"
                className="card__input card__input_date"
                placeholder="Month & Year"
                value={budget.endDate?.slice(0, 10) || ""}
                onChange={(e) =>
                  onDateChange(budgetId, "endDate", e.target.value)
                }
              />
            </label>
          </form>
          <form className="card__form card__form_salary" id="card-form-salary">
            <label
              htmlFor="salary-input-1"
              className="card__label card__label_salary"
            >
              <button
                type="button"
                className="budget__card-title budget__card-title_type"
                id="edit-budget-type"
                aria-label="Open"
                data-no-toggle="true"
              >
                <h3 className="budget__type">Salary</h3>
                <img src={penIcon} alt="Pen icon" />
              </button>
              <input
                id="salary-input-1"
                type="number"
                className="card__input"
                placeholder="Your salary"
                value={salary ?? ""}
                onChange={(e) => onSalaryChange(budgetId, e.target.value)}
              />
            </label>
          </form>
          <div className="balance__list">
            <form
              className="card__form card__previous-balance"
              id="balance-tracking"
            >
              <label
                htmlFor="previous__balance-input"
                className="card__label-balance"
              >
                Starting Bank Balance
                <input
                  id="previous__balance-inputs"
                  type="number"
                  step="0.01"
                  className="card__input card__balance-input"
                  placeholder="Previous Bank Balance"
                  value={currentBalance ?? ""}
                  onChange={(e) =>
                    onCurrentBalanceChange(budgetId, e.target.value)
                  }
                />
              </label>
            </form>
            <form
              className="card__form card__current-balance"
              id="balance-tracking"
            >
              <label
                htmlFor="current__balance-input"
                className="card__label-balance"
              >
                Projected Actual Balance
                <input
                  id="current__balance-inputs"
                  type="text"
                  className="card__input card__balance-input"
                  placeholder="Current Bank Balance"
                  value={formatMoney(currentBalanceAfterPaid)}
                  readOnly
                />
              </label>
            </form>
            <form
              className="card__form card__balance_tracking"
              id="balance-tracking"
            >
              <label htmlFor="tracking-input" className="card__label-balance">
                Balance left from this months salary
                <input
                  id="tracking-inputs"
                  type="text"
                  className="card__input card__balance-input"
                  placeholder="Salary balance tracking"
                  value={formatMoney(finalBalance)}
                  readOnly
                />
              </label>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SalaryCard;
