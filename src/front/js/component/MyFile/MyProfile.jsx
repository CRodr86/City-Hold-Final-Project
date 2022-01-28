import React from "react";
import { Link } from "react-router-dom";
import "./myFile.css";
import PropTypes from "prop-types";
import MyProfileField from "./MyProfileField.jsx";
import MainButton from "../MainButton/MainButton.jsx";




const MyProfile = (props) => {
	return (
    <>
     <div className="row g-3 bg-white m-auto">
         
         <MyProfileField title="First name" content="Jane"/>
         <MyProfileField title="Last name" content="Doe"/>
         <MyProfileField title="Email" content="janedoe@hotmail.com"/>
         <MyProfileField title="Home Phone" content="987654321"/>
         <MyProfileField title="Mobile Phone" content="678912345"/>
         <MyProfileField title="Adress" content="Example Av, 1234 "/>
         <MyProfileField title="Zip Code" content="28021 "/>
         <div className="col-md-6  mt-4 text-center"><MainButton buttonText="Update profile" to="#"/></div>
        
     </div>
    </>
  );
};

MyProfile.propTypes = {


};


export default MyProfile