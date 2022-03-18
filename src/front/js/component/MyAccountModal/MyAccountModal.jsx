import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import FormInput from "../FormInput/FormInput.jsx";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./myAccountModal.css";

const MyAccountModal = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  const handleSignIn = (e) => {
    actions.signIn(email, password);
    setEmail("");
    setPassword("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSignIn();
      
    }
  };

  return (
    <>
      {token && token != "" && token != undefined ? (
        "You already signed up."
      ) : (
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            divClassName="mb-3"
            inputType="password"
            inputClassName="form-control"
            inputId="formPassword"
            inputPlaceholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={handleEnterPress}
          />
          <div className="d-flex justify-content-center mb-3">
            <button
              type="button"
              className="btn btn-primary border-0 px-5"
              id="logInButton"
              onClick={handleSignIn}
              
            >
              Log in
            </button>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a id="forgot">Forgot password?</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MyAccountModal;
