import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const MyFileHome = () => {
  const history = useHistory();

  //Token variable form session storage
  const token = sessionStorage.getItem("jwt-token");

  if (token && token != "" && token != undefined) {
    history.push("/myfileprivate");
  }
  return (
    <>
      <UpperBanner
        bgClassName="bg-image text-center"
        primaryText="Welcome to City-Hold"
        secondaryText="Please sign up or log in to access your file."
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

export default MyFileHome;
