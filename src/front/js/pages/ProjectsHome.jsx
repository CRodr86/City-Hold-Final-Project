import React, { useContext } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import ProjectsHomeCarousel from "../component/ProjectsCarousel/ProjectsHomeCarousel.jsx";




const ProjectsHome = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="As of today the city has plans to develop 4 different projects"
        h1ClassName="pb-2" 
        pClassName="px-5 pb-4"
        secondaryText="In this section you can review all details regarding the projects. You can also access those projects that are being put to vote or leave a proposal in those that are not yet put to vote."
        mainContent={<ProjectsHomeCarousel />}
        
        />
        
        
      
    </>
  );
};

export default ProjectsHome;