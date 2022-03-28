import React from "react";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import CarouselSlideProjectsPage1 from "../component/ProjectsCarousel/CarouselSlideProjectsPage1.jsx";

const ProjectsHome = () => {
  return (
    <>
      <GeneralBackground
        gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="City Projects"
        h1ClassName="pb-2"
        pClassName="px-5 pb-4"
        secondaryText="In this section you can review all details regarding the projects. You can also leave a proposal with your opinion."
        mainContent={<CarouselSlideProjectsPage1 />}
      />
    </>
  );
};

export default ProjectsHome;
