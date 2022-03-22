import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import MainButton from "../component/MainButton/MainButton.jsx";
import FormInput from "../component/FormInput/FormInput.jsx";
import TextArea from "../component/TextArea/TextArea.jsx";

const CreateProject = () => {
  //Style variable
  let bgImg = { background: "#023047", height: "max-content" };

  //Store variables
  const { store, actions } = useContext(Context);
  const [area, setArea] = useState("");
  const [name, setName] = useState("");
  const [generalDescription, setGeneralDescription] = useState("");
  const [image, setImage] = useState("");
  const [start, setStart] = useState("");
  const [cost, setCost] = useState("");
  const [taxes, setTaxes] = useState("");
  const [developer, setDeveloper] = useState("");
  const [jobs, setJobs] = useState("");
  const history = useHistory();

  //Sending project to the backend

  const handleProject = (e) => {
    e.preventDefault();
    actions.createProject(
      area,
      name,
      generalDescription,
      image,
      start,
      cost,
      taxes,
      developer,
      jobs
    );
    setArea("");
    setName("");
    setGeneralDescription("");
    setImage("");
    setStart("");
    setCost("");
    setTaxes("");
    setDeveloper("");
    setJobs("");
    history.push("/previewproject");
  };

  return (
    <>
      <>
        <div className="container-fluid w-100" id="banner_wrapper">
          <div className="text-center py-5" id="bg-image" style={bgImg}>
            <h1 id="upper_banner_h1">Create a new Project</h1>
            <p className="mb-4" id="upper_banner_p">
              Please fill the following form
            </p>
            <form className="row">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-8">
                  <FormInput
                    divClassName="mb-2"
                    inputType="text"
                    inputClassName="form-control-private col-12 mb-3"
                    inputId="formArea"
                    inputPlaceholder="Type here..."
                    labelClassName="form-label-private col-12 mb-2"
                    labelFor="area"
                    labelText="Project Area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-8">
                  <FormInput
                    divClassName="mb-3"
                    inputType="text"
                    inputClassName="form-control-private col-12 mb-3"
                    inputId="formName"
                    inputPlaceholder="Type here..."
                    labelClassName="form-label-private col-12 mb-2"
                    labelFor="name"
                    labelText="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="General Description"
                    className="form-control-private col-12 mb-4"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={generalDescription}
                    onChange={(e) => setGeneralDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="When will it start and finish?"
                    className="form-control-private col-12 mb-4"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="How much does it costs?"
                    className="form-control-private col-12 mb-4"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="Will I need to pay more taxes?"
                    className="form-control-private col-12 mb-4"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={taxes}
                    onChange={(e) => setTaxes(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="Who is developing the project?"
                    className="form-control-private col-12 mb-4"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={developer}
                    onChange={(e) => setDeveloper(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-10">
                  <TextArea
                    label="How many jobs will be created?"
                    className="form-control-private col-12 mb-5"
                    labelClassName="form-label-private col-12 mb-2 d-flex justify-content-start"
                    value={jobs}
                    onChange={(e) => setJobs(e.target.value)}
                  />
                </div>
              </div>
            </form>
            <span>
              <MainButton
                to={"/previewproject"}
                buttonText="Submit"
                onClick={handleProject}
              />
            </span>
          </div>
        </div>
      </>
    </>
  );
};

export default CreateProject;
