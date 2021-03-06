import React from "react";
import "../../styles/proposals4.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import { HashLink } from "react-router-hash-link";
import SelectMenu from "../component/SelectMenu/SelectMenu.jsx";
import TextArea from "../component/TextArea/TextArea.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals4 = () => {
  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-8 col-md-6 col-lg-4">
            <div className="position-relative m-4">
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
                  stepClass="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
                  stepLabel="1"
                />
                <StepperItem
                  stepClass="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
                  stepLabel="2"
                />
                <StepperItem
                  stepClass="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill border-0 stepLabelInactive"
                  stepLabel="3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              Documents will help us to evaluate your proposal
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-6 form-bg py-5 px-4 rounded-3">
            <div className="row mt-1">
              <div className="col">
                <p id="areaP">Documents</p>
              </div>
            </div>
            <div className="row">
              <div className="col bg-white rounded-3 mx-2 mb-3">
                <div className="row">
                  <div
                    className="col rounded-3 m-3 d-flex justify-content-center"
                    id="filesBox"
                  >
                    <span className="align-middle m-4 documentsBoxText">
                      Drag and drop your files here or...
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3 d-flex justify-content-center">
                    <MainButton buttonText="Attach your files" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <SelectMenu
                label="Type of documents"
                class="form-select border-0"
                value1="Text"
                value2="Photo"
                value3="Video"
              />
            </div>
            <div className="row">
              <TextArea label="Please provide a description of the image or video" />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3">
            <div className="d-flex justify-content-start">
              <MainButton buttonText="Back" to="/proposals-3" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <MainButton buttonText="Next" to="/proposals-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals4;
