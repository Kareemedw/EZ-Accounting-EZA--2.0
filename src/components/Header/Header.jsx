import "./Header.css";
import "../../assets/avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title">EZA - Mobile Wallet</h1>
      </div>
      <div className="header__user-container">
        <h3 className="header__username">Kareem Edwards</h3>
        <img src="" alt="Kareem Edwards" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
