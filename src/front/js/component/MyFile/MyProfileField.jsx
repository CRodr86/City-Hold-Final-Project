import React from "react";
import "./myProfileField.css";
import PropTypes from "prop-types";

const MyProfileField = (props) => {
  return (
    <>
      <div className="col-md-6 text-start">
        <p id="profile_title">{props.title}</p>
        <p id="profile_content">{props.content}</p>
      </div>
    </>
  );
};

MyProfileField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default MyProfileField;
