import React, { useContext } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MultiPollSelector from "../component/MultiPollSelector/MultiPollSelector.jsx";




const PublicVotingMultiPoll = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText="Select which of the following streets would you choose to be pedestrian only:"
        h1ClassName="pb-4 px-3" 
        mainContent={<MultiPollSelector />}
        
        />

        
        
        
      
    </>
  );
};

export default PublicVotingMultiPoll;