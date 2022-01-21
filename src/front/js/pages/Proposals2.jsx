import React from "react";
import Stepper from "react-stepper-enhanced";
import "../../styles/proposals2.css";
import SignUpForm from "../component/SignUpForm/SignUpForm.jsx";

const Proposals1 = () => {
  return (
    <div className="container-fluid proposals1-body">
      <div className="row d-flex justify-content-center pt-5">
        <div className="col-8">
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
        <div className="col-9 form-bg">
          <SignUpForm />
        </div>
      </div>
      <div className="row mt-2 pb-5">
        <div className="col d-flex justify-content-center"></div>
      </div>
    </div>
  );
};

export default Proposals1;
