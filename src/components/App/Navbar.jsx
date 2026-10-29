import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./App.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/upComingBudgets", label: "Upcoming Budgets" },
  { path: "/groceries", label: "Grocery Section" },
  { path: "/trainpass", label: "Train Pass Section" },
  { path: "/carpaymentpage", label: "Car Payment Page" },
  { path: "/history", label: "History" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className="nav__container" aria-label="Main navigation">
      <div className="nav__header">
        <h2 className="nav__logo">EZ-Accounting</h2>

        <button
          type="button"
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav-links"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        id="main-nav-links"
        className={`nav__links ${menuOpen ? "nav__links_open" : ""}`}
      >
        {navLinks.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              isActive ? "nav__link nav__link_active" : "nav__link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
