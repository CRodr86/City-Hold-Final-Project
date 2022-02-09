import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

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
        value={props.value}
        onChange={props.onChange}
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
  value: PropTypes.func,
  onChange: PropTypes.func,
};

export default FormInput;
