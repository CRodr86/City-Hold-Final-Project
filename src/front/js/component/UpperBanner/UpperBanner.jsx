import React from "react";
import { Link } from "react-router-dom";
import UpperBannerImg from "../../../img/UpperBannerImg.png"
import { AboutButton } from "../AboutButton/AboutButton.jsx";
import "./upperBanner.css"


export const UpperBanner = () => {
	return (
    <>
      <div className="container-fluid " id="banner_wrapper">
        <div className="row my-2 align-items-center">
          <div className="col-12 ">
            <h1 class="text-start  mt-5 ">Participating has never been so easy.</h1>
            <h5 class="text-start mt-3 mb-4 ">
              Get involved and keep informed of everything that is happening in
              our city.
            </h5>

            <AboutButton />
          </div>
        </div>
      </div>
    </>
  );
};
