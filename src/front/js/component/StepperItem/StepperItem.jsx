import React from "react";
import PropTypes from "prop-types";

const StepperItem = (props) => {
  return (
    <button type="button" className={props.stepClass}>
      {props.stepLabel}
    </button>
  );
};

StepperItem.propTypes = {
  stepClass: PropTypes.string,
  stepLabel: PropTypes.string,
};

export default StepperItem;
