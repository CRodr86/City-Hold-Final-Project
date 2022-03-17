import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import CarouselItem from "./CarouselItem.jsx";
import "./projectsCarousel.css";
import PedestrianStreet from "../../../img/PedestrianStreet.png";
import NewMall from "../../../img/NewMall.png";
import { useHistory } from "react-router-dom";
import MainButton from "../MainButton/MainButton.jsx";

const CarouselSlideProjectsPage1 = (props) => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    actions.getAllProjects();
  }, []);

  const getProjectData = (id) => {
    actions.getProjectData(id);
    history.push("/projectdetails");
  };

  const projects = store.data;

  return (
    <>
      <div className="container h-100 p-0 rounded" id="carousel_wrapper">
        <div className="row d-flex justify-content-evenly">
          {projects?.map((item) => (
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
              imageAlt="Pedestrian Street"
              btn={
                <MainButton
                  buttonText="More Details"
                  onClick={() => getProjectData(item.id)}
                />
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselSlideProjectsPage1;
