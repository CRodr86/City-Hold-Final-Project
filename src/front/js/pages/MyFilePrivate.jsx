import React, { useContext } from "react";
import { Context } from "../store/appContext";
import GeneralBackground from "../component/GeneralBackground/GeneralBackground.jsx";
import MyFileComponent from "../component/MyFile/MyFileComponent.jsx";




const MyFilePrivate = () => {
  return (
    <>
        <GeneralBackground gralBgClassName="bg-image px-2 py-5 text-center"
        primaryText=""
        h1ClassName="pb-2" 
        pClassName="px-5 pb-4"
        mainContent={<MyFileComponent />}
        
        />

        
        
      
    </>
  );
};

export default MyFilePrivate;