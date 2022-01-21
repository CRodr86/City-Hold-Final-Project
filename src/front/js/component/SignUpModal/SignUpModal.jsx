import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm.jsx";

const SignUpModal = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-signUp"
      role="tabpanel"
      aria-labelledby="pills-signUp-tab"
    >
      <SignUpForm />
    </div>
  );
};

export default SignUpModal;
