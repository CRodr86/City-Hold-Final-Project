import React from "react";
import { Link } from "react-router-dom";
import "./myFile.css";
import PropTypes from "prop-types";
import FormInput from "../FormInput/FormInput.jsx";
import MainButton from "../MainButton/MainButton.jsx";




const MyFilePassword = (props) => {
	return (
    <>
     <div className="row g-3 bg-white m-auto px-5 pb-5 text-start w-100">
                <FormInput
                  labelFor="currentPassword"
                  labelClassName="form-label"
                  labelText="Current password"
                  inputType="text"
                  inputClassName="form-control"
                  inputPlaceholder="Current password"
                  inputAriaLabel="currentPassword"
                />
                <FormInput
                  labelFor="newPassword"
                  labelClassName="form-label"
                  labelText="New password"
                  inputType="text"
                  inputClassName="form-control"
                  inputPlaceholder="New password"
                  inputAriaLabel="newPassword"
                />
                <FormInput
                  labelFor="confirmNewPassword"
                  labelClassName="form-label"
                  labelText="Confirm new password"
                  inputType="text"
                  inputClassName="form-control"
                  inputPlaceholder="Confirm new password"
                  inputAriaLabel="confirmNewPassword"
                />
                <div className="col text-end mt-4"><MainButton buttonText="Change Password" to="#"/></div>
                
              </div>
              
    </>
  );
};

export default MyFilePassword