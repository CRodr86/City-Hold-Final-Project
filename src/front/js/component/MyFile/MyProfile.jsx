import React, { useContext } from "react";
import { Context } from "../../store/appContext.js";
import "./myFile.css";
import MyProfileField from "./MyProfileField.jsx";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MyProfile = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row g-3 bg-white m-auto">
        <MyProfileField title="First name" content={store.name} />
        <MyProfileField title="Last name" content={store.lastname} />
        <MyProfileField title="Email" content={store.email} />
        <MyProfileField title="Home Phone" content={store.homePhone} />
        <MyProfileField title="Mobile Phone" content={store.mobilePhone} />
        <MyProfileField title="Adress" content={store.address1} />
        <MyProfileField title="Zip Code" content={store.zipCode} />
        <div className="col-md-6  mt-4 text-center">
        
        </div>
      </div>
    </>
  );
};


export default MyProfile;
