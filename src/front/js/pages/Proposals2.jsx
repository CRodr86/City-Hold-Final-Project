import React from "react";
import "../../styles/proposals2.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import SignUpForm from "../component/SignUpForm/SignUpForm.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import { HashLink } from "react-router-hash-link";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals2 = () => {
  return (
    <div className="container-fluid w-100 proposals1-body" style={bgImg}>
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-8 col-md-6 col-lg-4">
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
              <StepperItem
                stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
                stepLabel="1"
              />
              <StepperItem
                stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
                stepLabel="2"
              />
              <StepperItem
                stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
                stepLabel="3"
              />
              <StepperItem
                stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
                stepLabel="4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-1">
        <div className="col text-center">
          <h3 id="proposals1Header">
            To provide the right solution we need to know you better
          </h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3">
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
