import { useState } from "react";
import ExpenseCard from "../SectionCards/ExpenseCard";
import ExpenseAfterBillsCard from "../SectionCards/ExpenseAfterBillsCard";
import SalaryBalanceCard from "../SectionCards/SalaryBalanceCard";
import SalaryCard from "../SectionCards/SalaryCards";
import TotalExpenseCard from "../SectionCards/TotalExpenseCard";
import penIcon from "../../assets/penIcon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MainCards.css";

function MainCards() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBudgetCard = () => {
    //setIsOpen(!isOpen);
    setIsOpen((prev) => !prev);
  };

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
            data-role="toggleBudgetCard"
            onClick={handleToggleBudgetCard}
          >
            <div className="budget__card-header_text">
              <button
                type="button"
                className="budget__card-title"
                data-role="edit-budget-name"
                onClick={(e) => e.stopPropagation()}
                data-no-toggle="true"
                aria-label="Open"
              >
                <h3 className="budget__name">New Budget</h3>
                <img src={penIcon} alt="Pen icon" />
              </button>
              <p className="budget__card-subtitle">Tap to expand / collapse</p>
            </div>
            <button
              type="button"
              className="budget__delete-btn"
              aria-label="Delete"
              onClick={(e) => e.stopPropagation()}
              data-no-toggle="true"
            >
              <img src={deleteIcon} alt="Delete Icon" />
            </button>
            <button
              type="button"
              className={`budget__card-chev ${
                isOpen ? "budget__card-chev--open" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                handleToggleBudgetCard();
              }}
            >
              ⌄
            </button>
          </div>
          {isOpen && (
            <div className="budget__card-body" data-role="budget-body">
              <SalaryCard />
              <ExpenseCard />
              <ExpenseAfterBillsCard />
              <TotalExpenseCard />
              <SalaryBalanceCard />
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default MainCards;
