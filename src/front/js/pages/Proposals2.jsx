import React from "react";
import Stepper from "react-stepper-enhanced";
import "../../styles/proposals2.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import SignUpForm from "../component/SignUpForm/SignUpForm.jsx";

const Proposals1 = () => {
  return (
    <div className="container-fluid proposals1-body">
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-7">
          <Stepper
            steps={[
              { title: "Step One" },
              { title: "Step Two" },
              { title: "Step Three" },
              { title: "Step Four" },
            ]}
            activeStep={1}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-9 text-center">
          <h3 id="proposals1Header">
            To provide the right solution we need to know you better
          </h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-8 form-bg py-5 px-4 rounded-3">
          <SignUpForm />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4 pb-5">
        <div className="col-4">
          <div className="d-flex justify-content-start">
            <MainButton buttonText="Back" toLink="/proposals-2" />
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-end">
            <MainButton buttonText="Next" toLink="/proposals-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals1;
