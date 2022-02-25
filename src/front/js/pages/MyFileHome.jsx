import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UpperBanner from "../component/UpperBanner/UpperBanner.jsx";
import MainButton from "../component/MainButton/MainButton.jsx";



const MyFileHome = (props) => {

  const history = useHistory();
  const token = sessionStorage.getItem("jwt-token");

  if (token && token != "" && token != undefined){
    history.push("/myfileprivate")
  }
  return (
    <>
      <UpperBanner
        bgClassName="bg-image text-center"
        primaryText="Welcome to City-Hold"
        secondaryText="Please sign up or log in to access your file."
        button={<MainButton to="#" dataToggle="modal" dataTarget="#signInModal"  buttonText="Start"  />}
        
      />
    </>
  );
};





export default MyFileHome;