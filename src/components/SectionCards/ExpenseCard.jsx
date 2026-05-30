import { useState } from "react";
import SubscriptionList from "../MandatoryBillsLists/SubscriptionList";
import UtilityList from "../MandatoryBillsLists/UtilityList";
import { initialBills, initialRecurringBill } from "../../utils/Constants";
import "./SectionCards.css";
import penIcon from "../../assets/penIcon.svg";
import TotalExpenseCard from "./TotalExpenseCard";

function ExpenseCard({
  budget,
  onAddExpenseToBudget,
  utilityBills,
  recurringBills,
  onDeleteExpense,
  onUpdateExpensePrice,
  totalUtilityBills,
  totalSubscriptions,
  onToggleExpensePaid,
  totalExpenses,
  totalGrocerySpent,
  totalTrainPassSpent,
  formatMoney,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBillsCard = () => {
    setIsOpen(!isOpen);
  };

  const [expenses, setExpenses] = useState({
    utilityBills: initialBills,
    recurringBills: initialRecurringBill,
  });

  return (
    <div className="expense__card">
      <section className="expense page__section">
        <h2 className="card__title">Mandatory Bills</h2>
        <section className="bills__card">
          <div
            className="bills__card-header"
            onClick={handleToggleBillsCard}
            id="toggleBillsCard"
          >
            <div className="bills__card-header_text">
              <button
                type="button"
                className="bills__card-title"
                id="edit-bills-name"
                data-no-toggle="true"
                aria-label="Open"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="bills__name">Bills</h3>
                <img src={penIcon} alt="Pen icon" />
              </button>
              <p className="bills__card-subtitle">Tap to expand / collapse</p>
            </div>
            <button
              className={`bills__card-chev ${isOpen ? "bills__card-chev--open" : ""}`}
            >
              ⌄
            </button>
          </div>
          {isOpen && (
            <div className="bills__card-body" id="bills-body">
              <div className="card card__utility_bill">
                <UtilityList
                  budgetId={budget._id}
                  expenses={utilityBills}
                  listName="utilityBills"
                  onAddExpenseToBudget={onAddExpenseToBudget}
                  onDeleteExpense={onDeleteExpense}
                  onUpdateExpensePrice={onUpdateExpensePrice}
                  onToggleExpensePaid={onToggleExpensePaid}
                  totalGrocerySpent={totalGrocerySpent}
                  totalTrainPassSpent={totalTrainPassSpent}
                  formatMoney={formatMoney}
                />
                <SubscriptionList
                  budgetId={budget._id}
                  expenses={recurringBills}
                  listName="recurringBills"
                  onAddExpenseToBudget={onAddExpenseToBudget}
                  onDeleteExpense={onDeleteExpense}
                  onUpdateExpensePrice={onUpdateExpensePrice}
                  onToggleExpensePaid={onToggleExpensePaid}
                />
                <TotalExpenseCard
                  totalUtilityBills={totalUtilityBills}
                  totalSubscriptions={totalSubscriptions}
                  totalExpenses={totalExpenses}
                  onUpdateExpensePrice={onUpdateExpensePrice}
                  formatMoney={formatMoney}
                />
              </div>
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default ExpenseCard;
