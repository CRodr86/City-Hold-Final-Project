import React from "react";
import Stepper from "react-stepper-enhanced";
import "../../styles/proposals1.css";
import MainButton from "../component/MainButton/MainButton.jsx";

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
            activeStep={0}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-9 text-center">
          <h3 id="proposals1Header">
            Tell us your idea to make the city better
          </h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-9 text-center">
          <p>
            Please fill all the following proposal form so we can give you the
            best answer to your problem or suggestion. Once you finish we will
            review it and give you an answer as soon as posible. You can always
            access your proposal in your file.
          </p>
        </div>
      </div>
      <div className="row mt-2 pb-5">
        <div className="col d-flex justify-content-center">
          <MainButton buttonText="Start" />
        </div>
      </div>
    </div>
  );
};

export default Proposals1;
