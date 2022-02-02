import React from "react";
import "../../styles/proposals3.css";
import FormInput from "../component/FormInput/FormInput.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import { HashLink } from "react-router-hash-link";
import ProposalsCard from "../component/ProposalsCard/ProposalsCard.jsx";
import ProposalsCheckbox from "../component/ProposalsCheckbox/ProposalsCheckbox.jsx";
import TextArea from "../component/TextArea/TextArea.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals3 = () => {
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
                  stepClass="translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
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
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              A detailed description of your proposal
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-xl-6 col-lg-8 col-md-8 col-10 form-bg py-5 px-4 rounded-3">
            <div className="row justify-content-center mt-1">
              <div className="col">
                <p id="areaP">Select the area</p>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-10">
                  <div className="row">
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Bus and subway services"
                      imgSrc="https://img.icons8.com/ios/50/000000/get-on-bus.png"
                      text="Transport"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Buildings construction and maintenance"
                      imgSrc="https://img.icons8.com/ios/50/000000/building-with-rooftop-terrace.png"
                      text="Buidings"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Traffic lights, streets way and traffic safety"
                      imgSrc="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-car-car-itim2101-lineal-itim2101-1.png"
                      text="Traffic"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Parks, squares and afforestation"
                      imgSrc="https://img.icons8.com/ios/50/000000/deciduous-tree.png"
                      text="Nature"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Bike lanes and cyclist safety"
                      imgSrc="https://img.icons8.com/dotty/50/000000/protected-bike-lane.png"
                      text="Cycling"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Streets maintenance"
                      imgSrc="https://img.icons8.com/ios/50/000000/crossroad.png"
                      text="Streets"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Trains stations, lines, maintenance..."
                      imgSrc="https://img.icons8.com/ios/50/000000/train-platform.png"
                      text="Trains"
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Schools, colleges and universitys"
                      imgSrc="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png"
                      text="Education"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <ProposalsCheckbox />
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
              <TextArea label="Describe your proposal" />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3">
            <div className="d-flex justify-content-start">
              <MainButton buttonText="Back" to="/proposals-2" />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <MainButton buttonText="Next" to="/proposals-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals3;
