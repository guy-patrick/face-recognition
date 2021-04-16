import { CustomButton } from "../components/CustomButton";

export const Homepage = () => (
  <div className="homepage">
    <h1 className="title homepage-title">Make a face recognition</h1>
    <hr className="line-bellow-title" />
    <p className="homepage-subtitle">
      Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
    </p>
    <CustomButton title="Register" classes="homepage-btn" />
    <p className="invite-text">Discover the experience</p>
  </div>
);
