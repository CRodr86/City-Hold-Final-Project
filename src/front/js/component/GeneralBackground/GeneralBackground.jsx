import React from "react";

import AuxBackgroundImg from "../../../img/AuxBackgroundImg.png";
import MainButton from "../MainButton/MainButton.jsx";
import "./generalBackground.css";
import PropTypes from "prop-types";

const GeneralBackground = (props) => {
  //Background img style variable

  let bgImg = {
    background: `linear-gradient(0deg, rgba(2, 48, 71, 0.6), rgba(2, 48, 71, 0.6)), url(${AuxBackgroundImg})`,
    backgroundPosition: `center`,
    backgroundSize: "cover",
    height: "max-content",
  };
  return (
    <>
      <div className="container-fluid w-100" id="banner_wrapper">
        <div className="row ">
          <div className="col-12 ">
            <div className={props.gralBgClassName} style={bgImg}>
              <h1 className={props.h1ClassName} id="general_bg_h1">
                {props.primaryText}
              </h1>
              <p className={props.pClassName} id="general_bg_p">
                {props.secondaryText}
              </p>
              <div className="container" id="main_div">
                {props.mainContent}
              </div>
              <span className={props.btnPosition1}>{props.button1}</span>
              <span className={props.btnPosition2}>{props.button2}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainButton.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string,
  button: PropTypes.element,
  h1ClassName: PropTypes.string,
  pClassName: PropTypes.string,
  gralBgClassName: PropTypes.string,
  btnPosition: PropTypes.string,
  mainContent: PropTypes.element,
};

export default GeneralBackground;
