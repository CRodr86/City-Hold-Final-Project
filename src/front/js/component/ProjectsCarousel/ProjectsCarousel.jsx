import React from "react";
import { Link } from "react-router-dom";

import "./projectsCarousel.css";
import CarouselSlide1 from "./CarouselSlide1.jsx";
import PropTypes from "prop-types";



const ProjectsCarousel = (props) => {
	return (
    <>
      <div className="container h-100" id="carousel_wrapper">
        <div className="row">
          <div className="col-12 ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CarouselSlide1 />
                </div>
                <div className="carousel-item">
                <CarouselSlide1 />
                </div>
                <div className="carousel-item">
                <CarouselSlide1 />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectsCarousel.propTypes = {
slide1: PropTypes.string,
slide2: PropTypes.string,
slide3: PropTypes.string,

};


export default ProjectsCarousel
