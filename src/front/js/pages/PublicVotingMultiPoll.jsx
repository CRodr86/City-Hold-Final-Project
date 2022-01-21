import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { HashLink } from 'react-router-hash-link';
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MultiPollSelector from "../component/MultiPollSelector/MultiPollSelector.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";




const PublicVotingMultiPoll = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="Select which of the following streets would you choose to be pedestrian only:"
        h1ClassName="pb-4 px-3" 
        mainContent={<MultiPollSelector />}
        btnPosition="btn col-4 "
        button= {<MainButton buttonText="Submit"/>}
        />

        
        
        
      
    </>
  );
};

export default PublicVotingMultiPoll;