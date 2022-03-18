import React from "react";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";

const ThankYouSignIn = () => {
  return (
    <>
      <GeneralBackground
        gralBgClassName="bg-image px-2 py-5 h-100 text-center"
        primaryText="¡Welcome to City-Hold! Your account is now active. Please enter your email and password."
        h1ClassName="px-3 mt-3 mb-5 fs-4"
        btnPosition1="d-grid gap-2 col-6 mx-auto mb-5"
        button1={
          <MainButton
            to="#"
            dataToggle="modal"
            dataTarget="#signInModal"
            buttonText="Sign Up"
          />
        }
      />
    </>
  );
};

export default ThankYouSignIn;
