import React, { useContext } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import ProjectsCarousel from "../component/ProjectsCarousel/ProjectsCarousel.jsx";




const PublicVotingAllVotes = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="As of today there are 2 projects being put to vote in the city"
        h1ClassName="pb-4" 
        mainContent={<ProjectsCarousel />}
        
        />
        
        
      
    </>
  );
};

export default PublicVotingAllVotes;