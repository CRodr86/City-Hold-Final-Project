import React from "react";
import { Link } from "react-router-dom";
import "./newsCarousel.css";
import GreenBus from "../../../img/GreenBus.png";
import NewMall from "../../../img/NewMall.png";
import EmptyStreet from "../../../img/EmptyStreet.jpg";
import CityTram from "../../../img/CityTram.jpg";
import BikeLane from "../../../img/BikeLane.jpg";
import PropTypes from "prop-types";

let bgImg = {background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.30)), url(${EmptyStreet})`,
}

const NewsCarousel = (props) => {
  return (
    <>
      <div className="container" id="news_carousel_wrapper"></div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={EmptyStreet}
              className="d-block w-100 "
              alt="Empty Street"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="title text-start">Washington Av. will be a pedestrian-only street every Sunday, starting in March</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={CityTram} className="d-block w-100" alt="City Tram" />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="title text-start">The City is buying a total of 50 new electric trams to replace actual units</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={BikeLane}
              className="d-block w-100"
              alt="Bike Lane"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="title text-start">A total of 40km of bike lane will be built next year around the city </h2>
             
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

NewsCarousel.propTypes = {};

export default NewsCarousel;
