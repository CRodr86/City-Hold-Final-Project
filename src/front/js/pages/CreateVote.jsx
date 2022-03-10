import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import FormInput from "../component/FormInput/FormInput.jsx";

const CreateVote = (props) => {
  let bgImg = { background: "#023047" };

  return (
    <>
      <>
        <div className="container-fluid w-100" id="banner_wrapper">
          <div className="row " id="upper-b-elem">
            <div className="col-12 ">
              <div className="text-center" id="bg-image" style={bgImg}>
                <h1 id="upper_banner_h1">Create a new Public Vote</h1>
                <p id="upper_banner_p">Please fill the following form</p>
                <form className="row g-3">
                  <FormInput
                    divClassName="mb-2"
                    inputType="text"
                    inputClassName="form-control-private ms-2"
                    inputId="formEmail"
                    inputPlaceholder="1st Question"
                    labelClassName="form-label-private"
                    labelFor="firstQuestion"
                    labelText="Write the first question you want to put to vote"
                  />
                  <FormInput
                    divClassName="mb-3"
                    inputType="password"
                    inputClassName="form-control-private"
                    inputId="formPassword"
                    inputPlaceholder="Password"
                    labelClassName="form-label-private"
                  />
                </form>
                <span>
                  <MainButton to="/cityhome" buttonText="Access Private Area" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default CreateVote;
