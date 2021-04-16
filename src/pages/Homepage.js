import { Link } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";

export const Homepage = () => (
  <div className="homepage">
    <h1 className="title homepage-title">Make a face recognition</h1>
    <hr className="line-bellow-title" />
    <p className="homepage-subtitle">
      Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
    </p>
    <Link to="/signup">
      <CustomButton title="Register" classes="homepage-btn" />
    </Link>
    <p className="invite-text">Discover the experience</p>
  </div>
);
