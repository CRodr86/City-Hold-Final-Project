import React from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <div className={props.divClassName}>
      <label for={props.labelFor} className={props.labelClassName}>
        {props.labelText}
      </label>
      <input
        type={props.inputType}
        className={props.inputClassName}
        placeholder={props.inputPlaceholder}
        aria-label={props.inputAriaLabel}
        id={props.inputId}
      />
    </div>
  );
};

FormInput.propTypes = {
  divClassName: PropTypes.string,
  labelFor: PropTypes.string,
  labelClassName: PropTypes.string,
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputAriaLabel: PropTypes.string,
  inputId: PropTypes.string,
};

export default FormInput;
