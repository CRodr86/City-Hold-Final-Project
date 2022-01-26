import React from "react";
import "../../styles/proposals3.css";
import FormInput from "../component/FormInput/FormInput.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const Proposals3 = () => {
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
                className="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
              >
                1
              </button>
              <button
                type="button"
                className="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
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
        <div className="col-8 text-center">
          <h3 id="proposals1Header">A detailed description of your proposal</h3>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-6 form-bg py-5 px-4 rounded-3">
          <div className="row justify-content-center mt-3">
            <div className="col">
              <div className="row">
                <div className="col">
                  <p id="areaP">Select the area</p>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-8">
                  <div className="row">
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/ios/50/000000/get-on-bus.png" />
                          <p className="card-text">Transport</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/ios/50/000000/building-with-rooftop-terrace.png" />
                          <p className="card-text">Buidings</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-car-car-itim2101-lineal-itim2101-1.png" />
                          <p className="card-text">Traffic</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/ios/50/000000/deciduous-tree.png" />
                          <p className="card-text">Nature</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/dotty/50/000000/protected-bike-lane.png" />
                          <p className="card-text">Cycling</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/ios/50/000000/crossroad.png" />
                          <p className="card-text">Streets</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/ios/50/000000/train-platform.png" />
                          <p className="card-text">Trains</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="card text-center mb-4">
                        <div className="card-body">
                          <img src="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png" />
                          <p className="card-text">Education</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div class="mb-3">
                <label className="form-label">Select a type</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckSuggestion"
                  />
                  <label className="form-check-label" for="flexCheckSuggestion">
                    Suggestion
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckClaim"
                  />
                  <label className="form-check-label" for="flexCheckClaim">
                    Claim
                  </label>
                </div>
              </div>
            </div>
            <FormInput
              divClassName="col-6"
              labelFor="formDate"
              labelClassName="form-label"
              labelText="Date of ocurrence"
              inputType="date"
              inputClassName="form-control"
              inputAriaLabel="Date of ocurrence"
            />
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label">Describe your proposal</label>
              <textarea
                class="form-control"
                placeholder="Hint Text"
                id="textarea"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4 pb-5">
        <div className="col-3">
          <div className="d-flex justify-content-start">
            <MainButton buttonText="Back" toLink="/proposals-2" />
          </div>
        </div>
        <div className="col-3">
          <div className="d-flex justify-content-end">
            <MainButton buttonText="Next" toLink="/proposals-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposals3;
