import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./myFile.css";
import PropTypes from "prop-types";
import MyProfileField from "./MyProfileField.jsx";
import MainButton from "../MainButton/MainButton.jsx";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const MyProfile = (props) => {
  const { store, actions } = useContext(Context);
  const getMyProposals = (e) => {
    e.preventDefault();
    actions.getProposal();
  };
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
          <MainButton
            buttonText="My Proposals"
            to="/myfiledetails"
            onClick={getMyProposals}
          />
        </div>
      </div>
    </>
  );
};

MyProfile.propTypes = {};

export default MyProfile;
