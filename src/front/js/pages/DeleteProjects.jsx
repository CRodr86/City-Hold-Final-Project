import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import MainButton from "../component/MainButton/MainButton.jsx";
import { useHistory } from "react-router-dom";
import CarouselItem from "../component/ProjectsCarousel/CarouselItem.jsx";
import CityHoldLogo from "../../img/CityHoldLogo.png";

const DeleteProjects = () => {
  //Style variable
  let bgImg = { background: "#023047", height: "max-content" };

  //Context variables
  const { store, actions } = useContext(Context);
  const data = store.data;
  const history = useHistory();

  // const [project, setProject] = useState(data);

  // Getting all projects from back as page first loads
  useEffect(() => {
    actions.getAllProjects();
  }, []);

  //Handler function renders only one user data
  const deleteProject = (id) => {
    actions.deleteProject(id);
    // history.push("/deleteprojects");
    // const newArray = project.filter((item, i) => i != id);
    // setProject(newArray);
  };

  // const removeProject = (id) => {
  //   const newArray = project.filter((item, i) => i != id);
  //   setProject(newArray);
  //   deleteProject(id);
  // };

  return (
    <>
      <div className="container-fluid w-100" id="banner_wrapper">
        <div className="text-center py-4" id="bg-image" style={bgImg}>
          <h1 id="upper_banner_h1">All Projects</h1>
          <div className="container h-100 p-0 rounded" id="carousel_wrapper">
            <div className="row d-flex justify-content-evenly">
              {data?.map((item) => (
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
                  imageAlt="Logo"
                  btn={
                    <MainButton
                      buttonText="Delete Project"
                      onClick={() => deleteProject(item.id)}
                    />
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProjects;
