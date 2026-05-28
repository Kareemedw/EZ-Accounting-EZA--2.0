import MainCards from "../MainCards/MainCards";

function History({ budgets }) {
  return (
    <section>
      {budgets.map((budget) => (
        <MainCards key={budget._id} budget={budget} />
      ))}
    </section>
  );
}

export default History;
