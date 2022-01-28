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
      <div class="col-12 d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-primary border-0 px-5 mb-3"
          id="signUpButton"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
