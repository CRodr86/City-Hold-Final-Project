import React from "react";
import Stepper from "react-stepper-enhanced";
import "../../styles/proposals3.css";
import MainButton from "../component/MainButton/MainButton.jsx";

const Proposals3 = () => {
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
          <h3 id="proposals1Header">A detailed description of your proposal</h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-3">
        <div className="col-8 form-bg py-5 px-4 rounded-3">
          <div className="row">
            <div className="col">
              <p>Select the area</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/ios/50/000000/get-on-bus.png" />
                  <p className="card-text">Transport</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/ios/50/000000/building-with-rooftop-terrace.png" />
                  <p className="card-text">Buidings</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-car-car-itim2101-lineal-itim2101-1.png" />
                  <p className="card-text">Traffic</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/ios/50/000000/deciduous-tree.png" />
                  <p className="card-text">Nature</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/dotty/50/000000/protected-bike-lane.png" />
                  <p className="card-text">Cycling</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/ios/50/000000/crossroad.png" />
                  <p className="card-text">Streets</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/ios/50/000000/train-platform.png" />
                  <p className="card-text">Trains</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card text-center">
                <div className="card-body">
                  <img src="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png" />
                  <p className="card-text">Education</p>
                </div>
              </div>
            </div>
          </div>
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
            <MainButton buttonText="Next" toLink="/proposals-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals3;
