import React from "react";
import UpperBannerImg from "../../../img/UpperBannerImg.png";
import MainButton from "../MainButton/MainButton.jsx";
import "./upperBanner.css";
import PropTypes from "prop-types";

const UpperBanner = (props) => {
  //Style variable

  let bgImg = {
    background: `linear-gradient(0deg, rgba(2, 48, 71, 0.75), rgba(2, 48, 71, 0.6)), url(${UpperBannerImg})`,
    backgroundPosition: `bottom`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className="container-fluid w-100" id="banner_wrapper">
        <div className="row " id="upper-b-elem">
          <div className="col-12 ">
            <div className={props.bgClassName} id="bg-image" style={bgImg}>
              <h1 className={props.h1ClassName} id="upper_banner_h1">
                {props.primaryText}
              </h1>
              <p className={props.pClassName} id="upper_banner_p">
                {props.secondaryText}
              </p>
              <span>{props.button}</span>
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
  bgClassName: PropTypes.string,
};

export default UpperBanner;
