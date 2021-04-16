import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";

export const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Orrayyy");
  };

  const { email, password } = credentials;

  return (
    <div className="sign-container">
      <div className="wrapper">
        <h1 className="title signin-title">Sign in</h1>
        <hr className="line-bellow-title" />
        <p>
          Not a member yet ?{" "}
          <Link to="/signup" className="invite-link">
            Sign Up here
          </Link>
        </p>
        <CustomForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={[
            {
              label: "Email",
              name: "email",
              value: email,
            },
            {
              label: "Password",
              name: "password",
              value: password,
            },
          ]}
          submitTitle="sign in"
        />
        <Link className="reset-link" to="/forgot-password">
          Forgot password ?
        </Link>
      </div>
    </div>
  );
};
