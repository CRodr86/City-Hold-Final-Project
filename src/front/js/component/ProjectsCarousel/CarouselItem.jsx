import React from "react";
import { HashLink } from "react-router-hash-link";
import "./carouselItem.css";
import PropTypes from "prop-types";


const CarouselItem = (props) => {
  return (
    <>
      <div className="card bg-transparent col-lg-4 m-3 p-2" id={props.id}>
        <div
          className="card-text text-start mb-2 mt-1 ms-2"
          id="carousel_card_toptxt"
        >
          {props.topText}
        </div>
        <img
          src={props.image}
          className="card-img-top h-75 w-75 mx-auto"
          alt={props.imageAlt}
        />
        <div className="card-body p-1">
          <h5 className="card-title" id="carousel_card_title">
            {props.title}
          </h5>
          <p className="card-text" id="carousel_card_description">
            {props.description}
          </p>
          <div className="d-grid gap-2 col-6 mx-auto">{props.btn}</div>
        </div>
      </div>
    </>
  );
};

CarouselItem.propTypes = {
  topText: PropTypes.object,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  topButtonText: PropTypes.string,
  bottomButtonText: PropTypes.string,
  toVote: PropTypes.string,
  toDetails: PropTypes.string,
  id: PropTypes.string,
  btn: PropTypes.object,
};

export default CarouselItem;
