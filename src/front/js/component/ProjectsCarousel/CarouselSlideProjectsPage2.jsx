import React from "react";
import { HashLink } from 'react-router-hash-link'
import CarouselItem from "./CarouselItem.jsx";
import "./projectsCarousel.css";
import PropTypes from "prop-types";
import GreenBus from "../../../img/GreenBus.png";
import TrainStation from "../../../img/TrainStation.png";



const CarouselSlideProjectsPage1 = (props) => {
	return (
    <>
      <div className="row d-flex justify-content-evenly">
        <CarouselItem
        id="carousel_item_wrapper"
          topText={
            <p>
                <em>Voting coming soon</em>
            </p>
          }
          title="Declaration of Penn Station as historic building"
          description="Taking into consideration the public discussion of the old station, City Hall is considerng the declaration. "
          topButtonText="Project Details"
          bottomButtonText="Proposal"
          image={TrainStation}
          imageAlt="Penn Station"
          toVote="#"
          toDetails="/projectdetails"
        />
        <CarouselItem
          id="carousel_item_wrapper"
          topText={
            <p>
                <em>Voting coming soon</em>
            </p>
          }
          title="Acquisition of new bus units for the city"
          description="Due to the years of service of the actual bus fleet, City Hall is planning the acquisition of 25 new eco units."
          topButtonText="Project Details"
          bottomButtonText="Proposal"
          image={GreenBus}
          imageAlt="Penn Station"
          toVote="#"
          toDetails="/projectdetails"
        />
      
          
      
      </div>
    </>
  );
};

export default CarouselSlideProjectsPage1