import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="navbar">
    <ul className="navbar-container">
      <Link to="/" className="navbar-item logo">
        Smartbrain
      </Link>
      <div className="navbar-left-block">
        <li className="navbar-item navbar-item-left">
          <Link to="/signin" className="nav-item-link">
            sign in
          </Link>
        </li>
        <li className="navbar-item navbar-item-left">
          <Link to="/signup" className="nav-item-link nav-item-selected">
            sign up
          </Link>
        </li>
      </div>
    </ul>
  </nav>
);
