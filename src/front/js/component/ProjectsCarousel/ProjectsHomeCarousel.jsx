import React from "react";

import "./projectsCarousel.css";
import CarouselSlideProjectsPage1 from "./CarouselSlideProjectsPage1.jsx";
import CarouselSlideProjectsPage2 from "./CarouselSlideProjectsPage2.jsx";




const ProjectsCarousel = (props) => {
	return (
    <>
      <div className="container h-100 p-0 rounded" id="carousel_wrapper">

        <div className="row ">
          <div className="col-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CarouselSlideProjectsPage1 />
                </div>
                <div className="carousel-item">
                <CarouselSlideProjectsPage2 />
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

export default ProjectsCarousel