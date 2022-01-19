import React from "react";
import { Link } from "react-router-dom";
import "./mainButton.css";
import PropTypes from "prop-types";


const MainButton = (props) => {
	return (
    <>
      <button type="button" className="btn btn-warning px-5">{props.buttonText}</button>
    </>
  );
};

MainButton.propTypes = {
  buttonText: PropTypes.string,
};

export default MainButton;