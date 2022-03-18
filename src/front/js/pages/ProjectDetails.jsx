import React from "react";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";
import VoteAcordeon from "../component/DetailsAcordeon/VoteAcordeon.jsx";

const ProjectDetails = () => {
  return (
    <>
      <GeneralBackground
        gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="FAQ"
        h1ClassName="pb-2 px-3"
        secondaryText="In this section you will find all the detailed infomation about the project."
        mainContent={<VoteAcordeon />}
        btnPosition1="btn col-4 "
        button1={<MainButton to="/projects" buttonText="Back" />}
      />
    </>
  );
};

export default ProjectDetails;
