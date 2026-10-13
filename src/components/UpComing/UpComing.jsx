import MainCards from "../MainCards/MainCards";

function UpComing({ budgets }) {
  const today = new Date();

  const upcomingBudgets = budgets.filter((budget) => {
    const startDate = new Date(`${budget.startDate}T00:00:00`);

    return startDate > today;
  });

  return (
    <main className="upcoming">
      <h1>Upcoming Budgets</h1>

      {upcomingBudgets.length === 0 ? (
        <p>You don't have any upcoming budgets.</p>
      ) : (
        upcomingBudgets.map((budget) => (
          <MainCards key={budget._id} budget={budget} />
        ))
      )}
    </main>
  );
}

export default UpComing;
