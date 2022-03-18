import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const PublicVotingHome = () => {
  //Getting token form backend
  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  if (token && token != "" && token != undefined) {
    history.push("/publicvotingselect");
  }
  return (
    <>
      <UpperBanner
        bgClassName="bg-image text-center"
        primaryText="Your opinion matters"
        secondaryText="Please sign up or log in to participate in the public voting"
        button={
          <MainButton
            to="#"
            dataToggle="modal"
            dataTarget="#signInModal"
            buttonText="Start"
          />
        }
      />
    </>
  );
};

export default PublicVotingHome;
