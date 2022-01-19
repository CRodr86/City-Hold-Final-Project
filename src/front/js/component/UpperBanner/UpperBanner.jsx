import React from "react";
import { Link } from "react-router-dom";
import UpperBannerImg from "../../../img/UpperBannerImg.png"
import MainButton  from "../MainButton/MainButton.jsx";
import "./upperBanner.css";
import PropTypes from "prop-types";
import propTypes from "prop-types";
let bgImg = {background: `linear-gradient(0deg, rgba(2, 48, 71, 0.5), rgba(2, 48, 71, 0.5)), url(${UpperBannerImg})`,
backgroundPosition: `bottom`,
}


const UpperBanner = (props) => {
	return (
    <>
      <div className="container w-100" id="banner_wrapper">
        <div className="row ">
          <div className="col-12 ">
            <div className="bg-image px-5" style={bgImg}>
              <h1 className="pb-2 ">{props.primaryText}</h1>
              <p className=" pb-3 w-75">
                {props.secondaryText}
              </p>
              <MainButton buttonText="About us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainButton.propTypes = {
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
};


export default UpperBanner
