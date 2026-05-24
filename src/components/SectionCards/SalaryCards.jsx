import "./SectionCards.css";
import penIcon from "../../assets/penIcon.svg";

function SalaryCard({
  salary,
  date,
  onDateChange,
  onSalaryChange,
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
              Date
              <input
                id="date-input-1"
                type="date"
                className="card__input"
                placeholder="Month & Year"
                value={date || ""}
                onChange={(e) => onDateChange(budgetId, e.target.value)}
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
          <form
            className="card__form card__balance_tracking"
            id="balance-tracking"
          >
            <label
              htmlFor="tracking-input"
              className="card__label card__label_tracking"
            >
              Actual Balance
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
      </section>
    </div>
  );
}

export default SalaryCard;
