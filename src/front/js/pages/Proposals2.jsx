import React from "react";
import "../../styles/proposals2.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import SignUpForm from "../component/SignUpForm/SignUpForm.jsx";
import { HashLink } from "react-router-hash-link";

const Proposals2 = () => {
  return (
    <div className="container-fluid proposals1-body">
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-4">
          <div className="m-4">
            <div className="progress stepperProgress">
              <div
                className="progress-bar stepperProgress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
              >
                1
              </button>
              <button
                type="button"
                className="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
              >
                2
              </button>
              <button
                type="button"
                className="translate-middle btn btn-sm btn-secondary rounded-pill border-0 stepLabelInactive"
              >
                3
              </button>
              <button
                type="button"
                className="translate-middle btn btn-sm btn-secondary rounded-pill border-0 stepLabelInactive"
              >
                4
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-1">
        <div className="col-6 text-center">
          <h3 id="proposals1Header">
            To provide the right solution we need to know you better
          </h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6 form-bg py-5 px-4 rounded-3">
          <SignUpForm />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4 pb-5">
        <div className="col-3">
          <div className="d-flex justify-content-start">
            <MainButton buttonText="Back" to="/proposals" />
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-end">
            <MainButton buttonText="Next" to="/proposals-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals2;
