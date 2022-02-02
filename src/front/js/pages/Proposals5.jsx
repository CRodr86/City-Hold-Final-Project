import React from "react";
import "../../styles/proposals5.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import SelectMenu from "../component/SelectMenu/SelectMenu.jsx";
import { HashLink } from "react-router-hash-link";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals5 = () => {
  return (
    <>
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
                  stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
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
                  stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
                  stepLabel="4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              We will be reviewing your proposal in the next few days.
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-6 form-bg py-5 px-4 rounded-3">
            <div className="row mt-1">
              <div className="col-12 mb-5" id="proposals5Text">
                <p>You will recieve an email with the confirmation.</p>
                <p> Your proposal Id is: 654879</p>
                <p>
                  If you have any questions or in any time you want to update or
                  add additional information to your proposal you can access
                  your file.
                </p>
                <p>
                  Please let us know how do you want to recieve information
                  about your proposal.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <SelectMenu
                  label="You would like to receive"
                  class="form-select border-0"
                  value1="Email"
                  value2="SMS"
                  value3="WhatsApp message"
                />
              </div>
              <div className="col-md-6">
                <SelectMenu
                  label="Contact me by"
                  class="form-select border-0"
                  value1="Phone"
                  value2="Email"
                  value3="WhatsApp"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3">
            <div className="d-flex justify-content-start">
              <MainButton buttonText="Back" to="/proposals-4" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <MainButton buttonText="Submit" to="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals5;
