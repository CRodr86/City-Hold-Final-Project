import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { HashLink } from 'react-router-hash-link';
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MultiPollSelector from "../component/MultiPollSelector/MultiPollSelector.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";




const ThankYou = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 mb-3 text-center"
        primaryText="Thank you for participating"
        h1ClassName="px-3 mt-3" 
        btnPosition1="btn col-4 pt-5 mt-4 "
        button1= {<MainButton to="/publicvotingselect" buttonText="More projects"/>}
        btnPosition2="btn col-4 pt-5 mt-4"
        button2= {<MainButton to="/" buttonText="Return to Home"/>}
        
        />

        
        
        
      
    </>
  );
};

export default ThankYou;