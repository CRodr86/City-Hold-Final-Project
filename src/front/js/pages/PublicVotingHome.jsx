import React, { useContext } from "react";
import { Context } from "../store/appContext";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";



const PublicVotingHome = () => {
  return (
    <>
      <UpperBanner
        primaryText="Your opinion matters"
        secondaryText="Please sign up or log in to participate in the public voting"
        button={<MainButton buttonText="Sign In"/>}
      />
    </>
  );
};

export default PublicVotingHome;