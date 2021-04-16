import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomForm } from "./CustomForm";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("reset password !");
  };

  return (
    <div className="sign-container">
      <div className="wrapper">
        <h1 className="title forgot-title">FORGOT YOUR PASSWORD?</h1>
        <hr className="line-bellow-title" />
        <p>
          Enter your email address below and we'll send you a link to reset your
          password.
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
          ]}
          submitTitle="send reset link"
        />
      </div>
    </div>
  );
};
