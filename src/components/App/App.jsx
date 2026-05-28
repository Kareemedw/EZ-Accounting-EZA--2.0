import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import History from "../History/History";
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
import BudgetModal from "../cardModal/budgetCardModal";
import BillModal from "../cardModal/billCardModal";
import ExtraBillModal from "../cardModal/extraBillModalCard";
import DeleteModal from "../deleteModal/deleteModal";

function App() {
  /* Modals */
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => {
    setActiveModal("");
    setSelectedBudget(null);
  };

  const [selectedBudget, setSelectedBudget] = useState(null);

  const location = useLocation();

  const pageTitle =
    location.pathname === "/history"
      ? "Budget History"
      : location.pathname === "/salarysection"
        ? "Salary Section"
        : location.pathname === "/groceries"
          ? "Grocery Section"
          : location.pathname === "/carpaymentsection"
            ? "Car Payment Section"
            : "My Budgets";

  const handleBudgetClick = (budget) => {
    setSelectedBudget(budget);
    setActiveModal("New Budget");
  };

  const handleBillClick = () => setActiveModal("bill");
  const handleExtraSpendingClick = () => setActiveModal("extra-bill");

  /* Budgets*/
  const [budgets, setBudgets] = useState([]);

  const mainBudgets = budgets.slice(0, 3);
  const historyBudgets = budgets.slice(3);

  useEffect(() => {
    getBudgets()
      .then((data) => {
        setBudgets([...data].reverse());
      })
      .catch(console.error);
  }, []);

  const handleAddBudget = () => {
    createBudget({
      name: "New Budget",
      salary: 0,
      date: "",
      currentBalance: 0,
      utilityBills: initialBills,
      recurringBills: initialRecurringBill,
      additionalBills: initialAdditionalBills,
      BudgetModal: "",
      BillModal: "bills",
      ExtraBillModal: "Extra Spending",
      DeleteModal: "delete",
    })
      .then((res) => {
        setBudgets((prevBudgets) => [res.data, ...prevBudgets]);
      })
      .catch(console.error);
  };

  const handleDateChange = (budgetId, newDate) => {
    const budget = budgets.find((budget) => budget._id === budgetId);

    if (!budget) {
      console.error("Budget not found:", budgetId);
      return;
    }

    const updatedBudget = {
      ...budget,
      date: newDate,
    };

    handleSaveBudget(budgetId, updatedBudget);
  };

  const handleAddBudgetName = (newName) => {
    if (!selectedBudget) return;

    const updatedBudget = {
      ...selectedBudget,
      name: newName,
    };

    handleSaveBudget(selectedBudget._id, updatedBudget);
    closeModal();
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

  const handleOpenDeleteModal = (budget) => {
    setSelectedBudget(budget);
    setActiveModal("delete");
  };

  const handleConfirmDeleteBudget = () => {
    if (!selectedBudget) return;

    handleDeleteBudgetCard(selectedBudget._id);
    closeModal();
  };

  /* Current Bank Balance*/
  const handleCurrentBalanceChange = (budgetId, value) => {
    const budget = budgets.find((budget) => budget._id === budgetId);
    if (!budget) return;

    handleSaveBudget(budgetId, {
      ...budget,
      currentBalance: value,
    });
  };

  const handleToggleExpensePaid = (budgetId, listName, expenseId) => {
    const budget = budgets.find((budget) => budget._id === budgetId);
    if (!budget) return;

    handleSaveBudget(budgetId, {
      ...budget,
      [listName]: budget[listName].map((expense) =>
        (expense._id || expense.id) === expenseId
          ? { ...expense, paid: !expense.paid }
          : expense,
      ),
    });
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

  const handleUpdateExpensePrice = (
    budgetId,
    listName,
    expenseId,
    newPrice,
  ) => {
    const budget = budgets.find((budget) => budget._id === budgetId);

    if (!budget) {
      console.error("Budget not found:", budgetId);
      return;
    }

    const updatedBudget = {
      ...budget,
      [listName]: budget[listName].map((expense) =>
        (expense._id || expense.id) === expenseId
          ? { ...expense, price: newPrice }
          : expense,
      ),
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

  const handleDeleteExpense = (budgetId, listName, expenseId) => {
    const budget = budgets.find((budget) => budget._id === budgetId);
    if (!budget) return;

    const updatedBudget = {
      ...budget,
      [listName]: budget[listName].filter(
        (expense) => (expense._id || expense.id) !== expenseId,
      ),
    };

    handleSaveBudget(budgetId, updatedBudget);
  };

  /* Calculation Code*/

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

  const renderBudgetCard = (budget) => {
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
    const paidUtilityTotal = budget.utilityBills.reduce(
      (total, bill) => total + (bill.paid ? Number(bill.price || 0) : 0),
      0,
    );

    const paidRecurringTotal = budget.recurringBills.reduce(
      (total, bill) => total + (bill.paid ? Number(bill.price || 0) : 0),
      0,
    );

    const paidAdditionalTotal = budget.additionalBills.reduce(
      (total, bill) => total + (bill.paid ? Number(bill.price || 0) : 0),
      0,
    );

    const currentBalanceAfterPaid =
      Number(budget.currentBalance || 0) -
      paidUtilityTotal -
      paidRecurringTotal -
      paidAdditionalTotal;
    return (
      <MainCards
        key={budget._id}
        budget={budget}
        onDateChange={handleDateChange}
        onAddExpenseToBudget={handleAddExpenseToBudget}
        onDeleteBudgetCard={handleDeleteBudgetCard}
        onSalaryChange={handleSalaryChange}
        onUpdateExpensePrice={handleUpdateExpensePrice}
        handleAddExpenseToBudget={handleAddExpenseToBudget}
        handleDeleteExpense={handleDeleteExpense}
        onCurrentBalanceChange={handleCurrentBalanceChange}
        onToggleExpensePaid={handleToggleExpensePaid}
        currentBalanceAfterPaid={currentBalanceAfterPaid}
        totalUtilityBills={totalUtilityBills}
        totalSubscriptions={totalSubscriptions}
        totalExpenses={totalExpenses}
        salaryBalance={salaryBalance}
        totalAdditionalBills={totalAdditionalBills}
        finalBalance={finalBalance}
        formatMoney={formatMoney}
        onOpenBudgetModal={() => handleBudgetClick(budget)}
        onOpenBillModal={() => setActiveModal("bills")}
        onOpenExtraBillModal={() => setActiveModal("Extra Spending")}
        onDeleteModal={() => setActiveModal("delete")}
        onOpenDeleteModal={() => handleOpenDeleteModal(budget)}
      />
    );
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />

        <nav className="nav__container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            to="/salary"
          >
            Salary Section
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            to="/groceries"
          >
            Grocery Section
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            to="/carpaymentsection"
          >
            Car Payment Section
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            to="/history"
          >
            History
          </NavLink>
        </nav>

        <h2 className="page__title">{pageTitle}</h2>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {mainBudgets.map(renderBudgetCard)}
                <button className="add__budget-btn" onClick={handleAddBudget}>
                  + Add New Budget
                </button>
              </>
            }
          />
          <Route path="/salary" element={<></>} />
          <Route path="/groceries" element={<></>} />
          <Route path="/carpaymentsection" element={<></>} />
          <Route
            path="/history"
            element={<>{historyBudgets.map(renderBudgetCard)}</>}
          />
        </Routes>
      </div>

      <Footer />

      <BudgetModal
        isOpen={activeModal === "New Budget"}
        onClose={closeModal}
        onSubmit={handleAddBudgetName}
        currentName={selectedBudget?.name}
      />
      <BillModal
        isOpen={activeModal === "bills"}
        onClose={closeModal}
        onSubmit={handleBillClick}
      />

      <ExtraBillModal
        isOpen={activeModal === "Extra Spending"}
        onClose={closeModal}
        onSubmit={handleExtraSpendingClick}
      />

      <DeleteModal
        isOpen={activeModal === "delete"}
        onClose={closeModal}
        onConfirm={handleConfirmDeleteBudget}
      />
    </div>
  );
}

export default App;
