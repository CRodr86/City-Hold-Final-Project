import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { HashLink } from 'react-router-hash-link';
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";




const ThankYouSignIn = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="Welcome to City-Hold. Your account has been activated."
        h1ClassName="px-3 mt-3 mb-5" 
        btnPosition1= "d-grid gap-2 col-6 mx-auto mb-3"
        btnPosition2="d-grid gap-2 col-6 mx-auto"
        button1= {<MainButton to="/projects" buttonText="Review Projects"/>}
        button2= {<MainButton to="/" buttonText="Return Home"/>}
        
        />

        
        
        
      
    </>
  );
};

export default ThankYouSignIn;