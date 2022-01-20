import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import "./mainButton.css";
import PropTypes from "prop-types";


const MainButton = (props) => {
	return (
    <>
     <HashLink to={props.to}> <button type="button" className="btn btn-warning px-5" id="main_button">{props.buttonText}</button></HashLink>
    </>
  );
};

MainButton.propTypes = {
  buttonText: PropTypes.string,
  to: PropTypes.string,
};

export default MainButton;