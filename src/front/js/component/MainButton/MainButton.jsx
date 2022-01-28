import React from "react";
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./mainButton.css";
import PropTypes from "prop-types";

const MainButton = (props) => {
  return (
    <>
<<<<<<< HEAD
      <Link to={props.toLink}>
        <button type="button" className="btn mainBtn px-5">
          {props.buttonText}
        </button>
      </Link>
=======
     <HashLink to={props.to} data-bs-toggle={props.dataToggle}  data-bs-target={props.dataTarget}> <button type="button" className="btn btn-warning px-5" id="main_button">{props.buttonText}</button></HashLink>
>>>>>>> f5fb4a826d86ca0e500d9b4d4e5c30848bcec058
    </>
  );
};


MainButton.propTypes = {
  buttonText: PropTypes.string,
<<<<<<< HEAD
  toLink: PropTypes.string,
=======
  to: PropTypes.string,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
>>>>>>> f5fb4a826d86ca0e500d9b4d4e5c30848bcec058
};

export default MainButton;
