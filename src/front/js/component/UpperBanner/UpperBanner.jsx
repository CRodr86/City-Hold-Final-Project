import React from "react";
import { Link } from "react-router-dom";
import UpperBannerImg from "../../../img/UpperBannerImg.png"
import { AboutButton } from "../AboutButton/AboutButton.jsx";
import "./upperBanner.css"
let bgImg = {background: `linear-gradient(0deg, rgba(2, 48, 71, 0.5), rgba(2, 48, 71, 0.5)), url(${UpperBannerImg})`,
backgroundPosition: `bottom`,
}


const UpperBanner = () => {
	return (
    <>
      <div className="container w-100" id="banner_wrapper">
        <div className="row ">
          <div className="col-12 ">
            <div className="bg-image px-5" style={bgImg}>
              <h1 className="pb-2 ">Participating has never been so easy.</h1>
              <p className=" pb-3 w-75 ">
                Get involved and keep informed of everything that is happening
                in our city.
              </p>
              <AboutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperBanner
