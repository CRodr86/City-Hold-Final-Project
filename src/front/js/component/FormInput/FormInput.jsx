import React from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  return (
    <div className={props.divClassName}>
      <label htmlFor={props.labelFor} className={props.labelClassName}>
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
        name={props.name}
        required={props.required}
        onKeyUp={props.onKeyUp}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  required: PropTypes.bool,
  onKeyUp: PropTypes.func,
};

export default FormInput;
