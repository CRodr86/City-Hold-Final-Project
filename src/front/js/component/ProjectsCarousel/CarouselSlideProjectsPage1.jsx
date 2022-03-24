import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import CarouselItem from "./CarouselItem.jsx";
import "./projectsCarousel.css";
import PedestrianStreet from "../../../img/PedestrianStreet.png";
import CityHoldLogo from "../../../img/CityHoldLogo.png";
import PhotoNews3 from "../../../img/PhotoNews3.jpg";
import PhotoNews1 from "../../../img/PhotoNews1.jpg";
import BikeLane from "../../../img/BikeLane.jpg";
import CityTram from "../../../img/CityTram.jpg";
import GreenBus from "../../../img/GreenBus.png";
import NewMall from "../../../img/NewMall.png";
import EmptyStreet from "../../../img/EmptyStreet.jpg";
import { useHistory } from "react-router-dom";
import MainButton from "../MainButton/MainButton.jsx";

const CarouselSlideProjectsPage1 = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  // Getting all projects from back as page first loads

  useEffect(() => {
    actions.getAllProjects();
  }, []);

  //Handler onClick function gets only one project details

  const getProjectData = (id) => {
    actions.getProjectData(id);
    history.push("/projectdetails");
  };

  // Store data variable

  const projects = store.data;

  return (
    <>
      <div className="container h-100 p-0 rounded" id="carousel_wrapper">
        <div className="row d-flex justify-content-evenly">
          {projects?.map((item) => {
            if (item.area == "Education") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={PhotoNews3}
                  imageAlt="School building"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Streets") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={PedestrianStreet}
                  imageAlt="Pedestrian street"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Nature") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={PhotoNews1}
                  imageAlt="Plant"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }
            if (item.area == "Cycling") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={BikeLane}
                  imageAlt="Bike Lane"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Trains") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={CityTram}
                  imageAlt="Tram"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Transport") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={GreenBus}
                  imageAlt="Bus"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Buildings") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={NewMall}
                  imageAlt="Mall"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }

            if (item.area == "Traffic") {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={EmptyStreet}
                  imageAlt="Street"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            } else {
              return (
                <CarouselItem
                  id="carousel_item_wrapper"
                  key={item.id}
                  topText={
                    <div className="mb-3">
                      <strong>Project Area: </strong> <em>{item.area}</em>
                    </div>
                  }
                  title={item.name}
                  description={item.general_description}
                  topButtonText="Project Details"
                  bottomButtonText="Leave Proposal"
                  image={CityHoldLogo}
                  imageAlt="City Hold"
                  btn={
                    <MainButton
                      buttonText="More Details"
                      onClick={() => getProjectData(item.id)}
                      to="#"
                    />
                  }
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CarouselSlideProjectsPage1;
