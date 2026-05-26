import { useState } from "react";
import ExtraExpenseList from "../ExtraExpenseList/ExtraExpenseList";
import penIcon from "../../assets/penIcon.svg";
import { initialAdditionalBills } from "../../utils/Constants";
import "./SectionCards.css";

function ExpenseAfterBillsCard({
  budget,
  extraExpenses,
  onUpdateExpensePrice,
  onDeleteExpense,
  onAddExpenseToBudget,
  onToggleExpensePaid,
  totalAdditionalBills,
  formatMoney,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleAdditionalBillsCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="additional__spending page__section">
      <h2 className="card__title">Additional Spending</h2>
      <div className="additionalBills__card">
        <div
          className="additionalBills__card-header"
          onClick={handleToggleAdditionalBillsCard}
          id="toggleBillsCard"
        >
          <div className="additionalBills__card-header_text">
            <button
              type="button"
              className="additionalBills__card-title"
              id="edit-bills-name"
              data-no-toggle="true"
              aria-label="Open"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="additionalBills__name">Extra Spending</h3>
              <img src={penIcon} alt="Pen icon" />
            </button>
            <p className="additionalBills__card-subtitle">
              Tap to expand / collapse
            </p>
          </div>
          <button
            type="button"
            className="additionalBills__delete-btn"
            aria-label="Delete"
            data-no-toggle="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="additionalBills__delete-icon"></div>
          </button>
          <button
            className={`additionalBills__card-chev ${isOpen ? "additionalBills__card-chev--open" : ""}`}
          >
            ⌄
          </button>
        </div>
        {isOpen && (
          <div className="additionalBills__card-body" id="bills-body">
            <div className="expense__after-bills">
              <ExtraExpenseList
                extraExpenses={extraExpenses}
                listName="additionalBills"
                budgetId={budget._id}
                onAddExpenseToBudget={onAddExpenseToBudget}
                onDeleteExpense={onDeleteExpense}
                onUpdateExpensePrice={onUpdateExpensePrice}
                formatMoney={formatMoney}
                totalAdditionalBills={totalAdditionalBills}
                onToggleExpensePaid={onToggleExpensePaid}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExpenseAfterBillsCard;
