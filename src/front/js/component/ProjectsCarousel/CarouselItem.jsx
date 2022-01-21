import React from "react";
import { Link } from "react-router-dom";
// import UpperBannerImg from "../../../img/UpperBannerImg.png"
import "./carouselItem.css";
import PropTypes from "prop-types";



const CarouselItem = (props) => {
	return (
    <>
  
        <div className="card bg-transparent col-lg-4 m-3 p-2" id="carousel_item_wrapper">
        <p className="card-text text-start mb-0 mt-1 ms-2" id="carousel_card_toptxt">{props.topText}</p>
          <img
            src={props.image}
            className="card-img-top h-75 w-75 mx-auto"
            alt={props.imageAlt}
          />
          <div className="card-body p-1">
            <h5 className="card-title" id="carousel_card_title">{props.title}</h5>
            <p className="card-text" id="carousel_card_description">{props.description}</p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-outline-warning" id="details_button">
              {props.topButtonText}
              </button>
              <button className="btn btn-warning" id="vote_button">
              {props.bottomButtonText}
              </button>
            </div>
          </div>
        </div>
     

      {/* <div className="col-4 my-4 py-4 h-100" id="carousel_item_wrapper">
            <p className="text-start">{props.topText}</p>
            <img className="img-fluid rounded mt-2 mb-3 px-2" src={props.image} alt={props.imageAlt} />
            <h5 className="text-center">{props.title}</h5>
            <p className="text-center">{props.description}</p>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="button" className="btn btn-outline-warning" id="details_button">
                {props.topButtonText}
              </button>
              <button type="button" className="btn btn-warning" id="vote_button">
                {props.bottomButtonText}
              </button>
            </div>
          </div> */}
    </>
  );
};

CarouselItem.propTypes = {
    topText: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    topButtonText: PropTypes.string,
    bottomButtonText: PropTypes.string,
};


export default CarouselItem