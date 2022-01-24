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
        button={<MainButton to="#" dataToggle="modal" dataTarget="#signInModal"  buttonText="Start"  />}
        
      />
    </>
  );
};





export default PublicVotingHome;