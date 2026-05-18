import "./SectionCards.css";

function SalaryCard() {
  return (
    <div className="salary__card">
      <section className="salary page__section">
        <h2 className="card__title">Salary</h2>
        <div className="card">
          <form
            className="card__form card__form_date"
            data-role="card-form-date"
          >
            <label
              htmlFor="date-input-1"
              className="card__label card__label_date"
            >
              Date
              <input
                data-role="date-input-1"
                type="date"
                className="card__input"
                placeholder="Month & Year"
              />
            </label>
          </form>
          <form
            className="card__form card__form_salary"
            data-role="card-form-salary"
          >
            <label
              htmlFor="salary-input-1"
              className="card__label card__label_salary"
            >
              <button
                type="button"
                className="budget__card-title budget__card-title_type"
                data-role="edit-budget-type"
                aria-label="Open"
                data-no-toggle="true"
              >
                <h3 className="budget__type">Salary</h3>
                <img src="./images/pen-icon.svg" alt="Pen icon" />
              </button>
              <input
                data-role="salary-input-1"
                type="number symbol"
                className="card__input"
                placeholder="Your salary"
              />
            </label>
          </form>
          <form
            className="card__form card__balance_tracking"
            data-role="balance-tracking"
          >
            <label
              htmlFor="tracking-input"
              className="card__label card__label_tracking"
            >
              Actual Balance
              <input
                data-role="tracking-inputs"
                type="number symbol"
                className="card__input card__balance-input"
                placeholder="Salary balance tracking"
              />
            </label>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SalaryCard;
