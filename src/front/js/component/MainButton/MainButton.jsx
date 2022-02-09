import React from "react";
import { HashLink } from "react-router-hash-link";
import "./mainButton.css";
import PropTypes from "prop-types";

const MainButton = (props) => {
  return (
    <>
      <HashLink
        to={props.to}
        data-bs-toggle={props.dataToggle}
        data-bs-target={props.dataTarget}
      >
        {" "}
        <button type="button" className="btn btn-warning px-5" id="main_button" onClick={props.onClick}>
          {props.buttonText}
        </button>
      </HashLink>
    </>
  );
};

MainButton.propTypes = {
  buttonText: PropTypes.string,
  toLink: PropTypes.string,
  to: PropTypes.string,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
  onClick: PropTypes.func,
};

export default MainButton;
