import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";



const ProposalsHome = () => {
  return (
    <>
      <UpperBanner
        primaryText="Tell us your idea to make the city better"
        secondaryText="Please fill all the following proposal form so we can give you the best answer to your problem or suggestion. Once you finish we will review it and give you an answer as soon as posible. You can always access your proposal in your file."
        button={<MainButton buttonText="Start"/>}
      />
    </>
  );
};

export default ProposalsHome;