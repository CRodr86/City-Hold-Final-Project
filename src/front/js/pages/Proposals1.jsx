import React from "react";
import "../../styles/proposals1.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import { HashLink } from "react-router-hash-link";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals1 = () => {

  const history = useHistory();
  const token = sessionStorage.getItem("token");

  if (token && token != "" && token != undefined){
    history.push("/proposals-2")
  }

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
              Tell us your idea to make the city better
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-7 text-center">
            <p className="proposalsText">
              Please fill all the following proposal form so we can give you the
              best answer to your problem or suggestion. Once you finish we will
              review it and give you an answer as soon as posible. You can
              always access your proposal in your file.
            </p>
          </div>
        </div>
        <div className="row mt-2 pb-5">
          <div className="col d-flex justify-content-center">
            <MainButton buttonText="Start" to="#" dataToggle="modal" dataTarget="#signInModal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals1;
