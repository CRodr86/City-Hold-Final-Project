import React, { useContext } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import SinglePollButtons from "../component/SinglePollButtons/SinglePollButtons.jsx";




const PublicVotingSinglePoll = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="Do you agree with the construction of pedestian plaza and streets?"
        h1ClassName="pb-4" 
        mainContent={<SinglePollButtons />}
        
        />

        
        
        
      
    </>
  );
};

export default PublicVotingSinglePoll;