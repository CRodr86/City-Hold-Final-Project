import React from "react";
import { Link } from "react-router-dom";
import "./mainButton.css";
import PropTypes from "prop-types";

const MainButton = (props) => {
  return (
    <>
      <Link to={props.to}>
        <button type="button" className="btn px-5">
          {props.buttonText}
        </button>
      </Link>
    </>
  );
};

MainButton.propTypes = {
  buttonText: PropTypes.string,
  to: PropTypes.string,
};

export default MainButton;
