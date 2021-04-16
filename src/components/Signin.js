import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";

export const Signin = () => (
  <div className="sign-container">
    <div className="wrapper">
      <h1 className="title signin-title">Sign in</h1>
      <hr className="line-bellow-title" />
      <p>
        Not a member yet ?{" "}
        <a href="#" className="invite-link">
          Sign Up here
        </a>
      </p>
      <form className="form">
        <div className="form-input-bloc">
          <label for="email" className="form-label">
            Email<span>*</span>
          </label>
          <input type="email" name="email" className="form-input" />
        </div>
        <CustomButton title="sign in" classes="form-btn" />
      </form>
      <Link className="reset-link" to="/reset-password">
        Forgot password ?
      </Link>
    </div>
  </div>
);
