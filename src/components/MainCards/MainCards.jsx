import { useState } from "react";
import ExpenseCard from "../SectionCards/ExpenseCard";
import ExpenseAfterBillsCard from "../SectionCards/ExpenseAfterBillsCard";
import SalaryBalanceCard from "../SectionCards/SalaryBalanceCard";
import SalaryCard from "../SectionCards/SalaryCards";
import penIcon from "../../assets/penIcon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import "./MainCards.css";
import {
  initialAdditionalBills,
  initialBills,
  initialRecurringBill,
} from "../../utils/Constants";

function MainCards({
  expenses,
  budget,
  budgetId,
  onAddExpenseToBudget,
  onDeleteBudgetCard,
  onDeleteExpense,
  onUpdateExpensePrice,
  onSalaryChange,
  totalUtilityBills,
  totalSubscriptions,
  totalExpenses,
  salaryBalance,
  totalAdditionalBills,
  finalBalance,
  formatMoney,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBudgetCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="content">
      <section className="budgets page__section" id="overall-budget-body">
        <h2>My Budgets</h2>

        <section className="budget__card" id="add-budget-form">
          <div
            className="budget__card-header"
            id="toggleBudgetCard"
            onClick={handleToggleBudgetCard}
          >
            <div className="budget__card-header_text">
              <button
                type="button"
                className="budget__card-title"
                id="edit-budget-name"
                onClick={(e) => e.stopPropagation()}
                data-no-toggle="true"
                aria-label="Open"
              >
                <h3 className="budget__name">{budget.name}</h3>
                <img src={penIcon} alt="Pen icon" />
              </button>
              <p className="budget__card-subtitle">Tap to expand / collapse</p>
            </div>
            <button
              type="button"
              className="budget__delete-btn"
              aria-label="Delete"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteBudgetCard(budget._id);
              }}
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
            <div className="budget__card-body" id="budget-body">
              <SalaryCard
                budgetId={budget._id}
                salary={budget.salary}
                onSalaryChange={onSalaryChange}
                finalBalance={finalBalance}
                formatMoney={formatMoney}
              />
              <ExpenseCard
                budget={budget}
                utilityBills={
                  budget.utilityBills?.length > 0
                    ? budget.utilityBills
                    : initialBills
                }
                recurringBills={
                  budget.recurringBills?.length > 0
                    ? budget.recurringBills
                    : initialRecurringBill
                }
                onAddExpenseToBudget={onAddExpenseToBudget}
                onDeleteExpense={onDeleteExpense}
                onUpdateExpensePrice={onUpdateExpensePrice}
                totalUtilityBills={totalUtilityBills}
                totalSubscriptions={totalSubscriptions}
                totalExpenses={totalExpenses}
                formatMoney={formatMoney}
              />
              <ExpenseAfterBillsCard
                budget={budget}
                extraExpenses={
                  budget.additionalBills?.length > 0
                    ? budget.additionalBills
                    : initialAdditionalBills
                }
                onUpdateExpensePrice={onUpdateExpensePrice}
                onAddExpenseToBudget={onAddExpenseToBudget}
                onDeleteExpense={onDeleteExpense}
                totalAdditionalBills={totalAdditionalBills}
                formatMoney={formatMoney}
                finalBalance={finalBalance}
              />
              <SalaryBalanceCard
                salary={expenses?.salary}
                totalExpenses={totalExpenses}
                salaryBalance={salaryBalance}
                onSalaryChange={onSalaryChange}
                formatMoney={formatMoney}
              />
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default MainCards;
