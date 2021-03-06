import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/proposals5.css";
import MainButton from "../component/MainButton/MainButton.jsx";
import AuxBackgroundImg from "../../img/AuxBackgroundImg.png";

const Proposals5 = () => {
  //Style variable
  let bgImg = {
    background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
  };

  //Getting id from store
  const { store, actions } = useContext(Context);
  const proposalId = store.id;

  return (
    <>
      <div className="container-fluid w-100 proposals1-body" style={bgImg}>
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-8 col-md-6 col-lg-4"></div>
        </div>
        <div className="row d-flex justify-content-center mt-1">
          <div className="col-8 text-center">
            <h3 id="proposals1Header">
              We will be reviewing your proposal in the next few days.{" "}
            </h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-6 form-bg py-5 px-4 rounded-3">
            <div className="row mt-1">
              <div className="col-12 mb-5" id="proposals5Text">
                <p>
                  Your proposal has been sent successfully. Your proposal ID Nº
                  is: {proposalId}{" "}
                </p>
                <p>
                  If you have any questions or in any time you want to update or
                  add additional information to your proposal you can access
                  your file.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4 pb-5">
          <div className="col-3"></div>
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
