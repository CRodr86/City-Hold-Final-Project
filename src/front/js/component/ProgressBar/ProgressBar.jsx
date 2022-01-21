import React from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  return (
    <div>
      <h5 className="progress-label">{props.label}</h5>
      <div className="progress border border-3 mb-3">
        <div
          className="progress-bar"
          id={props.id}
          role="progressbar"
          aria-valuenow={props.valueNow}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {props.value}
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  valueNow: PropTypes.string,
  value: PropTypes.string,
};

export default ProgressBar;
