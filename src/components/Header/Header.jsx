import "./Header.css";
import avatar from "../../assets/avatar.png";

function Header({ finalBalance, formatMoney }) {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title">EZA - Mobile Wallet</h1>
      </div>
      <div className="header__user-container">
        <div className="header__information">
          <h3 className="header__username">Kareem Edwards</h3>
          <label className="card__label">
            <p className="card__label-title">Current Balance</p>
            <input
              type="text"
              className="card__input-header"
              placeholder="Balance"
              value={formatMoney(finalBalance)}
              readOnly
            />
          </label>
        </div>
        <img src={avatar} alt="Kareem Edwards" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
