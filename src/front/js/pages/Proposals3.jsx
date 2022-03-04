//React and Components
import React, { useContext, useState } from "react";

import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FormInput from "../component/FormInput/FormInput.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import StepperItem from "../component/StepperItem/StepperItem.jsx";
import { HashLink } from "react-router-hash-link";
import ProposalsCard from "../component/ProposalsCard/ProposalsCard.jsx";
import ProposalsCheckbox from "../component/ProposalsCheckbox/ProposalsCheckbox.jsx";
import TextArea from "../component/TextArea/TextArea.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
import SelectMenu from "../component/SelectMenu/SelectMenu.jsx";
//Styles
import "../../styles/proposals3.css";
let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals3 = () => {
  //State variables
  const { store, actions } = useContext(Context);
  const [area, setArea] = useState("");
  const [proposal_type, setProposal_Type] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState("");
  const [document_type, setDocument_Type] = useState("");
  const [document_description, setDocument_Description] = useState("");
  const [contact_by, setContact_By] = useState("");
  const [confirmation_by, setConfirmation_By] = useState("");
  const history = useHistory();

  //Sending proposal to backend
  const handleProposal = (e) => {
    e.preventDefault();
    actions.createProposal(
      area,
      proposal_type,
      date,
      description,
      documents,
      document_type,
      document_description,
      contact_by,
      confirmation_by
    );
    setArea("");
    setProposal_Type("");
    setDate("");
    setDescription("");
    setDocuments("");
    setDocument_Type("");
    setDocument_Description("");
    setContact_By("");
    setConfirmation_By("");
    history.push("/proposals-5");
  };

  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-8 col-md-6 col-lg-4">
            {/* Deleted stepper because we only have one page of form*/}

            {/* <div className="position-relative m-4">
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
                  stepClass="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelActive"
                  stepLabel="1"
                />
                <StepperItem
                  stepClass="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill border-0 stepLabelInactive"
                  stepLabel="2"
                />
                <StepperItem
                  stepClass="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill border-0 stepLabelInactive"
                  stepLabel="3"
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              Please fill the following form to process your proposal
            </h3>
            <h6 id="proposals1Header">
              Keep in mind that a detailed description and backup documentation
              will help us evaluate your proposal
            </h6>
          </div>
        </div>
        {/* Area cards input */}
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-xl-6 col-lg-8 col-md-8 col-10 form-bg py-5 px-4 rounded-3">
            <div className="row justify-content-center mt-1">
              <div className="col">
                <p id="areaP">Select the area</p>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-11 col-lg-12">
                  <div className="row">
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Bus and subway services"
                      inputId="transport"
                      labelFor="transport"
                      imgSrc="https://img.icons8.com/ios/50/000000/get-on-bus.png"
                      text="Transport"
                      name="area"
                      checked={area === "transport"}
                      value="transport"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Buildings construction and maintenance"
                      inputId="buildings"
                      labelFor="buildings"
                      imgSrc="https://img.icons8.com/ios/50/000000/building-with-rooftop-terrace.png"
                      text="Buidings"
                      name="area"
                      checked={area === "buildings"}
                      value="buildings"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Traffic lights, streets way and traffic safety"
                      inputId="traffic"
                      labelFor="traffic"
                      imgSrc="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-car-car-itim2101-lineal-itim2101-1.png"
                      text="Traffic"
                      name="area"
                      checked={area === "traffic"}
                      value="traffic"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Parks, squares and afforestation"
                      inputId="nature"
                      labelFor="nature"
                      imgSrc="https://img.icons8.com/ios/50/000000/deciduous-tree.png"
                      text="Nature"
                      name="area"
                      checked={area === "nature"}
                      value="nature"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Bike lanes and cyclist safety"
                      inputId="cycling"
                      labelFor="cycling"
                      imgSrc="https://img.icons8.com/dotty/50/000000/protected-bike-lane.png"
                      text="Cycling"
                      name="area"
                      checked={area === "cycling"}
                      value="cycling"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Streets maintenance"
                      inputId="streets"
                      labelFor="streets"
                      imgSrc="https://img.icons8.com/ios/50/000000/crossroad.png"
                      text="Streets"
                      name="area"
                      checked={area === "streets"}
                      value="streets"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Trains stations, lines, maintenance..."
                      inputId="trains"
                      labelFor="trains"
                      imgSrc="https://img.icons8.com/ios/50/000000/train-platform.png"
                      text="Trains"
                      name="area"
                      checked={area === "trains"}
                      value="trains"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <ProposalsCard
                      class="col-lg-3 col-md-6 col-6"
                      tooltip="Schools, colleges and universitys"
                      inputId="education"
                      labelFor="education"
                      imgSrc="https://img.icons8.com/pastel-glyph/50/000000/student-male--v2.png"
                      text="Education"
                      name="area"
                      checked={area === "education"}
                      value="education"
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Claim or suggestion input */}
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Select a type</label>
                  <ProposalsCheckbox
                    divClassName="form-check"
                    inputClassName="form-check-input"
                    type="checkbox"
                    id="flexCheckSuggestion"
                    elementLabelClassName="form-check-label"
                    htmlFor="flexCheckSuggestion"
                    elementText="Suggestion"
                    name="proposal_type"
                    checked={proposal_type === "suggestion"}
                    value="suggestion"
                    onChange={(e) => setProposal_Type(e.target.value)}
                  />
                  <ProposalsCheckbox
                    divClassName="form-check"
                    inputClassName="form-check-input"
                    type="checkbox"
                    id="flexCheckClaim"
                    elementLabelClassName="form-check-label"
                    htmlFor="flexCheckClaim"
                    elementText="Claim"
                    name="proposal_type"
                    checked={proposal_type === "claim"}
                    value="claim"
                    onChange={(e) => setProposal_Type(e.target.value)}
                  />
                </div>
              </div>
              {/* Date input */}
              <FormInput
                divClassName="col-6"
                labelFor="formDate"
                labelClassName="form-label"
                labelText="Date of ocurrence"
                inputType="date"
                inputClassName="form-control"
                inputAriaLabel="Date of ocurrence"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {/* Description input */}
            <div className="row">
              <TextArea
                label="Describe your proposal"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* Document attachment input */}
            <div className="row mt-3">
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
                    <input
                      className="align-middle m-4 documentsBoxText"
                      type="file"
                      id="getFile"
                      // style={{ display: "none" }}
                    />
                    Drag and drop your files here or...
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3 d-flex justify-content-center">
                    <label
                      htmlFor="getFile"
                      className="form-label"
                      id="getFileLink"
                    >
                      Attach your files
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Type of document input */}
            <div className="row">
              <SelectMenu
                label="Type of documents"
                class="form-select border-0"
                value1="Text"
                value2="Photo"
                value3="Video"
                selected1={document_type === "Text"}
                selected2={document_type === "Photo"}
                selected3={document_type === "Video"}
                valueName1="1"
                valueName2="2"
                valueName3="3"
                onChange={(e) => setDocument_Type(e.target.value)}
              />
            </div>
            {/* Document description input */}
            <div className="row">
              <TextArea
                label="Please provide a description of the image or video"
                value={document_description}
                onChange={(e) => setDocument_Description(e.target.value)}
              />
            </div>
            {/* How to contact user input */}
            <div className="row mt-3">
              <div className="col-md-6">
                <SelectMenu
                  label="Contact me by"
                  class="form-select border-0"
                  value1="Email"
                  value2="Phone"
                  value3="WhatsApp"
                  valueName1="1"
                  valueName2="2"
                  valueName3="3"
                  selected1={contact_by === "Email"}
                  selected2={contact_by === "Phone"}
                  selected3={contact_by === "WhatsApp"}
                  onChange={(e) => setContact_By(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <SelectMenu
                  label="Recieve confirmation by"
                  class="form-select border-0"
                  value1="Email"
                  value2="SMS"
                  value3="WhatsApp"
                  valueName1="1"
                  valueName2="2"
                  valueName3="3"
                  selected1={confirmation_by === "Email"}
                  selected2={confirmation_by === "SMS"}
                  selected3={confirmation_by === "WhatsApp"}
                  onChange={(e) => setConfirmation_By(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3">
            <div className="d-flex justify-content-center">
              <MainButton
                buttonText="Submit"
                to="#"
                onClick={handleProposal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals3;
