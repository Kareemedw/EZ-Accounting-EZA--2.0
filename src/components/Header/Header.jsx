import "./Header.css";
import avatar from "../../assets/avatar.png";

function Header({ finalBalance, formatMoney }) {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title">EZA - Mobile Wallet</h1>
      </div>
      <div className="header__user-container">
        <div>
          <h3 className="header__username">Kareem Edwards</h3>
          <input
            type="text"
            className="card__input-header"
            placeholder="Balance"
            value={formatMoney(finalBalance)}
            readOnly
          />
        </div>
        <img src={avatar} alt="Kareem Edwards" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
