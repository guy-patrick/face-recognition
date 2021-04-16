import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";

export const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signup !");
  };

  const { name, email, password } = credentials;

  return (
    <div className="sign-container">
      <div className="wrapper">
        <h1 className="title signin-title">Sign up</h1>
        <hr className="line-bellow-title" />
        <p>
          <Link to="/signin" href="#" className="invite-link">
            Already have an account
          </Link>
        </p>
        <CustomForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={[
            {
              label: "Name",
              name: "name",
              value: name,
            },
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
          submitTitle="sign up"
        />
      </div>
    </div>
  );
};
