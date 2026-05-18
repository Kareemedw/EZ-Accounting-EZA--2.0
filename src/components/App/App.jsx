import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainCards from "../MainCards/MainCards";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <MainCards />
        <button className="add__budget-btn" data-role="add-budget">
          + Add New Budget
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
