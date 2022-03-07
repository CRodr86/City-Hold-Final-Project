import React from "react";
import "../../styles/proposals5.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import { HashLink } from "react-router-hash-link";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";

let bgImg = {
  background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
  backgroundPosition: `center`,
  backgroundSize: "cover",
  height: "max-content",
};

const Proposals5 = () => {

  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-8 col-md-6 col-lg-4">
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              We will be reviewing your proposal in the next few days.
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-6 form-bg py-5 px-4 rounded-3">
            <div className="row mt-1">
              <div className="col-12 mb-5" id="proposals5Text">
                <p>You will recieve an email with the confirmation.</p>
                <p> Your proposal Id is: </p>
                <p>
                  If you have any questions or in any time you want to update or
                  add additional information to your proposal you can access
                  your file.
                </p>
                <p>
                  Please let us know how do you want to recieve information
                  about your proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3">
          </div>
          <div className="col-3">
            <div className="d-flex justify-content-end">
              <MainButton buttonText="Return Home" to="/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proposals5;
