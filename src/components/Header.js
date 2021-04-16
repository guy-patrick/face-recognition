import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="navbar">
    <ul className="navbar-container">
      <Link to="/" className="navbar-item logo">
        Smartbrain
      </Link>
      <div className="navbar-left-bloc">
        <li className="navbar-item">
          <Link to="/signin" className="navbar-item-link">
            sign in
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup" className="navbar-item-link navbar-item-selected">
            sign up
          </Link>
        </li>
      </div>
    </ul>
  </nav>
);
