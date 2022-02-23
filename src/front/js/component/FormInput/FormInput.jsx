import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const FormInput = (props) => {
  // const [input, setInput] = useState("");
  // const inputTextChanger = ev => {
	// 	setInput(ev.target.value);
	// };


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
  name: PropTypes.string,
};

export default FormInput;
