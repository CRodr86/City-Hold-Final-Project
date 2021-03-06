//React and Components
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useHistory } from "react-router-dom";
import FormInput from "../component/FormInput/FormInput.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import ProposalsCard from "../component/ProposalsCard/ProposalsCard.jsx";
import ProposalsCheckbox from "../component/ProposalsCheckbox/ProposalsCheckbox.jsx";
import TextArea from "../component/TextArea/TextArea.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";
import SelectMenu from "../component/SelectMenu/SelectMenu.jsx";
import { save_img } from "../service/user.js";
import "../../styles/proposals3.css";

const Proposals3 = () => {
  //Style variables
  let bgImg = {
    background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
  };
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
  const [files, setFiles] = useState([]);
  // const [fileUrl, setFileUrl] = useState("");
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

  //File handlers

  // const handleChangeFile = (e) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       if (reader.readyState === 2) {
  //         console.log("result", reader.result);
  //       }
  //     };
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // };

  // const handelClick = async () => {
  //   try {
  //     const form = new FormData();
  //     form.append("img", file);
  //     const res = await save_img(form);
  //     const data = await res.json();
  //     console.log(data);
  //     setFileUrl(data[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // console.log(file);

  const saveImage = () => {
    let data = new FormData();
    data.append("file", files[0]);

    fetch(process.env.BACKEND_URL + "/api/proposal/documents", {
      method: "POST",
      body: data,
    });
  };

  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-8 col-md-6 col-lg-4"></div>
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
                label="Describe your proposal. Please provide all possible details."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                labelClassName="form-label"
                className="form-control"
              />
            </div>
            {/* Document attachment input */}
            {/* <div className="row mt-3">
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
                      name="file"
                      onChange={(event) => {
                        setFiles(event.target.files);
                      }}
                      // style={{ display: "none" }}
                    />
                    Attach images, videos or files
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3 d-flex justify-content-center"> */}
                    {/* <label
                      htmlFor="getFile"
                      className="form-label"
                      id="getFileLink"
                    >
                      Attach your files
                    </label> */}
                    {/* <img src={fileUrl}></img>
                    // <button
                    //   onClick={saveImage}
                    //   className="form-label"
                    //   id="getFileLink"
                    // >
                    //   Attach Files
                    // </button> */}
                  {/* </div>
                </div>
              </div>
            </div> */}
            {/* Type of document input */}
            <div className="row">
              <SelectMenu
                label="Neighborhood to which your proposal is addressed"
                class="form-select border-0"
                value1="Manhattan"
                value2="Brooklyn"
                value3="Queens"
                selected1={document_type === "Manhattan"}
                selected2={document_type === "Brooklyn"}
                selected3={document_type === "Other"}
                valueName1="1"
                valueName2="2"
                valueName3="3"
                onChange={(e) => setDocument_Type(e.target.value)}
              />
            </div>
            {/* Document description input */}
            {/* <div className="row">
              <TextArea
                labelClassName="form-label"
                className="form-control"
                label="Please provide a description of the image or video"
                value={document_description}
                onChange={(e) => setDocument_Description(e.target.value)}
              />
            </div> */}
            {/* How to contact user input */}
            <div className="row mt-3">
              <div className="col-md-6">
                <SelectMenu
                  label="Recieve information about your proposal by"
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
                  label="Recieve information about city events by"
                  class="form-select border-0"
                  value1="Email"
                  value2="WhatsApp"
                  value3="None"
                  valueName1="1"
                  valueName2="2"
                  valueName3="3"
                  selected1={confirmation_by === "Email"}
                  selected2={confirmation_by === "WhatsApp"}
                  selected3={confirmation_by === "None"}
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
                to={"/proposals-5"}
                onClick={(e) => {
                  handleProposal(e);
                  // saveImage();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals3;
