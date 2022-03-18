import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CarouselItem from "../component/ProjectsCarousel/CarouselItem.jsx";
import "../component/ProjectsCarousel/projectsCarousel.css";
import PedestrianStreet from "../../img/PedestrianStreet.png";
import "../component/DetailsAcordeon/detailsAcordeon.css";
import DetailsAcordeon from "../component/DetailsAcordeon/DetailsAcordeon.jsx";

const PreviewProject = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row d-flex justify-content-center">
        <CarouselItem
          id="carousel_item_wrapper"
          topText={
            <div className="mb-3">
              <strong>Project Area: </strong>
              <em>{store.area}</em>
            </div>
          }
          title={store.project_name}
          description={store.general_description}
          image={PedestrianStreet}
          imageAlt="Pedestrian Street"
          topButtonText="Details"
          bottomButtonText="Leave Proposal"
        />
      </div>
      <div className="row d-flex justify-content-center mb-3">
        <DetailsAcordeon
          acordeonTitle1="When will it start and finish?"
          acordeonTitle2="How much does it costs?"
          acordeonTitle3="Will I need to pay more taxes?"
          acordeonTitle4="Who is developing the project?"
          acordeonTitle5="How many jobs will be created?"
          acordeonTitle6="I have a proposal regarding this project, what can I do?"
          acordeonText1={store.start}
          acordeonText2={store.cost}
          acordeonText3={store.taxes}
          acordeonText4={store.developer}
          acordeonText5={store.jobs}
          acordeonText6="You can fill out a Proposal Form and we will review it and contact you."
        />
      </div>
    </>
  );
};

export default PreviewProject;
