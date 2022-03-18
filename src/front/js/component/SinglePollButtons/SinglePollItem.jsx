import React from "react";
import { HashLink } from "react-router-hash-link";
import "./singlePollItem.css";
import PropTypes from "prop-types";

const SinglePollItem = (props) => {
  return (
    <>
      <HashLink to={props.to}>
        <button
          type="button"
          className="btn btn-outline-warning p-5"
          id={props.id}
        >
          {props.btnText}
          {props.btnIcon}
        </button>
      </HashLink>
    </>
  );
};

SinglePollItem.propTypes = {
  btnText: PropTypes.string,
  btnIcon: PropTypes.string,
  to: PropTypes.string,
  id: PropTypes.string,
};

export default SinglePollItem;
