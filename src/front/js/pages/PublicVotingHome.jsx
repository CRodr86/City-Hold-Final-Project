import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";



const PublicVotingHome = (props) => {
  return (
    <>
      <UpperBanner
        bgClassName="bg-image text-center"
        primaryText="Your opinion matters"
        secondaryText="Please sign up or log in to participate in the public voting"
        button={<MainButton to="/publicvotingselect" buttonText="Start"  />}
        
      />
    </>
  );
};

// dataToggle="modal" dataTarget="#signInModal"



export default PublicVotingHome;