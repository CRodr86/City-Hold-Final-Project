import React from "react";
import FormInput from "../FormInput/FormInput.jsx";

const MyAccountModal = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-myAccount"
      role="tabpanel"
      aria-labelledby="pills-myAccount-tab"
    >
      <FormInput
        divClassName="mb-3"
        inputType="email"
        inputClassName="form-control"
        inputId="formEmail"
        inputPlaceholder="Email"
      />
      <FormInput
        divClassName="mb-3"
        inputType="password"
        inputClassName="form-control"
        inputId="formPassword"
        inputPlaceholder="Password"
      />
      <div className="d-flex justify-content-center mb-3">
        <button
          type="button"
          className="btn btn-primary border-0 px-5"
          id="logInButton"
        >
          Log in
        </button>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <a id="forgot">Forgot password?</a>
      </div>
    </div>
  );
};

export default MyAccountModal;
