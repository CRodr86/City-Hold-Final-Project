import React from "react";
import MyAccountModal from "../MyAccountModal/MyAccountModal.jsx";
import SignUpModal from "../SignUpModal/SignUpModal.jsx";
import "./signInModal.css";

const SignInModal = () => {
  return (
    <div
      className="modal fade"
      id="signInModal"
      tabindex="-1"
      aria-labelledby="signInModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content border-0">
          <div className="modal-header">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-myAccount-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-myAccount"
                  type="button"
                  role="tab"
                  aria-controls="pills-myAccount"
                  aria-selected="true"
                >
                  My account
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-signUp-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-signUp"
                  type="button"
                  role="tab"
                  aria-controls="pills-signUp"
                  aria-selected="false"
                >
                  Sign up
                </button>
              </li>
            </ul>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="tab-content" id="pills-tabContent">
              <MyAccountModal />
              <SignUpModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInModal;
