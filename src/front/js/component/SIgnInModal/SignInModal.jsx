import React from "react";
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
              <li class="nav-item" role="presentation">
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
              <div
                className="tab-pane fade show active"
                id="pills-myAccount"
                role="tabpanel"
                aria-labelledby="pills-myAccount-tab"
              >
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="formPassword"
                    placeholder="Password"
                  />
                </div>
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
              <div
                className="tab-pane fade"
                id="pills-signUp"
                role="tabpanel"
                aria-labelledby="pills-signUp-tab"
              >
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="formFirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your first name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formLastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your last name"
                      aria-label="Last name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formEmail2" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email2"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formPassword2" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password2"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formHomePhone" className="form-label">
                      Home Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Home phone number"
                      aria-label="homePhone"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formMobilePhone" className="form-label">
                      Mobile Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile phone number"
                      aria-label="mobilePhone"
                    />
                  </div>
                  <div className="col-12">
                    <label for="formAdress1" className="form-label">
                      Adress (line 1)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your adress"
                      aria-label="adress1"
                    />
                  </div>
                  <div className="col-12">
                    <label for="formAdress2" className="form-label">
                      Adress (line 2)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your adress"
                      aria-label="adress2"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formZipCode" className="form-label">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                      aria-label="zipCode"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="formYearsOfResidence" className="form-label">
                      Years of residence
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Years of residence"
                      aria-label="yearsOfResidence"
                    />
                  </div>
                  <div class="col-12 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-primary border-0 px-5 mb-3"
                      id="signUpButton"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInModal;
