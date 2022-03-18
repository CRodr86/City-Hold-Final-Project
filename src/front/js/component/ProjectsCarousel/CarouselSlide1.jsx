import React from "react";
import CarouselItem from "./CarouselItem.jsx";
import "./projectsCarousel.css";
import PedestrianStreet from "../../../img/PedestrianStreet.png";
import NewMall from "../../../img/NewMall.png";
import "./carouselSlide1.css";

const CarouselSlide1 = () => {
  return (
    <>
      <div className="row d-flex justify-content-evenly">
        <CarouselItem
          id="carousel_item_wrapper"
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
          toVote="/publicvotingsinglepoll"
          toDetails="/projectdetails"
        />
        <CarouselItem
          id="carousel_item_wrapper"
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
          toVote="/publicvotingsinglepoll"
          toDetails="/projectdetails"
        />
      </div>
    </>
  );
};

export default CarouselSlide1;
