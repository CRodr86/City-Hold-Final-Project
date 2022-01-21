import React from "react";
import { Link } from "react-router-dom";
import CarouselItem from "./CarouselItem.jsx";
import "./projectsCarousel.css";
import PedestrianStreet from "../../../img/PedestrianStreet.png";
import NewMall from "../../../img/NewMall.png"
import PropTypes from "prop-types";



const CarouselSlide1 = (props) => {
	return (
    <>
      <div className="row d-flex justify-content-evenly">
        <CarouselItem
          topText={
            <p>
              <strong>17</strong> <em>days left to vote</em>
            </p>
          }
          title="Construction of pedestrian streets"
          description="This project was developed by the City Hall in order to give priority to pedestrians in downtown area."
          topButtonText="Project Details"
          bottomButtonText="Vote"
          image={PedestrianStreet}
          imageAlt="Pedestrian Street"
        />
        <CarouselItem
          topText={
            <p>
              <strong>30</strong> <em>days left to vote</em>
            </p>
          }
          title="Construction of new shopping mall"
          description="This project was developed by the Mallius company. The proposal is to build a mall in an empty lot. "
          topButtonText="Project Details"
          bottomButtonText="Vote"
          image={NewMall}
          imageAlt="New Mall Construction"
        />
      </div>
    </>
  );
};

// topText: PropTypes.string,
//     image: PropTypes.string,
//     imageAlt: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     topButtonText: PropTypes.string,
//     bottomButtonText: PropTypes.string,


export default CarouselSlide1
