import ExpenseCard from "../SectionCards/ExpenseCard";
import SalaryBalanceCard from "../SectionCards/SalaryBalanceCard";
import SalaryCard from "../SectionCards/SalaryCards";
import TotalExpenseCard from "../SectionCards/TotalExpenseCard";
import "../../assets/";
import "./MainCards.css";

function MainCards() {
  return (
    <div className="content">
      <section
        className="budgets page__section"
        data-role="overall-budget-body"
      >
        <h2>My Budgets</h2>

        <section className="budget__card" data-role="add-budget-form">
          <div
            className="budget__card-header"
            type="button"
            data-role="toggleBudgetCard"
          >
            <div className="budget__card-header_text">
              <button
                type="button"
                className="budget__card-title"
                data-role="edit-budget-name"
                data-no-toggle="true"
                aria-label="Open"
              >
                <h3 className="budget__name">New Budget</h3>
                <img src="./images/pen-icon.svg" alt="Pen icon" />
              </button>
              <p className="budget__card-subtitle">Tap to expand / collapse</p>
            </div>
            <button
              type="button"
              className="budget__delete-btn"
              aria-label="Delete"
              data-no-toggle="true"
            >
              <div className="budget__delete-icon"></div>
            </button>
            <button className="budget__card-chev">⌄</button>
          </div>
          <div className="budget__card-body" data-role="budget-body">
            <SalaryCard />
            <ExpenseCard />
            <TotalExpenseCard />
            <SalaryBalanceCard />
          </div>
        </section>
      </section>
    </div>
  );
}

export default MainCards;
