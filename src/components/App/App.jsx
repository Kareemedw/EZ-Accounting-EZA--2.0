import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainCards from "../MainCards/MainCards";
import {
  initialBills,
  initialRecurringBill,
  initialAdditionalBills,
} from "../../utils/Constants";
import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../../utils/app";
import "./App.css";

function App() {
  /* Budgets*/
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    getBudgets()
      .then((data) => {
        setBudgets(data);
      })
      .catch(console.error);
  }, []);

  const handleAddBudget = () => {
    createBudget({
      name: "New Budget",
      salary: 0,
      utilityBills: initialBills,
      recurringBills: initialRecurringBill,
      additionalBills: initialAdditionalBills,
    })
      .then((res) => {
        setBudgets([res.data, ...budgets]);
      })
      .catch(console.error);
  };

  const handleSaveBudget = (budgetId, updatedData) => {
    updateBudget(budgetId, updatedData)
      .then((res) => {
        setBudgets((prev) =>
          prev.map((budget) => (budget._id === budgetId ? res.data : budget)),
        );
      })
      .catch(console.error);
  };

  /*Application Functionality*/
  const handleAddExpenseToBudget = (budgetId, listName, newExpense) => {
    const budget = budgets.find((budget) => budget._id === budgetId);

    const updatedBudget = {
      ...budget,
      [listName]: [
        { id: crypto.randomUUID(), ...newExpense },
        ...budget[listName],
      ],
    };

    handleSaveBudget(budgetId, updatedBudget);
  };

  const handleDeleteBudgetCard = (budgetId) => {
    deleteBudget(budgetId)
      .then(() => {
        setBudgets(budgets.filter((budget) => budget._id !== budgetId));
      })
      .catch(console.error);
  };

  /*const [expenses, setExpenses] = useState({
    utilityBills: initialBills,
    recurringBills: initialRecurringBill,
    additionalBills: initialAdditionalBills,
    salary: "",
  });*/

  /* Calculation Code*/
  const handleAddExpense = (listName, newExpense) => {
    setBudgets((prev) => ({
      ...prev,
      [listName]: [
        {
          id: crypto.randomUUID(),
          ...newExpense,
        },
        ...prev[listName],
      ],
    }));
  };

  const handleDeleteExpense = (listName, budgetId) => {
    setBudgets((prev) => ({
      ...prev,
      [listName]: prev[listName].filter((budget) => budget.id !== budgetId),
    }));
  };

  const handleUpdateExpensePrice = (listName, budgetId, newPrice) => {
    setBudgets((prev) => ({
      ...prev,
      [listName]: prev[listName].map((budget) =>
        budget.id === budgetId ? { ...budget, price: newPrice } : expense,
      ),
    }));
  };

  const handleSalaryChange = (budgetId, newSalary) => {
    const budget = budgets.find((budget) => budget._id === budgetId);

    if (!budget) {
      console.error("Budget not found:", budgetId);
      return;
    }

    const updatedBudget = {
      ...budget,
      salary: newSalary,
    };

    handleSaveBudget(budgetId, updatedBudget);
  };

  const formatMoney = (value) => {
    if (value === "" || value === null || value === undefined) {
      return "";
    }

    const number = Number(value);

    if (number === 0) {
      return "";
    }

    return `$${number.toFixed(2)}`;
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        {budgets.map((budget) => {
          const totalUtilityBills = budget.utilityBills.reduce(
            (total, bill) => total + Number(bill.price || 0),
            0,
          );

          const totalSubscriptions = budget.recurringBills.reduce(
            (total, bill) => total + Number(bill.price || 0),
            0,
          );

          const totalAdditionalBills = budget.additionalBills.reduce(
            (total, bill) => total + Number(bill.price || 0),
            0,
          );

          const totalExpenses = totalUtilityBills + totalSubscriptions;
          const salaryBalance = Number(budget.salary || 0) - totalExpenses;
          const finalBalance = salaryBalance - totalAdditionalBills;

          return (
            <MainCards
              key={budget._id}
              budget={budget}
              onAddExpenseToBudget={handleAddExpenseToBudget}
              onDeleteBudgetCard={handleDeleteBudgetCard}
              onSalaryChange={handleSalaryChange}
              totalUtilityBills={totalUtilityBills}
              totalSubscriptions={totalSubscriptions}
              totalExpenses={totalExpenses}
              salaryBalance={salaryBalance}
              totalAdditionalBills={totalAdditionalBills}
              finalBalance={finalBalance}
              formatMoney={formatMoney}
            />
          );
        })}
        <button
          className="add__budget-btn"
          id="add-budget"
          onClick={handleAddBudget}
        >
          + Add New Budget
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
